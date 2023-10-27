import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClothesComponent } from './add-clothes/add-clothes.component';
import { ShowClothesComponent } from './show-clothes/show-clothes.component';
import { EditClothComponent } from './edit-cloth/edit-cloth.component';

const routes: Routes = [
  { path: '', component: AddClothesComponent },
  { path: 'addClothes', component: AddClothesComponent },
  { path: 'showClothes', component: ShowClothesComponent },
  { path: 'editClothes', component: EditClothComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
