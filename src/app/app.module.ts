import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoggingComponent } from './logging/logging.component';
import { ListComponent  } from './tools/list/list.component';
import { AppRoutingModule, routingComponents } from './/app-routing.module';
import {PasswordModule} from 'primeng/password';
import {ButtonModule} from 'primeng/button';
import {PanelModule } from 'primeng/panel';
import { CalendarModule, SharedModule} from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IndexComponent } from './index/index.component';
import { WordComponent} from './word/word.component';
import { HttpClientModule } from '@angular/common/http';
import { ToolsModule } from './tools/tools.module';
import { WordService } from './words.service';
import { FilmsService } from './Service/film.service';
import { JwtModule } from '@auth0/angular-jwt';
import {DataViewModule} from 'primeng/dataview';
// import { AuthGuardService as AuthGuard } from './weblib-module/auth/auth-guard.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './Service/token.interceptor';
import { SelectedFilmService } from './Service/selectedfilm.service';
import { WeblibModuleModule } from './weblib-module/weblib-module.module';
import { AuthGuardService } from './weblib-module/auth/auth-guard.service';
import { AuthService } from './weblib-module/auth/auth.service';

export function tokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
    LoggingComponent,
    ListComponent,
 routingComponents,
IndexComponent,
WordComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    ButtonModule,
    SharedModule,
    PanelModule,
    BrowserAnimationsModule,
    PasswordModule,
    HttpClientModule,
    ToolsModule,
    DataViewModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:3001'],
        blacklistedRoutes: ['localhost:3001/auth/']
      }
    }),
    WeblibModuleModule
  ],
  providers: [WordService, FilmsService, AuthService, AuthGuardService, SelectedFilmService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
