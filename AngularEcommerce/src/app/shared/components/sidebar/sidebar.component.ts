import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../../core/services/product.service';
import { Category } from '../../models/category.model';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {hugeArrowDown01} from '@ng-icons/huge-icons'

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule,NgIconComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
  viewProviders:[provideIcons({hugeArrowDown01})]
})
export class SidebarComponent implements OnInit {
  categories: Category[] = [];
  groupedCategories: Category[] = [];

  constructor(private categoryService: ProductService) {}

  ngOnInit() {
    this.categoryService.getGroupedCategories().subscribe({
      next: (categories) => {
        // Store the original categories
        this.categories = categories;
        this.groupedCategories = categories;
        console.log('Grouped Categories:', this.groupedCategories);
      },
      error: (error) => {
        console.error('Error loading categories:', error);
      }
    });
  }

  toggleCategory(category: Category, event: Event) {
    // Prevent event bubbling
    event.stopPropagation();
    // Toggle the expanded state
    category.isExpanded = !category.isExpanded;
  }
}