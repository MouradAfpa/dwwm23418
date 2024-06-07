function election(paramA, paramB, paramC, paramD){
    if(paramA>50){
        console.log("A elu");
    } else if((paramA>=12.5 && (paramB>50 || paramC>50 || paramD>50))){
        console.log("A battu");
    } else if(paramA>paramB && paramA>paramC && paramA>paramD && paramA>=12.5){
        console.log("ballottage favorable");
    } else if((paramA<paramB || paramA<paramC || paramA<paramD) && paramA>=12.5){
        console.log("ballottage defavorable");
    } else{
        console.log("elimine");
    }

}
election(51,23,23,23);
election(30,51,23,23);
election(45,23,23,23);
election(30,45,23,23);
election(10,23,23,23);



