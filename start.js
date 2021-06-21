// 1. What does the following print and why? Add your answer as a multi-line comment

// ![image](https://user-images.githubusercontent.com/635732/120242342-f2be2d80-c264-11eb-86b3-f9e02267cf36.png)

// Prints an error due to the fact that the variable `like` is within the functions scope so cant be used outside of it. The `var` variable is actually accesible in this case and would print out 

// 2. What does the following print? Add your answer as a multi-line comment

// `this` defaults to an empty object. The `x()` function  ends up printing general information about Objects, all though Im not clear if this is due to Node or an inheret JS process.

// ![image](https://user-images.githubusercontent.com/635732/120242468-344ed880-c265-11eb-9b96-17e360eff6f6.png)

// 3. What does the following print? Add your answer as a multi-line comment

// Prints a new instance of the class `Test` which is an empty object. 

// ![image](https://user-images.githubusercontent.com/635732/120242366-ff428600-c264-11eb-8656-4db8850d7875.png)


///4
const random = () => console.log(Math.floor(Math.random() * 1000));
random();

///5
const catLang = () => console.log(`"Meow" means "Woof" in Cat`);
catLang();

///6
const whatIsThis = a => console.log(typeof a);
whatIsThis(random);

///7A
const firstLetter = s => console.log(s.charAt(0));
firstLetter("papa culo");

///7B
const firstItem = a => console.log(a[0]);
const arr = [1, 2, 3, 4, 5];
firstItem(arr);

///8
const stringLength = a => a.length === 3 ? console.log(true) : console.log(false);

stringLength("123");
stringLength("1234");