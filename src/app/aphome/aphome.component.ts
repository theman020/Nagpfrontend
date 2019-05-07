import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aphome',
  templateUrl: './aphome.component.html',
  styleUrls: ['./aphome.component.css']
})
export class AphomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    if(localStorage.getItem('user')==null){
      this.router.navigateByUrl('')
      }
  }

}
