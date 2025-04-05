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

export {hello, FtoC, SqftToAcres, TimeToMow, computeAQI}

