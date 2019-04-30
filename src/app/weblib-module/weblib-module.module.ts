import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { TokenInterceptor } from './auth/token-interceptor';
import { JWTResponse } from './auth/jwt-response';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  // providers: [AuthService, AuthGuardService, TokenInterceptor],
  exports: [
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
