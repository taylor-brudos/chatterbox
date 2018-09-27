import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  boxes: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getBoxes();
  }

  getBoxes() {
    let obs = this._httpService.getAllFromServer();
    obs.subscribe(data => {
      if(data['ServerMessage']=="Success") {
        this.boxes = data['Boxes'];
      }
    })
  }

}
