import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://st2.depositphotos.com/3472015/7269/i/450/depositphotos_72696611-stock-photo-vintage-chalk-board-with-spatula.jpg'),
    new Recipe('Makaron', 'Tomato souce for home made pasta', 'https://media.istockphoto.com/photos/spaghetti-in-a-dish-on-a-white-background-picture-id1144823591?k=20&m=1144823591&s=612x612&w=0&h=6cuhQIP6Xmzu98wYGDnaxyF-Y4PBgfQiejTMQmqQKYQ=')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
