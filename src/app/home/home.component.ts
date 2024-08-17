import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  onLoadServers(id:number)
  {
    //absoulte path->>https://4200/servers
    this.router.navigate(['/servers',id,'edit'],{queryParams:{allowEdit:true},fragment:'loading'});
    //relative path
    //this.router.navigate(['servers])->https://4200/servers
  }
}
