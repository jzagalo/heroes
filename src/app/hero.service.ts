import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heros';
import { Observable, of} from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class HeroService {
  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService:fetched heroes');
    return of(HEROES);
  }
  constructor(private messageService: MessageService) { }
}
