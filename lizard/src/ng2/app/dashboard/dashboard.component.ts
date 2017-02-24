import { Component, OnInit } from '@angular/core';

import { Hero } from '../heroes/hero';
import { HeroService } from '../heroes/hero.service';

@Component({
  //moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: 'html/app/dashboard/dashboard.component.html',
  styleUrls: [ 'css/app/dashboard/dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => { 
        console.log(heroes);
        //if (heroes)
        //  console.log(JSON.stringify(heroes));
        if (!heroes || heroes.length === 0)
          console.log("No Heroes available");
        else if (heroes.length > 4)
          this.heroes = heroes.slice(1, 5);
        else
          this.heroes = heroes;
      });
  }
  
}
