var str = "Ceci est une phrase";

function getCount(str) {
    var voyelles = str.replace(/[^aeiou]/gi, '').length;
    console.log(voyelles);
}

getCount(str);