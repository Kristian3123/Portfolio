import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Tag } from '../../../models/Projects/Tags';

interface FilterGroup {
  title: string;
  options: FilterOption[];
}

interface FilterOption {
  name: string;
  selected: boolean;
}

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  @Input() title: string = 'Filter';
  @Input() items: any[] = [];
  @Input() selectedItems: any[] = [];
  @Output() selectionChange = new EventEmitter<any[]>();

  isOpen = false;
  searchText = '';

  filterGroups = [
    {
      title: 'Languages',
      options: [
        { tag: Tag.TypeScript, selected: false },
        { tag: Tag.JavaScript, selected: false },
        { tag: Tag.Python, selected: false },
        { tag: Tag.Csharp, selected: false },
        { tag: Tag.Java, selected: false },
      ],
    },
    {
      title: 'Frameworks',
      options: [
        { tag: Tag.Angular, selected: false },
        { tag: Tag.React, selected: false },
        { tag: Tag.Nodejs, selected: false },
        { tag: Tag.AspNet, selected: false },
      ],
    },
  ];

  @Output() filtersChanged = new EventEmitter<Tag[]>();

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  hasSelectedFilters(): boolean {
    return this.filterGroups.some((group) =>
      group.options.some((option) => option.selected)
    );
  }

  rests(): void {
    // Нулиране на всички чекбоксове
    this.filterGroups.forEach((group) => {
      group.options.forEach((option) => (option.selected = false));
    });
    // Излъчване на празен масив, за да покаже всички проекти
    this.filtersChanged.emit([]);

    // Затваряне на dropdown (по избор)
    // this.isOpen = false;
  }

  updateFilters() {
    const selectedTags = this.filterGroups
      .flatMap((group) => group.options)
      .filter((option) => option.selected)
      .map((option) => option.tag);

    this.filtersChanged.emit(selectedTags);
  }
}
