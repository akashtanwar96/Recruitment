import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { LandingComponent } from './landing.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
   imports: [
      CommonModule,
      BrowserModule,
      SharedModule,
      AppRoutingModule,
      BrowserAnimationsModule,
   ],
   declarations: [LandingComponent
   ],
   bootstrap: [LandingComponent]
})
export class AppModule { }
