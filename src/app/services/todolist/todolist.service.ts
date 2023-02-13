import { Injectable,EventEmitter } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { todolist } from './todolist';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {
  apiURL="http://localhost:5000/todolist/";
  constructor(private http:HttpClient) { }

  createTodo(data:todolist):Observable<todolist>{
    return this.http.post<todolist>(this.apiURL,data).pipe(map((res:todolist)=>{return res;}))
  }
  getTodo():Observable<todolist>{
    return this.http.get<todolist>(this.apiURL).pipe(map((res:todolist)=>{return res;}))
  }
  updateTodo(data:todolist,id:string):Observable<todolist>{
    return this.http.put<todolist>(this.apiURL+id,data).pipe(map((res:todolist)=>{return res;}))
  }
  deleteTodo(id:string):Observable<todolist>{
    return this.http.delete<todolist>(this.apiURL+id).pipe(map((res:todolist)=>{return res;}))
  }

}
