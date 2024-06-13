const myNum = [1,2,3,4,5,6,7,8,9]

// const newNum = myNum.map( (num) => {return num + 10}) // num + 10

const newNum = myNum
              .map((num) => num + 10) // Chaning - Map are Used Multiple Time is Called Chaning
              .map( (num) => num + 1)
              .filter( (num) => num >= 15)

console.log(newNum);