import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, FormularioComponent,],
  bootstrap: [AppComponent]
})
export class AppModule { }
