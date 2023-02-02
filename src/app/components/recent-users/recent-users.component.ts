import { Component, Input, OnInit } from '@angular/core';
import { CommanService } from 'src/app/services/comman.service';
import { EmpService } from 'src/app/services/emp.service';

@Component({
  selector: 'app-recent-users',
  templateUrl: './recent-users.component.html',
  styleUrls: ['./recent-users.component.css']
})
export class RecentUsersComponent implements OnInit {

  @Input() userList: any[] = [];
  isLoader: boolean = true;
  theme: string='';
  colArr = ['receivedFrom','username','email','phone'];
  constructor(private empSrv: EmpService,private commsrv: CommanService) {
    this.commsrv.getThemeSubject().subscribe(res=> {
      
      this.theme = res;
    })
    setTimeout(() => {
      this.isLoader = false;
      const theme = this.commsrv.getData('theme');
      
    }, 2000);
   }

  ngOnInit(): void {
    this.empSrv.onThemeChange.subscribe(res=>{

      this.theme= res;
    })
  }

}
