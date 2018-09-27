import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  errors = [];
  newBox = {
    topic: '',
    desc: '',
    welcome: '',
    messages: []
  }

  constructor(
    private _http: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  ngOnInit() {}

  createBox() {
    let obs = this._http.createNewToServer(this.newBox);
    obs.subscribe(data => {
      if(data['ServerMessage'] == "Error") {
        this.errors = [];
        if(typeof(data['Error'])=='string') {
          this.errors.push(data['Error'])
        } else {
          for(var key in data['Error']['errors']) {
            this.errors.push(data['Error']['errors'][key]['message'])
          }
        }
      } else {
        this.newBox = {
          topic: '',
          desc: '',
          welcome: '',
          messages: []
        }
      }
      this.goToBox()
    })
  }

  goToBox() {
    //this code will need to change to redirect to the box
    this._router.navigate(['/home'])
  }

  goHome() {
    this._router.navigate(['/home'])
  }
}
