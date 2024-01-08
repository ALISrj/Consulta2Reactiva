import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {filter, map, of} from "rxjs";

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

console.log("Aasd")

of(1, 2, 3).subscribe(p => console.log(p))

class Product {
  public id: string;
  public name: string;
  public price: number;

  constructor(id:string, name:string, price:number) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

class Cart {
  public products: string[];
  constructor() {
    this.products = [];
  }

  addProduct(product:string) {
    this.products.push(product);
  }
}
