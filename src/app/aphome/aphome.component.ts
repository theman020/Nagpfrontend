import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NagpServiceService } from '../services/nagp-service.service';

@Component({
  selector: 'app-aphome',
  templateUrl: './aphome.component.html',
  styleUrls: ['./aphome.component.css']
})
export class AphomeComponent implements OnInit {
  
  public editapplicant;
  applicantId:number;
  sum:number=0;
  public AAR:any
  check: boolean = false
  constructor(private service: NagpServiceService,private router:Router) { }

  ngOnInit() {
    if(localStorage.getItem('user')==null){
      this.router.navigateByUrl('')
      }
      this.applicantId = JSON.parse(localStorage.getItem('user')).applicantId;
    this.getData();
  }
  getData(){
    this.service.getApplicantDetailsById(this.applicantId).subscribe(
      data=>{ this.editapplicant=data
        this.check = true},
        
      err => console.log(err),
      ()=>console.log("Applicant loaded")
      //()=>console.log("Admin loaded")
     
       
      
    );
    this.service.getActivityRecordByApplicantId(this.applicantId).subscribe
    ((data:[])=>{
      this.AAR=data;
      if(this.AAR[0]==undefined)
      {
        console.log('if')
      }
      console.log('AAr = '+this.AAR[0])

      for(var i=0;i<data.length;i++){
        
        this.sum = this.sum + this.AAR[i].pointsEarned
        } 

      });
}
}
