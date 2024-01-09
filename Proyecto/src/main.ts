import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {map, filter, of} from "rxjs";

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

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

const products$ = of(
  new Product("1","Product1",20),
  new Product("2","Product2",10),
  new Product("3","Product3",12),
  new Product("4","Product4",16),
  new Product("5","Product5",9),
)

const filtered$ = products$.pipe(

  filter(p => p.price >= 12),
  map(p => p.name)
)
