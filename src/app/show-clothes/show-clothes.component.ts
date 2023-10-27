import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ClothesService } from '../clothes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-clothes',
  templateUrl: './show-clothes.component.html',
  styleUrls: ['./show-clothes.component.css'],
})
export class ShowClothesComponent implements OnInit {
  clothesData: any = [];
  constructor(
    private showData: ClothesService,
    private router: Router,
    private cloth: ClothesService,
    private cd: ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    this.clothesData = this.showData.showData();
  }
  editData(idx: any) {
    console.log(idx);
    this.cloth.editedData(this.clothesData[idx], idx);
    this.router.navigate(['/editClothes']);
  }

  deleteData(idx: Number) {
    console.log('Delete button clicked for index:', idx);
    this.showData.deleteClothes(idx);
    console.log('Data after deletion:', this.clothesData);
    this.cd.detectChanges();
  }
}
