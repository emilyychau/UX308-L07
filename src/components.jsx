import {hello, FtoC, SqftToAcres} from './functions.js';

function Question0(){
    return <section>
    <h1>Lab 7 Questions</h1>

0. Write a function that converts fahrenheit to celsius.
    <h2>Results</h2>   
    <p>FtoC(32) == "{FtoC(32)}"</p>     
    <p>FtoC(212) == "{FtoC(212)}"</p> 
    <p>FtoC(70) == "{FtoC(70)}"</p>
    </section>;
}

function Question1(){
    return <section>
1. Write a function that takes a _name_ as an argument and _returns a string_ that _contains "hello"_ and the name paramerer. Test at least 3 names. <br />*Note ... I solved this one already
      <h2>results</h2>
      <p>hello("Rich") == "{hello('Rich')}"</p>
      <p>hello("Bill") == "{hello('Bill')}"</p>
      <p>hello("Chris") == "{hello('Chris')}"</p>
    </section>
}

function Question2(){
    return <section>
2. There are 43,560 square feet per acre. Write a program that converts square feet to acres. 
    <h2>Results</h2>
    <p>SqftToAcres(250000) == "{SqftToAcres(250000)}"</p>
    <p>SqftToAcres(925000) == "{SqftToAcres(925000)}"</p>
    <p>SqftToAcres(2000000) == "{SqftToAcres(2000000)}"</p>
    </section>
}

export {Question0, Question1, Question2}