import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface CatPettingMethod {
    id: number;
    name: string;
    description: string;
    endResult: string;
}

export const CAT_PETTING_METHODS: CatPettingMethod[] = [
    { id: 1, name: 'Between the ears', description: 'Gently scritch the cat on the forehead', endResult: 'Cat murders you in your sleep' },
    { id: 2, name: 'On the tummy', description: 'Vigorously scratch the cat on the stomach', endResult: 'Cat murders you immediately' },
    { id: 3, name: 'Along the spine', description: 'Stroke the cat along its spine', endResult: 'Cat murders you when you\'re not looking' }
];

@Injectable()
export class CatService {

    private cats = new BehaviorSubject<CatPettingMethod[]>(CAT_PETTING_METHODS);

    getCats() {
        return this.cats as Observable<CatPettingMethod[]>;
    }

    updateCat(cat: CatPettingMethod) {
        const existingMethods = this.cats.value;
        const methodToUpdateIndex = existingMethods.findIndex(method => method.id === cat.id);
        if (methodToUpdateIndex < 0) {
            throw new Error('No method exists with id ' + cat.id);
        }
        const newMethods = existingMethods.slice();
        newMethods[methodToUpdateIndex] = cat;
        this.cats.next(newMethods);
    }

    deleteCat(id: number) {
        const existingMethods = this.cats.value;
        const newMethods = existingMethods.filter(method => method.id !== id);
        this.cats.next(newMethods);
    }

    createCat(cat: CatPettingMethod) {
        const existingMethods = this.cats.value;
        if (existingMethods.find(method => method.id === cat.id)) {
            throw new Error('A method already exists with id ' + cat.id);
        }
        const newMethods = existingMethods.slice();
        newMethods.push(cat);
        this.cats.next(newMethods);
    }

}

// Only used when there are two components.  These components share in this way
@Injectable()
export class SelectedCatService {

    private currentMethod = new BehaviorSubject<CatPettingMethod>({ id: -1, name: '', description: '', endResult: '' });

    setSelectedMethod(method: CatPettingMethod) {
        this.currentMethod.next(method);
    }

    getSelectedMethod() {
        return this.currentMethod as Observable<CatPettingMethod>;
    }

}
