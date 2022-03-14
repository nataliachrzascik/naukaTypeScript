import { Category } from "../types/types.js";
const handleCategoryChange = (category) => {
    if (category === Category.GENERAL) {
        console.log("Zmiana na general");
    }
    else if (category === Category.GYM) {
        alert("Lecisz na siłkę");
    }
    else if (category === Category.HOBBY) {
        document.body.style.background = "red";
    }
    else if (category === Category.WORK) {
        document.body.style.background = "green";
    }
    else {
        const never = category;
        // never - nigdy sie nie wykona (gdyby wykonanie było możliwe to ts nas o tym poinformuje ze tutaj cos nie gra bo nie powinno tak sie wydarzyć)
        console.log(never);
    }
};
export const render = (categories, categoriesContainerElement, inputChangeCallback) => {
    categories.forEach(category => {
        const categoryElement = document.createElement("li");
        const radioInputElement = document.createElement("input");
        radioInputElement.type = "radio";
        radioInputElement.name = "category";
        radioInputElement.value = category;
        radioInputElement.id = `category-${category}`;
        radioInputElement.addEventListener("change", () => {
            inputChangeCallback(category);
            handleCategoryChange(category);
        });
        //tu wyżej są przypięte 4 eventy - po 1 dla każdej kategorii żeby być gotowym na wybranie obojętnie jakieś kategori przy dodawaniu nowego zadania
        // innymi słowy: mechanizm closures jest tu zastosowany - tworzymy 4 różne funkcje z 4 różnymi efektami które są wywoływane dla 4 różnych elementów w momencie zmiany inputa
        //dzięki temu mamy pewność że do selected category zawsze przypiszemy kategorie z naszych "general", "work", "gym", "hobby" i słowko "as" nie jest nam juz potrzebne
        const labelElement = document.createElement("label");
        labelElement.setAttribute("for", `category-${category}`);
        labelElement.innerText = category;
        categoryElement.appendChild(radioInputElement);
        categoryElement.appendChild(labelElement);
        categoriesContainerElement.appendChild(categoryElement);
    });
};
