import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: { id: number, name: string, status: string };
  id: number=1;

  constructor(private serversService: ServersService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.route.params.subscribe((param: Params) => {
      this.id = +param['id'];
      this.server = this.serversService.getServer(this.id);
    });
    this.serversService.getServer(id);
  }
  onEditServer()
  {
    this.router.navigate(['edit'], { relativeTo: this.route,queryParamsHandling:'preserve'});
  }

}
