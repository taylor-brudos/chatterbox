import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-chatterbox',
  templateUrl: './chatterbox.component.html',
  styleUrls: ['./chatterbox.component.css']
})
export class ChatterboxComponent implements OnInit {

	id: any;
	title: 'Create Box';
	box: any;
	username: any;
	message: any;
	messages: any;
	
	constructor(
		private _route: ActivatedRoute,
		private _router: Router,
		private _httpService: HttpService
		) { }

	ngOnInit() {
		this.id = {id: ""};
		this.box = { topic: "", desc: "", welcome: "" };
		this.username = {username: ""};
		this.message = { username: "", content: "" };
		this.messages = { messages: "" };
		this._route.params.subscribe((params: Params) => {
			this.id = params.id;
			console.log("05 chbox.c.ts onInit params.id = ",params.id);
		});

		this.getBox(this.id);
	}

	getBox(id){
		let obs = this._httpService.getOneFromServer(id);
		obs.subscribe(response => {
			console.log("30 chbox.c.ts getBox response.  response = ",response);
			if (response['status'] == false) {
				this.messages = response['messages'];
				console.log("32 chbox.c.ts getBox.  status=false.  response.ServerMessage = ",response['ServerMessage'])
			} else {
				if (response['status']==true) {
					console.log("34 chbox.c.ts getBox.  status=true.  response['Box'] = ",response['Box']," response.ServerMessage = ",response['ServerMessage'] )
					this.box = response['Box'];
					this.message = response['ServerMessage'];
					this.messages = response['Box']['messages']
					console.log("36 chbox.c.ts getBox.  status=true.  response['Box']['messages'] = ",response['Box']['messages'])
					
				}
			}
		})
	}



}
