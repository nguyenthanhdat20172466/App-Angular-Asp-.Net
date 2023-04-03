using Microsoft.AspNetCore.Mvc;
using API.Models;
using System.Data;
using System.Data.SqlClient;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ThucDonController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public ThucDonController (IConfiguration configuration)
        {
            _configuration = configuration; 
        }

        [HttpGet]
        public JsonResult GetThucDon()
        {
            string query = "Select MaThucDon, TenThucDon from ThucDon";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DefaultConnection");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon)) {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();  
                }
            }
            return new JsonResult(table);   
        }

        [HttpPost]
        public JsonResult AddThucDon(ThucDon thucdon)
        {
            string query = @"insert into ThucDon values  (N'" + thucdon.TenThucDon+"')";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DefaultConnection");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Post Success");
        }


        [HttpPut]
        public JsonResult EditThucDon(ThucDon thucdon)
        {
            string query = @"Update ThucDon set TenThucDon = N'" + thucdon.TenThucDon + "'" + "Where MaThucDon = " + thucdon.MaThucDon ;
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DefaultConnection");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Put Success");
        }

        [HttpDelete("{mathucdon}")]
        public JsonResult DeleteThucDon(int  mathucdon)
        {
            string query = @"Delete from ThucDon " + "Where MaThucDon = " + mathucdon;
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DefaultConnection");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Delete Success");
        }
    }
}
