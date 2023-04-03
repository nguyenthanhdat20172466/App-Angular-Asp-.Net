import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-them-sua-t-don',
  templateUrl: './them-sua-t-don.component.html',
  styleUrls: ['./them-sua-t-don.component.css']
})
export class ThemSuaTDonComponent implements OnInit {

  tenThucDon: any;
  maThucDon: any;
  @Input() tDon: any;

  constructor(private service: SharedService){}

  ngOnInit(): void {
    this.tenThucDon = this.tDon.TenThucDon
    this.maThucDon = this.tDon.MaThucDon
  }

  AddThucDon(){
    debugger;
    let val = {
      tenThucDon: this.tenThucDon
    };
    this.service.AddDSThucDon(val).subscribe(res=>
      {alert(res.toString())
    });
  }

  EditThucDon(){
    let val = {
      maThucDon: this.maThucDon,
      tenThucDon: this.tenThucDon
    };
    this.service.EditDSThucDon(val).subscribe(res=>
      {alert(res.toString())
    });
  }

}
