import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input() item!: Item;
  @Output() deleteItem: EventEmitter<Item> = new EventEmitter();

  handleDeleteItem(item:Item) {
    console.log("ItemComponent.handleDeleteItem()");
    this.deleteItem.emit(item)
  }
}

export class Item {
  title: String;
  ID: number;
  constructor(title:String, ID:number) { 
    this.title = title
    this.ID = ID;
  }
}