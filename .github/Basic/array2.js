// const heros = ["thor", "Iron", "Spider"];
// const dc = ["Super", "flash", "batman"];

// // heros.push(dc)
// // console .log(dc)

// // const allheros = heros.concat(dc);
// // console.log(allheros);

// const all_new_heros = [...heros,...dc]
// console.log(all_new_heros)

const anothor_array = [1,2,3,4,[4,5,6,7],8,9,[10,11,12,13,[14,15,16]]]

const  real_another_array = anothor_array.flat(Infinity);
console.log(real_another_array)