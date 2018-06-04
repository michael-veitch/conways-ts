import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board-container',
  templateUrl: './board-container.component.html',
  styleUrls: ['./board-container.component.css']
})
export class BoardContainerComponent implements OnInit {

  constructor() { }

  public boardSize = 10;

  ngOnInit() {

  }

  public changeSize(size: number) {
    this.boardSize = size;
    console.log(this.boardSize);
  }

}
