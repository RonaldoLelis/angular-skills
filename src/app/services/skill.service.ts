import { Skills } from '../classes/skills';
import { Observable } from 'rxjs';

export abstract class SkillService {
  skillUrl = 'api/skills';
 
  abstract getSkills(): Observable<Skills[]>;
  abstract getSkill(id: number): Observable<Skills>;
  abstract addSkills(name: string, description: string): Observable<Skills>;
  abstract deleteSkills(skills: Skills | number): Observable<Skills>;
  abstract updateSkills(likes: Skills): Observable<Skills>; 

}
