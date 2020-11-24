import { analyzeFileForInjectables } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  listItem: string[];
  constructor() {
    this.listItem = [];
  }
  ngOnInit(): void {
    console.log('app.component.ts running 👌');
  }

  handleAdd(e: Event, input: string): void {

    e.preventDefault();

    console.log("Submitted " + input);
    
    this.listItem = this.listItem.concat(input);
    
    console.log(this.listItem);
  }

}
