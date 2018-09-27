import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit {

	id: any;
	title: 'Add User';
	user: any;
	username: any;
	location: any;
	funfact: any;
	message: any;
	messages: any;

  constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _httpService: HttpService
		) { }

	ngOnInit() {
		this.id = {id: ""};
		this.user = { username: "", location: "", funfact: "" };
		this.username = {name: ""};
		this.message = { success: "", name: "" };
		this.messages = { messages: "" };
		this._route.params.subscribe((params: Params) => {
			this.id = params.id;
		//	console.log("05 params.id = ",params.id," params['id'] = ",params['id']);
		});
	}

	createUser(){
		let obs = this._httpService.createUser(this.user);
		obs.subscribe(response => {
				console.log("10 splash.c.ts createUser.  this.user = ",this.user)
			if (response['status'] == false) {
				this.messages = response['messages'];
				console.log("12 splash.c.ts createUser.  status=false.  response.messages = ",response['messages'])
			} else {
				if (response['status']==true) {
				console.log("14 splash.c.ts createUser.  status=true.  response['user'] = ",response['user']," response.message = ",response['message'] )
					this.message = response['message'];
					this.storeSessionData(this.user)
					this.showHome()
					
				}
			}
		})
	}

	storeSessionData(user){

	}

	showHome(){
		this._router.navigate(['/home']);

	}

}


