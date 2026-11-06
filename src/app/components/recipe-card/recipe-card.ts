import { Component, inject, input } from '@angular/core';
import { Recipe } from '../../../models/recipe';
import { Recipes } from '../../services/recipes';

@Component({
  selector: 'app-recipe-card',
  imports: [],
  templateUrl: './recipe-card.html',
  styleUrl: './recipe-card.css'
})
export class RecipeCard {
  recipe = input.required<Recipe>();
  private service = inject(Recipes);

  save() {
    this.service.add(this.recipe());
  }
}