import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-ds-t-don',
  templateUrl: './ds-t-don.component.html',
  styleUrls: ['./ds-t-don.component.css']
})
export class DsTDonComponent implements OnInit {

  constructor(private service: SharedService){}

  listThucDon: any=[];
  tDon: any;
  title: any;
  loadingEdit: boolean=false;

  ngOnInit(): void{
    this.ReloadDSThucDon();
   // this.detail(this.tDon);
  }

  ReloadDSThucDon(){
    this.service.GetDSThucDon().subscribe(data => {
      this.listThucDon = data;
    })
  }
  AddThucDon(){

    this.tDon={
      MaThucDon: 0,
      TenThucDon: ""
    }
    this.loadingEdit=true;
    this.title = "Thêm thực đơn"

  }

  DeleteThucDon(tDon: any){
    if(confirm("Bạn có chắc muốn xóa không")){
      this.service.DeleteDSThucDon(tDon.MaThucDon).subscribe(data => {
        alert(data.toString());
        this.ReloadDSThucDon()
       })
    }

  }

  detail(tDon: any){
    this.tDon=tDon
    this.loadingEdit=true;
    this.title = "Sửa thực đơn"
  }

  reloadEdit(){
    this.loadingEdit=false;
    this.ReloadDSThucDon()
  }

}
