import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WordComponent } from './worlds-module/word/word.component';
import { IndexComponent } from './web-components-module/index/index.component';
import { FieldsetModule } from 'primeng/fieldset';
import { CardModule } from 'primeng/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DataViewModule } from 'primeng/dataview';
import { LoggingComponent } from './weblib-module/auth/logging/logging.component';
import { PlayerComponent } from './film-box/player/player.component';
import { ListComponent } from './film-box//list/list.component';
import { AuthGuardService } from './weblib-module/auth/auth-guard.service';
import { WebComponentsModuleModule } from './web-components-module/web-components-module.module';
const routes: Routes = [
  { path: 'list',  canActivate: [AuthGuardService], children: [
    {
        path: '',
        component: ListComponent,
        outlet: 'routerLeft'
    },
    {
        path: '',
        component: LoggingComponent,
        outlet: 'routerRight'
    }
  ]  },
  { path: 'player', canActivate: [AuthGuardService],
  children: [
    {
      path: '',
      component: ListComponent,
      outlet: 'routerLeft'
    },
    {
        path: '',
        component: PlayerComponent
    },
    {
        path: '',
        component: LoggingComponent,
        outlet: 'routerRight'
    }
  ]},
  { path: 'index',
  children: [
    {
        path: '',
        component: LoggingComponent,
    }, ]},
    { path: '', redirectTo: '/index' , pathMatch: 'full'},
    { path: '**', redirectTo: '/index', pathMatch: 'full' }
  ];

@NgModule({
  imports: [ RouterModule.forRoot(routes), WebComponentsModuleModule ],
  exports: [ RouterModule, FieldsetModule, CardModule, BrowserAnimationsModule,
    InputTextareaModule, DataViewModule ]
})
export class AppRoutingModule {
  constructor(private service: AuthGuardService) {
    // using of the injected service
 }
 }
export const routingComponents = [ WordComponent ];
