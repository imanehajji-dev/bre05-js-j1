let i = 0;

while (i <= 100) {

   
    if (i <= 50) {
        if (i % 2 === 0) {
            console.log(i); 
        }
    } 

    
    else {
        if ((i - 51) % 3 === 0) {
            if (i % 2 === 0) {
                console.log(i + " est Pair");
            } else {
                console.log(i + " est Impair");
            }
        }
    }

    i = i + 1; 
}