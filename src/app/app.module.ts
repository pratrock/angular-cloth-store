import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddClothesComponent } from './add-clothes/add-clothes.component';
import { ShowClothesComponent } from './show-clothes/show-clothes.component';
import { EditClothComponent } from './edit-cloth/edit-cloth.component';

@NgModule({
  declarations: [AppComponent, AddClothesComponent, ShowClothesComponent, EditClothComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
