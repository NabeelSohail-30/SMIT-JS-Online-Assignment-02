/*------------------------ Task 01 ------------------------*/
console.log('---------------- Task 01 ----------------');
function addNumber(num) {
    return function (x) {
        return x + num;
    }
}
const addFive = addNumber(5);
console.log(addFive(10));
console.log(addFive(20));


/*------------------------ Task 02 ------------------------*/
console.log('---------------- Task 02 ----------------');
function searchArray(array, value) {
    if (array.length === 0) {
        return false;
    }

    if (array[0] === value) {
        return true;
    }

    return searchArray(array.slice(1), value);
}
const arr = [1, 2, 3, 4, 5];
console.log(searchArray(arr, 3));
console.log(searchArray(arr, 6));


/*------------------------ Task 03 ------------------------*/
console.log('---------------- Task 03 ----------------');
function addParagraph(text) {
    const p = document.createElement("p");
    p.textContent = text;
    document.body.appendChild(p);
}
const btnAddParagraph = document.querySelector('#btnAddParagraph');

btnAddParagraph.addEventListener("click", function () {
    addParagraph("New Paragraph Added! -----> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lacinia, risus nec malesuada mattis, nisi nisl finibus mauris, sed pulvinar turpis leo quis purus. Aliquam a vulputate sapien, non porta justo. Suspendisse hendrerit vulputate risus tristique scelerisque. Vestibulum sed erat purus. Nunc imperdiet congue ante, ac tempus odio bibendum at. Suspendisse euismod mattis orci vel malesuada. Curabitur quis dolor vel ante ultrices bibendum sit amet ac risus. In rhoncus erat et lorem faucibus, at dapibus quam viverra. In feugiat a turpis vel viverra. Ut ut lacus ornare, ornare velit nec, pellentesque nisi. In eget iaculis risus. Suspendisse sed mi velit. Suspendisse purus magna, sodales in varius in, placerat eget dolor. Curabitur malesuada cursus orci, ac feugiat risus volutpat eget. Mauris tristique tortor ut blandit iaculis. ");
});


/*------------------------ Task 04 ------------------------*/
console.log('---------------- Task 04 ----------------');
function addListItem(text) {
    const li = document.createElement("li");
    li.textContent = text;
    const ul = document.querySelector("#listFruits");
    ul.appendChild(li);
}
const addFruit = document.querySelector('#addFruit');

addFruit.addEventListener("click", function () {
    const fruit = document.querySelector("#txtFruit").value;
    addListItem(fruit);
    document.querySelector("#txtFruit").value = "";
    document.querySelector("#txtFruit").focus();
});

/*------------------------ Task 05 ------------------------*/
console.log('---------------- Task 05 ----------------');
function changeBackgroundColor(element, color) {
    element.style.backgroundColor = color;
}
const btnChangeBg = document.querySelector('#btnChangeBg');

btnChangeBg.addEventListener("click", function () {
    const div = document.querySelector("div");
    changeBackgroundColor(div, 'red');
});


/*------------------------ Task 06 ------------------------*/
console.log('---------------- Task 06 ----------------');
function saveToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}
const person = { name: "John", age: 30 };
saveToLocalStorage("person", person);


/*------------------------ Task 07 ------------------------*/
console.log('---------------- Task 07 ----------------');
function getFromLocalStorage(key) {
    const value = localStorage.getItem(key);
    return JSON.parse(value);
}
const person2 = getFromLocalStorage("person");
console.log(person2); // Output: { name: "John", age: 30 }


/*------------------------ Task 08 ------------------------*/
console.log('---------------- Task 08 ----------------');
function saveObjectToLocalStorage(obj) {
    for (const [key, value] of Object.entries(obj)) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    const newObj = {};

    for (const key of Object.keys(obj)) {
        newObj[key] = JSON.parse(localStorage.getItem(key));
    }

    return newObj;
}
const person3 = { name: "John", age: 30 };
saveObjectToLocalStorage(person3);
const newPerson = saveObjectToLocalStorage(person3);
console.log(newPerson);