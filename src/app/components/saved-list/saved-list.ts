import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Recipes } from '../../services/recipes';

@Component({
  selector: 'app-saved-list',
  imports: [CommonModule],
  templateUrl: './saved-list.html',
  styleUrl: './saved-list.css'
})
export class SavedList {
  service = inject(Recipes);
}