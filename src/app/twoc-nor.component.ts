import { Component, OnInit } from '@angular/core';
import { CatPettingMethod, CatService, SelectedCatService } from './cat';

@Component({
  selector: 'app-root',
  templateUrl: './twoc-nor.component.html'
})
export class AppComponent implements OnInit {

  catMethods: CatPettingMethod[] = [];

  constructor(private catService: CatService, private selectedCatService: SelectedCatService) {

  }

  ngOnInit() {
    this.catService.getCats().subscribe(cats => {
      this.catMethods = cats;
    });
  }

  setCurrentMethod(catMethod: CatPettingMethod) {
    this.selectedCatService.setSelectedMethod(catMethod);
  }

}

@Component({
  selector: 'app-cat-form',
  templateUrl: './twoc-nor.cat-form.html'
})
export class CatFormComponent implements OnInit {

  currentMethod: CatPettingMethod;
  nextId: number;

  constructor(private catService: CatService, private selectedCatService: SelectedCatService) {

  }

  ngOnInit() {
    this.catService.getCats().subscribe(cats => {
      this.nextId = cats.length + 1;
    });
    this.selectedCatService.getSelectedMethod().subscribe(currentMethod => {
      this.currentMethod = {
        name: currentMethod.name,
        description: currentMethod.description,
        endResult: currentMethod.endResult,
        id: currentMethod.id
      };
    });
  }

  save() {
    this.catService.updateCat(this.currentMethod);
  }

  createNew() {
    const id = this.nextId;
    this.catService.createCat({
      name: 'Enter a name',
      description: 'Enter a description',
      endResult: 'The cat probably murders you',
      id
    });
  }

}
