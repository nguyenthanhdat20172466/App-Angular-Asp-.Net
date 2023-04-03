using Microsoft.AspNetCore.Mvc;
using API.Models;
using System.Data;
using System.Data.SqlClient;
using System.IO;
using Microsoft.AspNetCore.Hosting;
namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MonAnController : Controller
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;
        public MonAnController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env; 
        }

        [HttpGet]
        public JsonResult GetMonAn()
        {
            string query = "Select * from MonAn";
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
            return new JsonResult(table);
        }

        [HttpPost]
        public JsonResult AddMonAn(MonAn monan)
        {
            string query = @"insert into MonAn values  
                                (N'" + monan.TenMonAn +  "'"+
                                ", N'" + monan.ThucDon + "'"+
                                ", '" + monan.NgayTao + "'" +
                                ", '" + monan.AnhMonAn + "'" +
                                ")";
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
        public JsonResult EditMonAn(MonAn monan)
        {
            string query = @"Update MonAn set TenMonAn = N'" + monan.TenMonAn + "'"
                + ", ThucDon = N'" + monan.ThucDon  + "'"
                + ", NgayTao = '" + monan.NgayTao + "'"
                + ", AnhMonAn = N'" + monan.AnhMonAn + "'"
                + "Where MaMonAn = " + monan.MaMonAn;
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

        [HttpDelete("{mamonan}")]
        public JsonResult DeleteMonAn(int  mamonan)
        {
            string query = @"Delete from MonAn " + "Where MaMonAn = " + mamonan;
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


        [Route("SaveFile")]
        [HttpPost]
        public JsonResult SaveFile()
        {
            try
            {
                var httpRequest = Request.Form;
                var postFile = httpRequest.Files[0];
                string fileName = postFile.FileName;
                var physicalPath = _env.ContentRootPath  + "/Photos/" + fileName;
                using (var stream= new FileStream(physicalPath, FileMode.Create))
                {
                    postFile.CopyTo(stream);
                }
                return new JsonResult(fileName);
            }
            catch(Exception)
            {
                return new JsonResult("com.jpg");
            }
        }

        [Route("GetAllTenThucDon")]
        [HttpGet]
        public JsonResult GetAllTenThucDon()
        {
            string query = "Select TenThucDon from ThucDon";
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
            return new JsonResult(table);
        }
    }
}
