import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-ds-m-an',
  templateUrl: './ds-m-an.component.html',
  styleUrls: ['./ds-m-an.component.css']
})
export class DsMAnComponent implements OnInit {
  constructor(private service: SharedService){}

  listMonAn: any=[];
  mAn: any;
  title: any;
  loadingEdit: boolean=false;

  ngOnInit(): void{
    this.ReloadDSThucDon();
   // this.detail(this.tDon);
  }

  ReloadDSThucDon(){
    this.service.GetDSMonAn().subscribe(data => {
      this.listMonAn = data;
    })
  }
  AddThucDon(){
    this.mAn={
      MaMonAn: 0,
      TenThucDon: ""
    }
    this.loadingEdit=true;
    this.title = "Thêm món"

  }

  DeleteThucDon(mAn: any){
    if(confirm("Bạn có chắc muốn xóa không")){
      this.service.DeleteDSMonAn(mAn.MaMonAn).subscribe(data => {
        alert(data.toString());
        this.ReloadDSThucDon()
       })
    }

  }

  detail(mAn: any){
    this.mAn=mAn
    this.loadingEdit=true;
    this.title = "Sửa món"
  }

  reloadEdit(){
    this.loadingEdit=false;
    this.ReloadDSThucDon()
  }
}
