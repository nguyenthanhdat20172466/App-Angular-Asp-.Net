import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SharedService } from 'src/app/shared.service';
import { format } from 'date-fns';


@Component({
  selector: 'app-them-sua-m-an',
  templateUrl: './them-sua-m-an.component.html',
  styleUrls: ['./them-sua-m-an.component.css']
})
export class ThemSuaMAnComponent implements OnInit{
  myOptionSet = new FormControl();
  tenMonAn: any;
  maMonAn: any;
  @Input() mAn: any;
  thucDon: any;
  dsThucDon:any=[];

  anhMonAn: any;
  pathImage: any;

  selectedValue!: string;
  myForm!: FormGroup;

  constructor(private service: SharedService, private fb: FormBuilder){
    this.myForm = this.fb.group({
      myOptionSet: ['']
    });
  }

  ngOnInit(): void {

    this.service.GetDSTenThucDon().subscribe(data=>{
      this.dsThucDon = data;
    })
    this.tenMonAn = this.mAn.TenMonAn;
    this.maMonAn = this.mAn.MaMonAn;
    this.mAn.AnhMonAn==""? this.anhMonAn = "com.jpg":this.anhMonAn = this.mAn.AnhMonAn;
    this.pathImage = this.service.PhotoUrl + "/" + this.anhMonAn;
  }

  AddThucDon(){
    const currentDate = new Date();
    const dateString = format(currentDate, 'yyyy-MM-dd HH:mm:ss');
    this.selectedValue = this.myOptionSet.value;
    let val = {
      tenMonAn: this.tenMonAn,
      thucDon: this.selectedValue,
      ngayTao: dateString,
      anhMonAn: this.anhMonAn
    };
    this.service.AddDSMonAn(val).subscribe(res=>
      {alert(res.toString())
    });
  }

  EditThucDon(){
    const currentDate = new Date();
    const dateString = format(currentDate, 'yyyy-MM-dd HH:mm:ss');

    this.selectedValue = this.myOptionSet.value;
    let val = {
      maMonAn: this.maMonAn,
      tenMonAn: this.tenMonAn,
      thucDon: this.selectedValue,
      ngayTao: dateString,
      anhMonAn: this.anhMonAn
    };
    this.service.EditDSMonAn(val).subscribe(res=>
      {alert(res.toString())
    });
  }

  uploadImage(event: any){
    var file = event.target.files[0];
    const formData: FormData = new FormData();
    formData.append('uploadFile', file, file.name);

    this.service.LoadPhoto(formData).subscribe((data: any) =>{
      this.anhMonAn = data.toString();
      this.pathImage = this.service.PhotoUrl + "/" + this.anhMonAn;
    } )
  }
}
