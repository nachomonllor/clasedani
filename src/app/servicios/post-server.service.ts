import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { cliente } from '../cliente';


@Injectable({
  providedIn: 'root'
})
export class PostServerService {


  url : "http://localhost:3003/login";

  constructor(private http:HttpClient) { 
      

  }

  login(c:cliente) {

    

  }



}
