import { DeviceService } from './../deviceservice.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';
@Component({
  selector: 'app-userdata',
  templateUrl: './userdata.component.html',
  styleUrls: ['./userdata.component.scss']
})
export class UserdataComponent implements OnInit {

  title = 'Api';
  model: any = {};
  dataList:any[];
  private onDestroy$: Subject<void> = new Subject<void>();
  constructor(private deviceService:DeviceService){
    
  }
  ngOnInit(){
    this.deviceService.getDevices().pipe(takeUntil(this.onDestroy$)).subscribe((res) => {
      this.dataList = res;
    });
  }
  updateData(userid,username,unique){
    console.log(userid,username,unique); 
    this.model={
      id:userid,
      name:username,
      attributes:{},
      uniqueId:unique
    }
    console.log(this.model);

  }
 

  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
    this.deviceService.updateDevices(this.model).pipe(takeUntil(this.onDestroy$)).subscribe((res) => {
    });
    alert("Data Updated Successfully");
  }
}
