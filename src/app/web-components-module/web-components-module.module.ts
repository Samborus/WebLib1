import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { WeblibModuleModule } from '../weblib-module/weblib-module.module';


@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    WeblibModuleModule
  ],
  exports: [
    IndexComponent
  ]
})
export class WebComponentsModuleModule { }
