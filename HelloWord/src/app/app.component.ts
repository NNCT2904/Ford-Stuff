import { analyzeFileForInjectables, jsDocComment } from '@angular/compiler';
import { Component } from '@angular/core';
import { Item, ItemComponent } from './item/item.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  listItem: Item[];
  newID: number;

  constructor() {
    this.listItem = [];
    this.newID = 0;
  }

  ngOnInit(): void {
    console.log('app.component.ts running 👌');

    var json = localStorage.getItem('listItems')!;
    const list = JSON.parse(json);
      if (list.length>0) {
        this.listItem = list;
        console.log("Data retrieved 👌!");
        this.newID = this.listItem[this.listItem.length-1].ID;
      }
  }

  ngDoCheck(): void {
    //console.log('ngDoCheck()');
    //console.log(this.listItem);
    const json = JSON.stringify(this.listItem);
    localStorage.setItem('listItems',json);
  }

  handelDeleteAll(): void {
    this.listItem = [];
  }

  handleDeleteItem(itemToRemove:Item): void {
    //Make an array withour the selected item
    console.log("App.handleDeleteItem");
    this.listItem = this.listItem.filter( (item) => item.ID !== itemToRemove.ID );
  }

  handleAdd(e: Event, input: string) {
    //Prevent refresh
    e.preventDefault();

    if(!input || input == "") {
      return "Enter valid value to add item!"
    }
    //increase the new ID after each item is added
    this.newID++
    let newItem = new Item(input, this.newID);

    

    console.log("Submitted " + input);
    
    this.listItem = this.listItem.concat(newItem);
    
    console.log(this.listItem);
    return "";
  }
}
