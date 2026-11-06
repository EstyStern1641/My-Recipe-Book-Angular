export interface Recipe {
  id: number;
  name: string;
  category: string;
  prepTime: number;     // בדקות
  difficulty: string;   // קל / בינוני / קשה
}