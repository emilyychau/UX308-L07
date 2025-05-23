import {hello, FtoC, SqftToAcres, TimeToMow, computeAQI, yee_Ha, calculateSlope} from './functions.js';

function Question0(){
    return <section>
    <h1>Lab 7 Questions</h1>

<h2>0. Write a function that converts fahrenheit to celsius</h2>
    <h3>Results</h3>   
    <p>FtoC(32) == "{FtoC(32)}"</p>     
    <p>FtoC(212) == "{FtoC(212)}"</p> 
    <p>FtoC(70) == "{FtoC(70)}"</p>
    </section>;
}

function Question1(){
    return <section>
<h2>1. Write a function that takes a _name_ as an argument and _returns a string_ that _contains "hello"_ and the name paramerer. Test at least 3 names. <br />*Note ... I solved this one already</h2>
      <h3>Results</h3>
      <p>hello("Rich") == "{hello('Rich')}"</p>
      <p>hello("Bill") == "{hello('Bill')}"</p>
      <p>hello("Chris") == "{hello('Chris')}"</p>
    </section>
}

function Question2(){
    return <section>
<h2>2. There are 43,560 square feet per acre. Write a program that converts square feet to acres</h2>
    <h3>Results</h3>
    <p>SqftToAcres(250000) == "{SqftToAcres(250000)}"</p>
    <p>SqftToAcres(925000) == "{SqftToAcres(925000)}"</p>
    <p>SqftToAcres(2000000) == "{SqftToAcres(2000000)}"</p>
    </section>
}

function Question3(){
    return <section>
<h2>3. Given the width of a lawn in metres, length of a lawn in metres and the square metres cut per minute calculate the minutes it would take to mow that lawn.</h2>
<h3>Results</h3>
    <p>TimeToMow(2, 5, 1) == "{TimeToMow(2, 5, 1)}"</p>
    <p>TimeToMow(3, 4, 2) == "{TimeToMow(3, 4, 2)}"</p>
    <p>TimeToMow(10, 8, 2) == "{TimeToMow(10, 8, 2)}"</p>        
    </section>
}

function Question4(){
    return <section>
    <h2>4. Compute the air quality given an air quality index.</h2>
    <li> Good: 0 to 50 AQI</li>
    <li> Moderate: 51 - 100 AQI</li>
    <li> Unhealthy for Sensitive Groups: 101 - 150 AQI</li>
    <li> Unhealthy: 151 - 200 AQI</li>
    <li> Very Unhealthy: 201 - 300 AQI</li>
    <li> Hazardous: 300+ AQI</li>
    
    <h3>Results</h3>
    <p>computeAQI(4) == "{computeAQI(4)}"</p>
    <p>computeAQI(62) == "{computeAQI(62)}"</p>
    <p>computeAQI(125) == "{computeAQI(125)}"</p>
    <p>computeAQI(156) == "{computeAQI(156)}"</p>
    <p>computeAQI(275) == "{computeAQI(275)}"</p>
    <p>computeAQI(304) == "{computeAQI(304)}"</p>
    </section>
}

function Question5(){
    return <section>
    <h2>5. yee_Ha takes an integer parameter and returns one of the following strings</h2>
    <li>"Yee" if number is evenly divisible by 3</li>
    <li>"Ha" if number is evenly divisible by 7</li>
    <li>"Yee Ha" if number is evenly divisible by both 3 and 7</li>
    <li>"Nada" if number is none of the above</li>

    <h3>Results</h3>
    <p>yee_Ha(21) == "{yee_Ha(21)}"</p>
    <p>yee_Ha(6) == "{yee_Ha(6)}"</p>
    <p>yee_Ha(49) == "{yee_Ha(49)}"</p>
    <p>yee_Ha(2) == "{yee_Ha(2)}"</p>
    </section>
}

function Question6(){
    return <section>
    <h2>6. Calculate the slope of a line</h2>
    <h3>Results</h3>
    <p>calculateSlope(9, 10, 4, -5) == "{calculateSlope(9, 10, 4, -5)}"</p>
    <p>calculateSlope(2, 0, -4, 7) == "{calculateSlope(2, 0, -4, 7)}"</p>
    <p>calculateSlope(4, 5, 2, 4) == "{calculateSlope(4, 5, 2, 4)}"</p>
    </section>
}

export {Question0, Question1, Question2, Question3, Question4, Question5, Question6}