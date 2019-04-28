import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WordComponent } from './word/word.component';
import { IndexComponent } from './index/index.component';
import {FieldsetModule, } from 'primeng/fieldset';
import {CardModule} from 'primeng/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { ListComponent } from './tools/list/list.component';
import { ToolsModule } from './tools/tools.module';
import {DataViewModule} from 'primeng/dataview';
import { AuthGuardService as AuthGuard } from './Service/auth-guard.service';
import { LoggingComponent } from './logging/logging.component';
import { PlayerComponent } from './tools/player/player.component';

const routes: Routes = [
  { path: 'list',  canActivate: [AuthGuard], children: [
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
  { path: 'player', canActivate: [AuthGuard],
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
export class AppRoutingModule { }
export const routingComponents = [ WordComponent, IndexComponent ];
