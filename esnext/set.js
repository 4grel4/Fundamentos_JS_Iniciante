// não aceita repetição de chaves e não indexado

const time = new Set()
time.add('Vasco')
time.add('São Paulo').add('Palmeiras').add('Flamengo')
time.add('Corinthians')
time.add('Vasco') // não aceita repetição de chaves

console.log(time) // Set(4) { 'Vasco', 'São Paulo', 'Palmeiras', 'Flamengo' }
console.log(time.size) // 4
console.log(time.has('vasco')) // false
console.log(time.has('Vasco')) // true
time.delete('Vasco')
console.log(time.has('Vasco')) // false