import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material/material.module'
import { AppComponent } from './app.component';
import { ComponentConfigurationComponent } from './component-configuration/component-configuration.component';
import { DeleteComponent } from './delete/delete.component'
@NgModule({
  declarations: [
    AppComponent,
    ComponentConfigurationComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule,
    HttpClientModule, 
    FormsModule, ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
  ],
  providers: [],
  entryComponents: [DeleteComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
