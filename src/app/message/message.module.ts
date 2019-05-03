import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageService } from './message.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class MessageModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MessageModule,
      providers: [ MessageService ]
    };
  }
}
