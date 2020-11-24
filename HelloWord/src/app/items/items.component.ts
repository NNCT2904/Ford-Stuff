import { Component, OnInit } from '@angular/core';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  _listItems: ItemComponent[];
  constructor() {
    this._listItems = [];
  }

  loadData(listItem:ItemComponent[]) {
    this._listItems = listItem;
  }

  ngOnInit(): void {

  }

}