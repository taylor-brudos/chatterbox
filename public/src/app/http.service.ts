import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAllFromServer() {
    return this._http.get('/items')
  }
  getOneFromServer(id) {
    return this._http.get('/items'+id)
  }
  updateToServer(id, box) {
    return this._http.put('/items'+id, box)
  }
  deleteToServer(id) {
    return this._http.delete('/items'+id)
  }
  createNewToServer(box) {
    return this._http.post('/items', box)
  }
  createMessageToServer(id, message) {
    return this._http.post('/items/'+id+'/subitem', message)
  }
  deleteReviewToServer(id, sid) {
    return this._http.delete('/items/'+id+'/subitem/'+sid)
  }
}
