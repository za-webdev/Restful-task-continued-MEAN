import { Component, OnInit } from '@angular/core';
import {NewService} from '../new.service';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
   
    private tasks: any; // this variable collects all the data from db so that we can use it in html
    private createdtask:any;
    private edittask:any; // this will set the form to empty again
    private task:any;
    private id:any=null;
    
  constructor(private _http:NewService) { } // inside constructor we have attributes

  ngOnInit() {
      this.all()
    

    this.createdtask={
      title:"",
      description:"",
      completed:false
    };

    this.edittask={
      title:"",
      description:"",
      completed:false
    };
  
  	
  }

  all(){
  this._http.getAllTasks(data=>{  
      this.tasks=data.tasks
      console.log(data.tasks)
    });
  }


  create(){
    this._http.create(this.createdtask,(data)=>{ // this.task is coming from top attribute
      this.tasks.push(data)// this is pushing the data to the array of all the data to store it
      
    });

    this.createdtask={
      title:"",
      description:"",
      completed:false
    };
  }

  destroy(id){
    this._http.destroy(id,data=>{
      this.all();
    })
  }

 show(id){
   this._http.getOneTask(id,data=>{
     console.log(data)
     this.task=data;

   })
 }

  getOneTask(id){

    this._http.getOneTask(id,data=>{

      this.task=data;
    })
  }

  edit(id){
    this._http.getOneTask(id,data=>{
      this.edittask=data;
      this.id=data._id
    })
  }

  update(id){
    console.log(this.id,this.edittask)
    this._http.update(this.id,this.edittask,data=>{
      
      this.all();
    });

    this.edittask={
      title:"",
      description:"",
      completed:false
    };

    this.id= null;

    
  }





}
