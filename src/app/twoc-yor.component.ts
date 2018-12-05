import { Component, OnInit } from '@angular/core';
import { CatPettingMethod, CatService } from './cat';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './twoc-yor.component.html'
})
export class AppComponent implements OnInit {

  catMethods: CatPettingMethod[] = [];

  constructor(private catService: CatService) {

  }

  ngOnInit() {
    this.catService.getCats().subscribe(cats => {
      this.catMethods = cats;
    });
  }

}

@Component({
  selector: 'app-cat-form',
  templateUrl: './twoc-yor.cat-form.html'
})
export class CatFormComponent implements OnInit {

  currentMethod: CatPettingMethod;
  availableMethods: CatPettingMethod[];

  constructor(private catService: CatService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.catService.getCats().subscribe(methods => {
      this.availableMethods = methods;
    });
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const id = parseInt(paramMap.get('id'), 10) || -1;
      this.setSelectedMethod(id);
    });
  }

  private setSelectedMethod(methodId: number) {
    if (this.availableMethods) {
      const selectedMethod = this.availableMethods.find(method => methodId === method.id);
      if (selectedMethod) {
        this.currentMethod = {
          name: selectedMethod.name,
          description: selectedMethod.description,
          endResult: selectedMethod.endResult,
          id: selectedMethod.id
        };
      }
    }
  }

  save() {
    this.catService.updateCat(this.currentMethod);
  }

}
