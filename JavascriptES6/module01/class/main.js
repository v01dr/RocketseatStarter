class List {
    constructor(){
        this.data = [];
    }

    add(data){
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List{
    constructor(){
        super();

        this.user = 'hero';
    }
    showUser(){
        console.log(this.user)
    }
}

var MyList = new TodoList();

document.getElementById('novotodo').onclick = function(){
    MyList.add('Novo ToDo');
}

MyList.showUser();

/**
 * Tests with arrays: map function and Arrow Functions
*/
const arr = [1,2,3,4,5];
/**
const newArr = arr.map(function(item, index){
    return item + index;
});
*/
const newArr = arr.map(item => item * 2);
//console.log(newArr);

/**
 * Tests with arrays: reduce function
 */
const sum = arr.reduce(function(total, next){
    return total + next;
});
//console.log(sum);

/**
 * Tests with array: filter function
 */
const filter = arr.filter(function(item){
    return item % 2 === 0;
});
//console.log(filter);

/**
 * Tests with array: find function
 */
const find = arr.find(function(item){
    return item === 4;
});
//console.log(find);

/**
 * Tests with Arrow Functions returning an object
 */
const test = () => {
    return {name:'hero'};
}
//console.log(test());

const test2 = () => ({name:'hero'});
//console.log(test2());

/**
 * Testing default values
 */
const new_sum = (a = 3, b = 6) => a + b;
//console.log(new_sum(1));
//console.log(new_sum());

/**
 * Testing object structures
 */

 const user = {
     name: 'r33',
     age: '35',
     address: {
         city: 'BSB',
         state: 'DF'
     },
 };

const { name, age, address: { city } } = user;
//console.log(name);
//console.log(age);
//console.log(city);

 function showAttributes({ name, age }){
    //console.log(name, age);
 }
 showAttributes(user);

 /**
  * REST 
  */
  const { namoh, ...rest } = user;
 //console.log(namoh);
 //console.log(rest);
 function sumup(...params){
    return params.reduce((total, next) => total + next);
 }
 console.log(sumup(1,2,3,4));

/**
  * SPREAD
  */
 const arr1 = [1, 2, 3];
 const arr2 = [4, 5, 6];
 const arr3 = [ ...arr1, ...arr2];
 console.log(arr3);

const user1 = {
    name: 'Lino',
    age: '21',
    enterprise: 'sCorp.ian',
};
const user2 = { ...user1, name:'Jullyano'};
console.log(user2);

/**
 * Template Literals
 */
const nome = 'Lino';
const idade = 21;
console.log(`My name is ${nome} e I am ${age} old.`);

/**
 * Object Short Syntax
 */
const user3 = {
    nome, 
    idade,
    empresa: 'sCorp.ian',
}
console.log(user3);
