import { Task, Category } from "./types/types.js";
import renderTasks from './helpers/render-task.helper.js';
import {render as renderCategories} from './helpers/render-categories.helper.js';
import { TaskClass } from "./classes/task.js";

const taskNameInputElement: HTMLInputElement = document.querySelector("#name");
const addButtonElement: HTMLButtonElement = document.querySelector("button");
const tasksContainerElement: HTMLElement = document.querySelector(".tasks");
const categoriesContainerElement:HTMLElement = document.querySelector(".categories");

let selectedCategory:Category;


const categories: Category[]= [Category.GENERAL, Category.WORK, Category.GYM, Category.HOBBY];

const tasks : Task[] = [
    new Task("Wyrzucić śmieci", false, Category.HOBBY),
    new Task("Pojsc na siłownie", true, Category.GYM),
    new Task("Nakarmic koty", false),
];



const addTask=(task:Task)=>{
    tasks.push(task);
};

const updateSelectedCategory = (newCategory: Category) =>{
    selectedCategory = newCategory
}

addButtonElement.addEventListener("click", (event: Event)=>{
    // const selectedRadioElement: HTMLInputElement = document.querySelector("input[type='radio']:checked");
    // const selectedCategory:Category = selectedRadioElement.value as Category;
    // selectedRadioElement.value as Category, as Category - typ casting, tutaj my bierzemy odpowiedzialność za zawężenie typów i mówimy że zawsze będzie to taki typ np as string (rozwiązanie szybkie ale ryzykowne)
    event.preventDefault();
    const newTask: Task = new Task(taskNameInputElement.value,false,selectedCategory);
    addTask(newTask);
    newTask.logCreationDate("!!!");
    renderTasks(tasks,tasksContainerElement);
});

type TaskAsTouple = [string, Category, boolean];
// krotka
const task:  TaskAsTouple = ["Zrobić bicki", Category.GYM, false];
const taskName = task[0];
const taskCategory = task[1];
const taskDoneStatus = task[2];

// addTask({name:taskName, category:taskCategory, done:taskDoneStatus});
renderCategories(categories,categoriesContainerElement, updateSelectedCategory);
renderTasks(tasks,tasksContainerElement);

// niżej typ unknown
// unknown - typ nieznany np. gdy dostajemy cos z api i nie wiemy co to
let get = (response: unknown) => response;
const logFixed = (v:number) =>{
    console.log(v.toFixed());
};
logFixed(2.1);
let value = get(2.3);
if(typeof value ==="number"){
    logFixed(value);
};
// ten mechanizm to tzw. type narrowing - sprawdzamy typ sami, ogarniczanie wartości



const taskClassInstance = new TaskClass("Zadanie z konstruktora", false, Category.GYM );
taskClassInstance.logCreationDate("!");
// metoda wywyłana w kontekście instancji








type TaskType = {
name: string;
done: boolean; 
category?: Category;
}
interface TaskInterface  {
    name: string;
    done: boolean; 
    category?: Category;
    }

let newTask : TaskType;


 // różnice między type a interface (bo są prawie identyczne):
type Category1 = "work" | "hobby" |  "general";
type CategoryAndNumber = Category1 | number;
// union types tylko w types

interface TaskInterface{
    createdAt: Date;
}
let NewTask1 : TaskInterface;
NewTask1={
    name: "nowy task",
    done: true,
    createdAt: new Date(),
}
// można stworzyć wiele interfejsów o takiej samej nazwie i zostaną one złączone razem (rozszerzone)

