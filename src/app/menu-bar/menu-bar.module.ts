import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MenuBarComponent } from './menu-bar.component';
import { SidebarDirective } from '../sidebar.directive';
import { AppComponent } from '../app.component';


@NgModule({
  imports: [
    CommonModule, BrowserModule, FormsModule
  ],
  declarations: [ MenuBarComponent, SidebarDirective ],
  bootstrap:    [ MenuBarComponent ]
})
export class MenuBarModule { }
