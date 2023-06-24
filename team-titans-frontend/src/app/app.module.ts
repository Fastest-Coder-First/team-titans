import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { PieComponent } from './charts/pie/pie.component';
import { NgChartsModule } from 'ng2-charts';
import { BarComponent } from './charts/bar/bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ApiService } from './api.service';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    PieComponent,
    BarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgChartsModule,
    NgbModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register',component: RegisterComponent },
      { path: '**', pathMatch: 'full', redirectTo: '' },
    ], {
      useHash: true
    })
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
