function hello(name){
    return(`hello ${name}`);
}

function FtoC(fahr){
    const celsius = (fahr - 32) * (5/9);
    return celsius;
}

export {hello, FtoC}

