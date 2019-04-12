import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminGameComponent } from './componente/admin-game/admin-game.component';
import { DashboardComponent } from './componente/dashboard/dashboard.component';
import { FirstpageComponent } from './componente/firstpage/firstpage.component';
import { LoginformComponent } from './componente/loginform/loginform.component';
import { UserDashboardComponent } from './componente/user-dashboard/user-dashboard.component';
import { UserGameComponent } from './componente/user-game/user-game.component';
import { WinnerComponent } from './componente/winner/winner.component';
import { InfoComponent } from './componente/info/info.component';

//const routes: Routes = [];

const appRoutes:Routes = [
  {
    path:'',
    component: FirstpageComponent,
  },
  {
    path:"login",
    component: LoginformComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path:'user-dashboard',
    component:UserDashboardComponent
  },
  {
    path:'admin-game',
    component:AdminGameComponent
  },
  {
    path:'user-game',
    component:UserGameComponent
  },
  {
    path:'winner',
    component:WinnerComponent
  },
  {
    path :'info',
    component:InfoComponent
  }
]


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
