import { Component, Renderer2, ElementRef, OnInit } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public productsUpdated: Array<any> = [];
  constructor(private renderer: Renderer2, private elementRef: ElementRef) {
  }

  products = products;
  public books: Array<any> = [
    { id: 'all', name: 'All' },
    { id: 'finance', name: 'Financial' },
    { id: 'technical', name: 'Technical' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'hr', name: 'Human Resource' }
  ];
  currentChoice = 'all';

  ngOnInit(){
    this.productsUpdated = this.products;
  }

  SearchDocument(event: any){
    // tslint:disable-next-line:max-line-length
    this.productsUpdated = event.value === '' ? this.products : this.products.filter(t => t.name.toLowerCase().indexOf(event.value.toLowerCase()) > -1);
  }

  filterDocument(elem: HTMLElement, index: any) {

    this.productsUpdated = index === 'all' ? this.products : this.products.filter(t => t.id === index);

    const myTag = this.elementRef.nativeElement.querySelectorAll('.sidebar a');
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < myTag.length; i++)
    {
      if (myTag[i].className === 'active'){
        myTag[i].className = '';
      }
    }

    elem.className = 'active';
  }

}
