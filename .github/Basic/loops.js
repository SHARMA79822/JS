// For Loops

for (let i = 1; i <= 10; i++) {
    const element = i;
    if (element == 5)
        {
           // console.log("5 is Best Number");   
        }
    //console.log(element)
    
}


for (let i = 1; i <= 10; i++) {
        //console.log(`Outer loop Value : ${i}`);
    for (let j = 1; j <= 10; j++) {
        //console.log(`Inner loop Value : ${j} Outer loop Value : ${i}`);
        //console.log(i + "*" + j + "=" + i*j );  
    }
    
}






let myArray = ["Gaurav","Kritika", "Ankit"]
//console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
 //       console.log(element)
    
}


// Beak and Continue

for (let index = 1; index <= 20; index++) {
    if (index == 5){
        //console.log(`detected 5`)
        break
    }
    //console.log(`Vaue of i is ${index}`);
    
}




for (let index = 1; index <= 20; index++) {
    if (index == 5){
        console.log(`detected 5`)
        continue
    }
    console.log(`Vaue of i is ${index}`);
    
}


