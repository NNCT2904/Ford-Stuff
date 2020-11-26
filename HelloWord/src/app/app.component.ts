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
  constructor() {
    this.listItem = [];
  }

  ngOnInit(): void {
    console.log('app.component.ts running 👌');

    var json = localStorage.getItem('listItems')!;
    const list = JSON.parse(json);
      if (list) {
        this.listItem = list;
        console.log("Data retrieved 👌!");
      }
  }

  ngDoCheck(): void {
    console.log('ngDoCheck()');
    console.log(this.listItem);
    const json = JSON.stringify(this.listItem);
    localStorage.setItem('listItems',json);
  }

  handelDeleteAll(): void {
    this.listItem = [];
  }

  handleAdd(e: Event, input: string): void {
    //prevent refresh
    e.preventDefault();

    console.log("Submitted " + input);
    
    let item = new Item();
    item.title = input;
    this.listItem = this.listItem.concat(item);
    
    console.log(this.listItem);
  }

}
