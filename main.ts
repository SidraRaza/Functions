// 1.Function With Parameter and Argument
function myName(firstName:string,lastName:string){
      console.log(firstName,lastName);

}
myName("Sidra","Raza")

// 2.Function with Return keyword
function sum(num1:number,num2:number){
    return num1+num2
}
let result=sum(7,3)
console.log(result);

// 3.Function With Optional
function optionalFunction(firstName:string,lastName:string,age?:number){
    console.log(firstName,lastName);
    
}
optionalFunction("Sidra","Raza")

// 4.Function with Reset Parameter
function multipleChoices(myName:string,...lastName:string[]){
    return myName+lastName
}
let responce=multipleChoices("Sidra","Ghulam","Raza")
console.log(responce);

// 5.Function With Defualt Parameter
function defualtParameter(firstName:string,lastName:string,age:number=17){
      console.log(`Name: ${firstName} ${lastName} Age: ${age}`);
      
}
defualtParameter("Sidra","Raza",20)//output 20
defualtParameter("Sidra","Raza")//output defuat 17

