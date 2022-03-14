/* export interface Task {
    name: string;
    done: boolean;
    category?: Category;
    */
// category? - opcjonalne,  union types np. string | number, type literal - zawężone wartości np. "cos" | "nic" | 5
// }
export class Task {
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
// export type Category = "general" | "work" | "gym" | "hobby";
// type alias -jak wyżej category - nasz customowy stworzony typ
// typ enum
export var Category;
(function (Category) {
    Category["GENERAL"] = "general";
    Category["WORK"] = "work";
    Category["GYM"] = "gym";
    Category["HOBBY"] = "hobby";
})(Category || (Category = {}));
