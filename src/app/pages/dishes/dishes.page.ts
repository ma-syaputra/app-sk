import { DishesService } from './../../services/dishes.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.page.html',
  styleUrls: ['./dishes.page.scss'],
})
export class DishesPage implements OnInit {

  results: Observable<any>;
  constructor(private dishesService: DishesService) { }
  ngOnInit() {
    this.results = this.dishesService.all();
  }
}
