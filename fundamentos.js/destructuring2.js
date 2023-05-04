const [a] = [10] // tem q tomar cuidado com a sintaxe para não cunfundir array com distructuring
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[, 8, 8], [9, 6, 8]] // Array dentro de um array, nao usa muito rlx! pois é bem complexo.
console.log(nota)