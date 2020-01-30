import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';
import { MainlifecycleComponent } from './mainlifecycle/mainlifecycle.component';
import { LifecycleChildComponent } from './mainlifecycle/lifecycle-child/lifecycle-child.component';
import { ChildchildComponent } from './main-lifecycle/lifecycle-child/childchild/childchild.component';
import { CheckComponent } from './check/check.component';
import { CheckChildComponent } from './check/check-child/check-child.component';

@NgModule({
  declarations: [
    AppComponent,
    MainlifecycleComponent,
    LifecycleChildComponent,
    ChildchildComponent,
    CheckComponent,
    CheckChildComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
