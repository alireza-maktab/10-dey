const arr = [1, 2, 3, 4, 5, 6, 7, 8]

const fillR = arr.fill(100, 2, 5)

const mapR = arr.map(item => item * 2)

const filterR = arr.filter(item => item % 2 === 0)

const findR = arr.find(item => item % 3 === 0)

const indexR = arr.findIndex(item => item % 3 === 0)

const indexOfR = arr.indexOf(5)

const someR = arr.some(i => i % 2 === 4)

const everyR = arr.every(i => i % 2 === 4)


// console.log(result);