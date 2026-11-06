import { Component, inject } from '@angular/core';
import { Recipes } from '../../services/recipes';

@Component({
  selector: 'app-saved-counter',
  imports: [],
  templateUrl: './saved-counter.html',
  styleUrl: './saved-counter.css'
})
export class SavedCounter {
  service = inject(Recipes);
}