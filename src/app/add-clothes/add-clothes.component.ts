import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClothesService } from '../clothes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-clothes',
  templateUrl: './add-clothes.component.html',
  styleUrls: ['./add-clothes.component.css'],
})
export class AddClothesComponent implements OnInit {
  clothesDataForm!: FormGroup;
  public formData: any;

  constructor(
    private formBuilder: FormBuilder,
    private clothService: ClothesService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.clothesDataForm = this.formBuilder.group({
      code: [''],
      brand: [''],
      gender: [''],
      type: [''],
      price: [''],
      stock: [''],
    });
  }

  addClothes(formValue: any) {
    console.log(formValue);
    this.clothService.addData(formValue);
    this.router.navigate(['/showClothes']);
  }
}
