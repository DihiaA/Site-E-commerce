import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/models/product';
import {ClrWizard} from "@clr/angular";


@Component({
  selector: 'add-or-edit-product-model',
  templateUrl: './add-or-edit-product-model.component.html',
  styleUrls: ['./add-or-edit-product-model.component.css']
})
export class AddOrEditProductModelComponent implements OnInit {

  @Input() product: Product;
  productForm: FormGroup;
  @ViewChild("wizardlg") wizardLarge: ClrWizard;
  lgOpen: boolean = true;

  constructor(private fb: FormBuilder) {
    this.productForm = fb.group({
      productInfos: fb.group(
       { name: ['', Validators.required],
        description: ['', Validators.required],
        price: ['', Validators.required],
        stock: ['', Validators.required]
      }),
      illustration: fb.group({
        image: ['', Validators.required]
      })
    })
   }

  ngOnInit(): void {
  }


}
