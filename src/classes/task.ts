import { Category } from "../types/types.js";


interface Logger {
    logCreationDate: (addtion:string) => void
}

export class TaskClass implements Logger {
    // dana klasa implememtuje taki interfejs 
    public name:string;
    public done:boolean;
    public category?: Category;

    private createdAt: Date;

    // domyślnie wszystkie metody są public czyli mozna je wywołać i podejrzec z instancji, private zostaje w definicji funkcji i tylko tutaj
    // private to zabezpiecznie koncepcyjne - nie zabezpiecza przed atakami

    constructor(name: string, done: boolean, category : Category = Category.GENERAL){
        // metoda konstruktora odpala sie za kazdym razem gdy tworzymy instancje klasy
        //tutaj this kontekst instancji
        this.name = name;
        this.done= done;
        this.category = category;
        this.createdAt = new Date();
    }

    public logCreationDate(extra: string){
        console.log(`Task został stworzony ${this.createdAt} ${extra || ""}`)
    }

}