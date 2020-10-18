import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss'],
})
export class ProductCartComponent implements OnInit {
  productForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    type: new FormControl(''),
    purity: new FormControl(''),
    weight: new FormControl(''),
  });

  constructor() {}

  ngOnInit(): void {}
}
