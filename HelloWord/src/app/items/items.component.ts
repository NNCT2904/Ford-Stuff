import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Item, ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  @Input() inputList!: Item[];
  @Output() deleteItemFromList: EventEmitter<Item> = new EventEmitter();

  _listItems: Item[];
  constructor() {
    this._listItems = [];
  }

  loadData(listItem: Item[]) {
    this._listItems = listItem;
  }

  ngDoCheck(): void {
    this._listItems = this.inputList;
  }

  ngOnInit(): void {
  }

  deleteItem(item:Item) {
    this.deleteItemFromList.emit(item);
  }

}