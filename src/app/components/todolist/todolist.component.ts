import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { TodolistService } from 'src/app/services/todolist/todolist.service'
import { TodolistModel } from 'src/app/services/todolist/todolist.model';
@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
  todoForm !: FormGroup;
  todoData!:any;
  showButtonAdd!:boolean;
  showButtonEdit!:boolean;
  todolistModelObj:TodolistModel=new TodolistModel();
  constructor(private fb:FormBuilder,private todolistService:TodolistService) { }

  ngOnInit(): void {
    this.todoForm=this.fb.group({ 
      name:['',Validators.required],
      description:[''],
      duedate:[''],
    })
    this.getAllTodos();
  }
  getAllTodos(){
    this.todolistService.getTodo().subscribe(res=>{this.todoData=res;})
  }

  ResetToggle(){
    this.todoForm.reset();
  }
  createProject(){
    if(this.todoForm.value.name!=null){
    this.todolistModelObj.name=this.todoForm.value.name;
    this.todolistModelObj.description=this.todoForm.value.description;
    this.todolistModelObj.duedate=this.todoForm.value.duedate;

    this.todolistService.createTodo(this.todolistModelObj).subscribe(res=>{console.log(res); this.todoForm.reset();this.getAllTodos()},
    err=>console.log(err))
  }
  }
  deleteProject(todolist:any){
    this.todolistService.deleteTodo(todolist._id).subscribe(res=>{console.log(res); let ref=document.getElementById('close')
    ref?.click();;this.todoForm.reset();this.getAllTodos()},
    err=>console.log(err))
  }
  setEditData(todolist:any){
    this.showButtonEdit=true;
    this.showButtonAdd=false;
    this.todolistModelObj._id=todolist._id;
    this.todoForm.controls['name'].setValue(todolist.name);
    this.todoForm.controls['duedate'].setValue(todolist.duedate);
    this.todoForm.controls['description'].setValue(todolist.description);
  }
  editProject(){
    this.todolistModelObj.name=this.todoForm.value.name;
    this.todolistModelObj.duedate=this.todoForm.value.duedate;
    this.todolistModelObj.description=this.todoForm.value.description;
    this.todolistService.updateTodo(this.todolistModelObj,this.todolistModelObj._id).subscribe(res=>{console.log(res); let ref=document.getElementById('close')
    ref?.click();this.getAllTodos();},
    err=>{console.log(err)},)
  }
}
