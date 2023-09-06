/*1. For each */
let n1 = 0, n2 = 1, n3 = 0;
const li = [1, 2, 3, 4];
document.getElementById("list").innerHTML = "List :" + li;
li.forEach(sum);
li.forEach(mul);
li.forEach(sub);
document.getElementById("sumr").innerHTML = "Sum is:" + n1;
document.getElementById("mulr").innerHTML = "Mul is:" + n2;
document.getElementById("subr").innerHTML = "Sub is:" + n3;
// document.getElementById("divr").innerHTML = "Div is:" + n3;
function sum(nu) {
    n1 += nu;
}
function mul(num) {
    n2 *= num;
}
/* function div(num){
    n3/=n2;
}*/
function sub(num) {
    n3 -= num;
}
/*2. Map*/
//returns true or false if logical operator is user
const user = [{ name: "karthik", age: "21", phone: "2269755943", address: "vizag" }, { name: "satheesh", age: "28", phone: "226975583", address: "hyd" }, { name: "pradeep", age: "20", phone: "2269855743", address: "wrl " }];
const nm = user.map(user => user.name);
console.log(nm);
// 3. Filter
//returns value when logical operator is used
const n = user.filter(user => user.age > 20);
console.log(n);
// 4. Reduce
//used to return single value, generally goes from left to right
document.getElementById("red").innerHTML = "Reduce :" + li.reduce(myFunc);

function myFunc(total, num1) {
    return total - num1;
}
// reduceRight(), goes from right to left
document.getElementById("redr").innerHTML = "Reduce Right :" + li.reduceRight(myFunc1);

function myFunc1(total, num1) {
    return total - num1;
}
document.getElementById("reds").innerHTML = "Reduce Sum :" + li.reduce(myFunc2);

function myFunc2(total, num1) {
    return total + num1;
}
// 5. Find
// used to return values similar to filter, but only prints 1 value, where we can apply logical value to get the desired value.
document.getElementById("find").innerHTML = "Result :" + li.find(myFunc2);

function myFunc2(num1) {
    return num1 > 2;
}
// 6. Findindex
document.getElementById("findindex").innerHTML = "Index value :" + li.findIndex(myFunc2);

function myFunc2(num1) {
    return num1 > 2;
}
// 7. Some
// compare values and give 0 (false) or 1 (true), just verifies if condition is satisfied with a single value
document.getElementById("some").innerHTML = "Index value :" + li.some(myFunc2);

function myFunc2(num1) {
    return num1 > 2;
    // The answer would be True, as we have few values greater than 2, which is True.
}
// 8. Every
// compare values and give 0 (false) or 1 (true),verifies condition with almost every value
document.getElementById("every").innerHTML = "Index value :" + li.every(myFunc2);

function myFunc2(num1) {
    return num1 > 1;
    // here we get answer as false since the there is one element which is equal to 1, so no every element is greater than 1. Hence it is False.
}
// Spread operaters, rest operator