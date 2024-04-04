

function looping(){
    let place = 5;
    let tour = 300;
    let file = [2,3,5,4];
    let profits = 0;

    for (i=1; i<tour; i++){
        
        if (place - (file[0] + file[1]) >= 0){
            profits = profits + (file[0] + file[1]);
            file.push(file[0], file[1]);
            file.splice(0, 2);
            console.log(file)
        } else {
            profits = profits + file[0];
            file.push(file[0]);
            file.shift();
            console.log(file);
        }
        console.log(`Les profits réalisés sont : ` + profits)
    }

    console.log(`si mon attraction fait 300 tours dans la journée elle me rapporte : ` + profits + ` € par jours`);
}

looping();
