import { Injectable, signal, computed } from '@angular/core';
import { Recipe } from '../../models/recipe';

@Injectable({ providedIn: 'root' })
export class Recipes {
  private saved = signal<Recipe[]>([]);

  savedRecipes = this.saved.asReadonly();
  count = computed(() => this.saved().length);
  totalTime = computed(() =>
  this.saved().reduce((sum, r) => sum + r.prepTime, 0)
);

add(recipe: Recipe) {
  const exists = this.saved().some(r => r.id === recipe.id);

  if (exists) {
    return;
  }

  this.saved.update(list => [...list, recipe]);
}
  clear() {
    this.saved.set([]);
  }
  remove(id: number) {
  this.saved.update(list => list.filter(r => r.id !== id));
}
}