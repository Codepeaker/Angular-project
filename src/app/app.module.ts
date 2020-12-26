import { CarousalComponent } from './carousal/carousal.component';
import { UserdataComponent } from './userdata/userdata.component';
import { MyInterceptor } from './jwt.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from "@angular/common";
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// import { routingComponents} from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    // routingComponents
    UserdataComponent,
    CarousalComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: MyInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }