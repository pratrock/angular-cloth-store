import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ClothesService {
  public clothesData: any = [];
  public clothData: any = {};
  id: Number = 0;
  constructor(private route: Router) {}

  addData(clothes: any) {
    const clothesData = this.clothesData;
    this.clothesData = [...clothesData, clothes];
  }

  showData() {
    return this.clothesData;
  }

  editedData(data: any, idx: any) {
    this.clothData = data;
    this.id = idx;
  }
  dataToEdit() {
    return [this.clothData, this.id];
  }

  updateClothes(data: any, idx: Number) {
    this.clothesData = this.clothesData.map((cloth: any, i: any) => {
      if (idx === i) {
        return data;
      }
      return cloth;
    });
  }
  deleteClothes(idx: Number) {
    if (idx < this.clothesData.length) {
      this.clothesData.splice(idx, 1);
    }
  }
}
