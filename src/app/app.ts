import { Component } from '@angular/core';
import { Recipe } from '../models/recipe';
import { RecipeCard } from './components/recipe-card/recipe-card';
import { CommonModule } from '@angular/common';
import { SavedList } from './components/saved-list/saved-list';
import { SavedCounter } from './components/saved-counter/saved-counter';


@Component({
  selector: 'app-root',
  imports: [CommonModule,RecipeCard,SavedList,SavedCounter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  recipes: Recipe[] = [
    { id: 1, name: 'בורקס גבינה', category: 'מאפים', prepTime: 45, difficulty: 'בינוני' },
    { id: 2, name: 'שקשוקה', category: 'ביצים', prepTime: 30, difficulty: 'קל' },
    { id: 3, name: 'חומוס ביתי', category: 'מטבלים', prepTime: 60, difficulty: 'בינוני' },
    { id: 4, name: 'סלט טאבולה', category: 'סלטים', prepTime: 20, difficulty: 'קל' },
    { id: 5, name: 'עוגת שוקולד', category: 'קינוחים', prepTime: 90, difficulty: 'קשה' }
  ];

}