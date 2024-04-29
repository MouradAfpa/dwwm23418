function roller(){
    const place = 5;
    const tours = 3;
    let file =[2, 3, 5, 4];
   let profits =0;
   ;

    for(let i = 1; i <= tours; i++){
        let tour = i;
        if(place - (file[0] + file[1]) >= 0){
            profits = profits + (file[0] + file[1]);
            file.push(file[0], file[1])
            file.splice(0,2);
            document.write("Profits du tour "+ tour + " : " + profits +"</br>");
        }else{
            profits = profits + file[0];
            file.push(file[0]);
            file.shift();
            console.log(file);
            document.write("Profits du tour " + tour + " : " + profits +"</br>")

        }
    }
    document.write("Profits de la journée est egale a : " + profits)
}