import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClothesService } from '../clothes.service';
@Component({
  selector: 'app-edit-cloth',
  templateUrl: './edit-cloth.component.html',
  styleUrls: ['./edit-cloth.component.css'],
})
export class EditClothComponent implements OnInit {
  clothesDataForm: any = {};
  id: Number = 0;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private clothData: ClothesService
  ) {}
  ngOnInit(): void {
    let data = this.clothData.dataToEdit()[0];
    this.id = this.clothData.dataToEdit()[1];
    this.clothesDataForm = this.formBuilder.group({
      code: [data.code],
      brand: [data.brand],
      gender: [data.gender],
      type: [data.type],
      price: [data.price],
      stock: [data.stock],
    });
  }

  updateData(formData: any) {
    this.clothData.updateClothes(formData, this.id);
    this.router.navigate(['/showClothes']);
  }
}
