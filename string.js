console.log("---String Template---");

let firstName = "glossy";
let lastName = "gupta";
console.log(`My first name is: ${firstName}`);
console.log(`My last name is: ${lastName}`);
function FullName(first,last){
   return `${first}${last}`;
}
let Name = ` hello ${FullName(firstName, lastName)}`;
console.log(Name);


