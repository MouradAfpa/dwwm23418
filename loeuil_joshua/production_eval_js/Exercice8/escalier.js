function escalier(){
    let N = parseInt(prompt('Saisir un nombre"N"'));
    let str = "";
  
    for (let i = 1; i < N + 1; i++) {
      str = str +  '*';
      return str
    }
  
    document.write(str);

}