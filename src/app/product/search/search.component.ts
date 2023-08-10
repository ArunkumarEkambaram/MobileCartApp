import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  searchText?: string;

  //Output Decorator to Pass data from Child to Parent
  @Output() searchChange: EventEmitter<string> =
    new EventEmitter<string>();

  onSearchChanged() {
    this.searchChange.emit(this.searchText);
  }

}
