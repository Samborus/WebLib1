import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { TokenInterceptor } from './auth/token-interceptor';
import { JWTResponse } from './auth/jwt-response';
import { LoggingComponent } from './auth/logging/logging.component';
import {ButtonModule} from 'primeng/button';
import {PanelModule } from 'primeng/panel';
import {PasswordModule} from 'primeng/password';
import { CalendarModule, SharedModule} from 'primeng/primeng';
import {DataViewModule} from 'primeng/dataview';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoggingComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    PanelModule,
    PasswordModule,
    SharedModule,
    DataViewModule,
    FormsModule
  ],
  exports: [
    LoggingComponent
  ]
})
export class WeblibModuleModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: WeblibModuleModule,
      providers: [ AuthService, AuthGuardService, TokenInterceptor ]
    };
  }
}
