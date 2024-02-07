function mot(param){
    return param.replace(/\b\w/g, function(element) {
    return element.toUpperCase();})}


console.log(mot('ceci est une phrase'));