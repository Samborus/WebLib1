import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { ListComponent } from './list/list.component';
import {DataViewModule} from 'primeng/dataview';
// import { PlayerComponent } from './player/player.component';
import { WeblibModuleModule } from './../weblib-module/weblib-module.module';
@NgModule({
  imports: [
    CommonModule, DataViewModule, WeblibModuleModule
  ],
  declarations: []
})
export class ToolsModule { }
