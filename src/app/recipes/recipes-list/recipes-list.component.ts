import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is description','https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco,c_fill,g_auto,w_1500,ar_3:2/https%3A%2F%2Fs3.amazonaws.com%2Fpixtruder%2Foriginal_images%2Ff5cffedb779ce8ea3991f8020b5616d39ef6c0ee'),
    new Recipe('A test Recipe2', 'This is description','https://www.simplyrecipes.com/thmb/Dc5S_JtM0C2wxXhDaGwFhqhA_pY=/5616x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Homemade-Pizza-LEAD-2-a4f6dc01259d413fb2a6cd49532ae966.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
