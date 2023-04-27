for (let i = 0; i < 10; i++) {
    console.log(i) // agora o i só ira ser lido dentro do bloco, pois está 'let i ='
}

console.log('i =', i) // Aqui é só pra mostrar q vai dar error!!!