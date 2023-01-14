import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MenubarModule} from 'primeng/menubar';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {MenuModule} from 'primeng/menu';
import {PanelModule} from 'primeng/panel';
import { CommonModule, JsonPipe } from '@angular/common';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {InputSwitchModule} from 'primeng/inputswitch';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MenubarModule,
    InputTextModule,
    ButtonModule,
    MenuModule,
    PanelModule,
    ToggleButtonModule,
    InputSwitchModule,
  ],
  providers: [
    { provide: JsonPipe }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
