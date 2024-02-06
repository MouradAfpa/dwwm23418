var str = "String";

function doubleChar(str) {
    var double = str.replace(/./g, '$&$&');
    console.log(double);
}

doubleChar(str);


