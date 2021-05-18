import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Skills } from '../classes/skills';
import { SkillService } from './skill.service';

const cudOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'})};

@Injectable()

export class HttpClientSkillService extends SkillService {

  constructor(private http: HttpClient) {
    super();
   }
 
  getSkills(): Observable<Skills[]> {
    return this.http.get<Skills[]>(this.skillUrl).pipe(
      catchError(this.handleError)
    );
  }
 
  getSkill(id: number): Observable<Skills> {
    const url = `${this.skillUrl}/${id}`;
    return this.http.get<Skills>(url).pipe(
      catchError(this.handleError)
    );
  }
 
  addSkills(name: string, description: string): Observable<Skills> {
    const skill = { name, description };
 
    return this.http.post<Skills>(this.skillUrl, skill, cudOptions).pipe(
      catchError(this.handleError)
    );
  }
 
  deleteSkills(skill: number | Skills): Observable<Skills> {
    const id = typeof skill === 'number' ? skill : skill.id;
    const url = `${this.skillUrl}/${id}`;
 
    return this.http.delete<Skills>(url, cudOptions).pipe(
      catchError(this.handleError)
    );
  }
 
  updateSkills(skill: Skills): Observable<Skills> {
    return this.http.put<Skills>(this.skillUrl, skill, cudOptions).pipe(
      catchError(this.handleError)
    );
  }
   
  private handleError(error: any) {
    console.error(error);
    return throwError(error);    
  }
}
 

