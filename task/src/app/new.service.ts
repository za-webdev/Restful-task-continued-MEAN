import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class NewService {

  constructor(private _http:HttpClient) { }


  getAllTasks(cb){
  	

  	this._http.get("/tasks")
   	.subscribe(data=>cb(data)); // data is coming from data databse as json // now the cb id allied to that data to do something with it

  }

  create(task,cb){
  	this._http.post('/tasks',task)// post will always have 2 arguments one is route two is what user is sending
  	.subscribe(data=>cb(data));
  }

  update(id,task,cb){
    
  	this._http.put('/tasks/'+id,task) // put will take 3 argumnets 1 is route 2 is the data user wants to update 3 is callback
  	.subscribe(data=>cb(data));
  }

  getOneTask(id,cb){
  	this._http.get('/tasks/'+id)
  	.subscribe(data=>cb(data));
  } 

  destroy(id,cb){
  	this._http.delete('/tasks/'+id)
  	.subscribe(data=>cb(data));

  }



}
