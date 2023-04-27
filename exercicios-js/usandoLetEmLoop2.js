const funcs = []

for (let i = 0; i < 10; i++) {
    funcs.push(function () {
        console.log(i)
    })
}

funcs[2]()
funcs[6]()
funcs[8]()// ja aqui funcionará, pois let tem escopo de bloco        - var não -