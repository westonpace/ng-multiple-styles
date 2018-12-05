import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CatPettingMethod, CatService, SelectedCatService } from './cat';

@Component({
  selector: 'app-root',
  templateUrl: './parent-child.component.html'
})
export class AppComponent implements OnInit {

  catMethods: CatPettingMethod[] = [];
  currentMethod: CatPettingMethod = {
    name: '',
    description: '',
    endResult: '',
    id: -1
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

  onSave() {
    this.catService.updateCat(this.currentMethod);
  }

}

@Component({
  selector: 'app-cat-form',
  templateUrl: './parent-child.cat-form.html'
})
export class CatFormComponent {

  @Input()
  currentMethod: CatPettingMethod;
  @Output()
  save = new EventEmitter<void>();

  constructor() {

  }

  onSave() {
    this.save.emit();
  }

}
