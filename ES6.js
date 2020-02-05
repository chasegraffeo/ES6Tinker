//Template Literals and Default Parameters Value
favMovie() //This leaves movie undefined
favMovie(`Sucker Punch`) // 1 These three insert movie names
favMovie(`Saw`) //2
favMovie(`The Room`) //3
favMovie(`John`, `Aladdin`) //this puts Aladdin as the name
favMovie(`Aladdin`, `Tom`) //this puts them in correct location
favMovie(``, ``) //this inserts nothing
function favMovie(movie, name = `world`) {
    console.log(`My name is ${name} and my favorite movie is ${movie}.`)
    //This is an example of string interpolation `${}`
};

//Arrow Functions

//favMovie()

let favMov = (movi, nam) => //shorthand version of whats below
    console.log(`My name is ${nam} and my favorite movie is ${movi}.`);
favMov(`Nemo`, `Liam`);

let favMoves = (movies, names) => { //equalvalent to above
    console.log(`My name is ${names} and my favorite movie is ${movies}.`);
};
favMoves(`Nemo`, `Liam`);




var game = `Chase Graffeo`; //this is going to split the array and call on a specific name by index

var getFirstName = (string) => { //long hand
    console.log(string.split(` `)[0]);
};
getFirstName(game);


var getFirstNameConcise = string => (console.log(string.split(` `)[0]));
getFirstNameConcise(game); //short hand

let numb = (x, y) => ({ // does math for for below parameters
    product: x * y,
    exponent: x ** y,
    sum: x + y,
    difference: x - y,
    quotent: x / y,
});

let result = numb(4, 2); // These are the parameters im using for numb
console.log(result);

let resu = numb(5, 2);
console.log(resu);

let resul = numb(6, 2);
console.log(resul);

/* let result = numb(1,2);//will not work cuz logging same variable
console.log(result);

let result = numb(8,2);
console.log(result); */

function me(name, location, favFood) {
    console.log(name, location, favFood);
}

let array = [`Chase`, `Birmingham`, `Ramen`];

me(...array);

let im = `Chase`
/*  let thisFunc = pmetr => {
     for(i = 0; i<= 4; i++)
     console.log(im = [...pmetr][i]);
     //im = [...pmetr];
     //console.log(im)
 }; */
let thisFunc = () => {
    for (i = 0; i <= 4; i++)
        console.log([...im][i]);
    //im = [...pmetr];
    //console.log(im)
};
thisFunc(im);