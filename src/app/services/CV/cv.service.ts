import { Injectable,EventEmitter } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { cv } from './cv';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  apiURL="http://localhost:5000/doneprojects/";
  constructor(private http:HttpClient) { }

  createCV(data:cv):Observable<cv>{
    return this.http.post<cv>(this.apiURL,data).pipe(map((res:cv)=>{return res;}))
  }
  getCV():Observable<cv>{
    return this.http.get<cv>(this.apiURL).pipe(map((res:cv)=>{return res;}))
  }
  updateCV(data:cv,id:string):Observable<cv>{
    return this.http.put<cv>(this.apiURL+id,data).pipe(map((res:cv)=>{return res;}))
  }
  deleteCV(id:string):Observable<cv>{
    return this.http.delete<cv>(this.apiURL+id).pipe(map((res:cv)=>{return res;}))
  }
}
