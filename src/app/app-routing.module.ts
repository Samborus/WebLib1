import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WordComponent } from './word/word.component';
import { IndexComponent } from './index/index.component';
import {FieldsetModule, } from 'primeng/fieldset';
import {CardModule} from 'primeng/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { ToolsModule } from './tools/tools.module';
import {DataViewModule} from 'primeng/dataview';
import { LoggingComponent } from './logging/logging.component';
// import { PlayerComponent } from './film-box/player/player.component';
// import { ListComponent } from './film-box/list/list.component';
import { PlayerComponent } from './tools/player/player.component';
import { ListComponent } from './tools/list/list.component';
import { AuthGuardService } from './weblib-module/auth/auth-guard.service';

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
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule, FieldsetModule, CardModule, BrowserAnimationsModule,
    InputTextareaModule, ToolsModule, DataViewModule ]
})
export class AppRoutingModule {
  constructor(private service: AuthGuardService) {
    // using of the injected service
 }
 }
export const routingComponents = [ WordComponent, IndexComponent ];
