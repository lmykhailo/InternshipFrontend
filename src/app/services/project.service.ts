import { Injectable,EventEmitter } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  apiURL="http://localhost:5000/projects/";
  constructor(private http:HttpClient) { }

  createProject(data:project):Observable<project>{
    return this.http.post<project>(this.apiURL,data).pipe(map((res:project)=>{return res;}))
  }
  getProjects():Observable<project>{
    return this.http.get<project>(this.apiURL).pipe(map((res:project)=>{return res;}))
  }
  updateProject(data:project,id:string):Observable<project>{
    return this.http.put<project>(this.apiURL+id,data).pipe(map((res:project)=>{return res;}))
  }
  deleteProject(id:string):Observable<project>{
    return this.http.delete<project>(this.apiURL+id).pipe(map((res:project)=>{return res;}))
  }

}
