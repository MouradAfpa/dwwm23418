
function plusGrand(){

let a = parseInt(prompt("Premier nombre"))
let b = parseInt(prompt("Deuxieme nombre"))
let c = parseInt(prompt("Troisième nombre"))
let tab = [a,b,c]
console.log(tab);

tab.sort((a,b) => a-b)
console.log(tab);

return document.getElementById('root').textContent = `${tab[2]}`; 
}

plusGrand()
