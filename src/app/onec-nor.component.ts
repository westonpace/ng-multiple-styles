import { Component, OnInit } from '@angular/core';
import { CatPettingMethod, CatService } from './cat';

@Component({
  selector: 'app-root',
  templateUrl: './onec-nor.component.html'
})
export class AppComponent implements OnInit {

  catMethods: CatPettingMethod[] = [];
  currentMethod: CatPettingMethod = {
    id: -1,
    name: '',
    description: '',
    endResult: ''
  };

  constructor(private catService: CatService) {

  }

  ngOnInit() {
    this.catService.getCats().subscribe(cats => {
      this.catMethods = cats;
    });
  }

  setCurrentMethod(catMethod: CatPettingMethod) {
    this.currentMethod = {
      name: catMethod.name,
      description: catMethod.description,
      endResult: catMethod.endResult,
      id: catMethod.id
    };
  }

  save() {
    this.catService.updateCat(this.currentMethod);
  }

  createNew() {
    const id = this.catMethods.length;
    this.catService.createCat({
      name: 'Enter a name',
      description: 'Enter a description',
      endResult: 'The cat probably murders you',
      id
    });
    this.setCurrentMethod(this.catMethods.find(method => method.id === id));
  }

}
