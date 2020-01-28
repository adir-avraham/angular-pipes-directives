import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products: Array<any>;
  public searchText: string | number;

  public categoriesForm;
  category: string;
  currencyCat: string;
  constructor(private productsService: ProductsService, private formBuilder: FormBuilder ) {
    this.categoriesForm = this.formBuilder.group({
      category: "",
      currencyCat: "ILS",
    })
  }
  
  ngOnInit() {
    this.productsService.getProducts().subscribe((result: Array<any>)=> {
      //console.log(this.categories)
    
      this.products = result
    }, (err)=> {console.log(err)},
    ()=>{ console.log('completed') })
    
    
    
    
  }
  
 onCuurency() {
     this.currencyCat = this.categoriesForm.value.currencyCat;
}

onCategory() {
  this.category = this.categoriesForm.value.category;
}

}
