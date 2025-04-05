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

export {hello, FtoC, SqftToAcres}

