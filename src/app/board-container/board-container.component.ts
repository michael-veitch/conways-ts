import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board-container',
  templateUrl: './board-container.component.html',
  styleUrls: ['./board-container.component.css']
})
export class BoardContainerComponent implements OnInit {

  constructor() { }

  public size = 10;

  ngOnInit() {

  }

  public changeSize(size: number) {
    this.size = size;
    console.log(this.size);
  }

}
