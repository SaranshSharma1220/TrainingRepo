import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoryAdapter {
  // Method to transform flat categories into grouped categories
  adaptToGroupedCategories(categories: any[]): any[] {
    // Filter parent categories
    const parentCategories = categories.filter(category => category.parentId === null);

    
    return parentCategories.map(parent => {
      return {
        ...parent,
        subcategories: categories.filter(category => category.parentId === parent.id),
        showSubcategories: false 
      };
    });
  }
}