import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { CellComponent } from './cell/cell.component';
import { BoardContainerComponent } from './board-container/board-container.component';
import { BoardRowComponent } from './board-row/board-row.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    CellComponent,
    BoardContainerComponent,
    BoardRowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
