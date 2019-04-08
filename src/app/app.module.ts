import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminGameComponent } from './componente/admin-game/admin-game.component';
import { DashboardComponent } from './componente/dashboard/dashboard.component';
import { FirstpageComponent } from './componente/firstpage/firstpage.component';
import { LoginformComponent } from './componente/loginform/loginform.component';
import { UserComponent } from './componente/user/user.component';
import { UserDashboardComponent } from './componente/user-dashboard/user-dashboard.component';
import { UserAdminService } from './servicii/user-admin.service';
import { PlayersService } from './servicii/players.service';
import { FormsModule } from '@angular/forms'
import { ScorService } from './servicii/scor.service';
import { UserGameComponent } from './componente/user-game/user-game.component';
import { WinnerComponent } from './componente/winner/winner.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminGameComponent,
    DashboardComponent,
    FirstpageComponent,
    LoginformComponent,
    UserComponent,
    UserDashboardComponent,
    UserGameComponent,
    WinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ 
    UserAdminService,
    PlayersService,
    ScorService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
