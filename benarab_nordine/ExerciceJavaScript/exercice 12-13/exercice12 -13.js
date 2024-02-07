String.prototype.toJadenCase = function (){

    return this.split(' ').map((x)=>x.charAt(0).toUpperCase()+x.substring(1,x.length)).join(' ');
    
    }
    
    console.log("ceci est une phrase".toJadenCase());
    

    -------------------------------------------------------------------------------------------------------

    function getCount(string) {
        let count = 0;
        for (let char of string) {
            if ('aeiou'.includes(char)) {
                count++;
            }
        }
        return count;
    }
    
    const phrase = "Ceci est une phrase";
    const count = getCount(phrase);
    console.log(count); 