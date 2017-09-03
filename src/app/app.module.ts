import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DataService } from './services/data.service';
import { FormComponent } from './components/form/form.component';
import { DataComponent } from './components/data/data.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';

const appRoutes:Routes = [
  { path: '', component: HomeComponent },
  { path: 'database', component: FormComponent },
  { path: ':category/:id', component: DetailsComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    DataComponent,
    NavbarComponent,
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
