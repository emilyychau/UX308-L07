function FtoC(fahr){
    const celsius = (fahr - 32) * (5/9);
    return celsius;
}

function hello(name){
    return(`hello ${name}`);
}

function SqftToAcres(sqft){
    const acres = sqft/43560;
    return acres;
 }

 function TimeToMow(width, length, mowRate){
    const mowTime = (width * length) / mowRate;
    return mowTime;
}

function computeAQI(AQI){
    let AQ;
    if (AQI <= -1){
    AQ = "Computation error, please enter an air quality value that is equal or greater than 0";
     }
    else if (AQI >= 0 && AQI <= 50){
    AQ = "The air quality is good";
    }
    else if (AQI >= 51 && 100){
    AQ = "The air quality is moderate";
     }
    else if (AQI >= 101 && 150){
    AQ = "The air quality is unhealthy for sensitive groups";
     }
     else if (AQI >= 151 && 200){
      AQ = "The air quality is unhealthy";
     }
     else if (AQI >= 201 && 300){
      AQ = "The air quality is very unhealthy";
     }
     else if (AQI >= 301){
      AQ = "The air quality is hazardous";
     }
     else {
      AQ = "Computation error, please enter an air quality value that is equal or greater than 0";
     }
     return AQ;
}

function yee_Ha(int){
    let output = "";
    if (int % 3 === 0 && int % 7 === 0) {
      output = "Yee Ha";
    }
    else if (int & 3 === 0) {
      output = "Yee";
    }
    else if (int % 7 === 0) {
      output = "Ha";
    }
    else {
      output = "Nada";
    }
    return output;
  }

  function calculateSlope(x1, y1, x2, y2){
    let slope;
    if (x1 === x2){
      slope = "The slope of the line is undefined";
    }
    else if (y1 === y2){
      slope = "The slope of the line is undefined";
    }
    else {
      slope = (y2 - y1) / (x2 - x1);
    }
    return slope;
  }  

export {hello, FtoC, SqftToAcres, TimeToMow, computeAQI, yee_Ha, calculateSlope}

