import { DishesService } from './../../services/dishes.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-dishes-detail',
  templateUrl: './dishes-detail.page.html',
  styleUrls: ['./dishes-detail.page.scss'],
})
export class DishesDetailPage implements OnInit {
  information = null;
  constructor(private activatedRoute: ActivatedRoute, private dishesService: DishesService) { }
  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.dishesService.getDetails(id).subscribe(result => {
      this.information = result.item[0];
    });
  }
  openWebsite() {
    window.open(this.information.Website, '_blank');
  }
}

