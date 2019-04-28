import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { ListComponent } from './list/list.component';
import {DataViewModule} from 'primeng/dataview';
import { PlayerComponent } from './player/player.component';
@NgModule({
  imports: [
    CommonModule, DataViewModule
  ],
  declarations: [PlayerComponent]
})
export class ToolsModule { }
