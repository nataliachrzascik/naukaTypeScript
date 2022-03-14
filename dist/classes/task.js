import { Category } from "../types/types.js";
export class TaskClass {
    // domyślnie wszystkie metody są public czyli mozna je wywołać i podejrzec z instancji, private zostaje w definicji funkcji i tylko tutaj
    // private to zabezpiecznie koncepcyjne - nie zabezpiecza przed atakami
    constructor(name, done, category = Category.GENERAL) {
        // metoda konstruktora odpala sie za kazdym razem gdy tworzymy instancje klasy
        //tutaj this kontekst instancji
        this.name = name;
        this.done = done;
        this.category = category;
        this.createdAt = new Date();
    }
    logCreationDate(extra) {
        console.log(`Task został stworzony ${this.createdAt} ${extra || ""}`);
    }
}
