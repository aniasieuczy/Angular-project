import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable()
export class RecipeService {
  recipesChanged = new BehaviorSubject<Recipe[]>([]);

  private recipes: Recipe[] = [
    new Recipe(
      'Big Fat Burger',
      'This is simply a test',
      'https://st2.depositphotos.com/3472015/7269/i/450/depositphotos_72696611-stock-photo-vintage-chalk-board-with-spatula.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Bread', 2)
      ]),
    new Recipe(
      'Pasta',
      'Tomato souce for home made pasta',
      'https://media.istockphoto.com/photos/spaghetti-in-a-dish-on-a-white-background-picture-id1144823591?k=20&m=1144823591&s=612x612&w=0&h=6cuhQIP6Xmzu98wYGDnaxyF-Y4PBgfQiejTMQmqQKYQ=',
      [
        new Ingredient('Tomatos', 4),
        new Ingredient('pasta', 1)
      ])
  ];

  // private recipes: Recipe[];

  constructor(private shoppingListService: ShoppingListService) {
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next([...this.recipes]);
  }

  getRecipe(index: number) {
  return this.recipes[index];
  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
  this.shoppingListService.onAddIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
