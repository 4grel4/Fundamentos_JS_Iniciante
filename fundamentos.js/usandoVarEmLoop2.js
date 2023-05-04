const funcs = []

for (var i = 0; i < 10; i++) {
    funcs.push(function () {// irá adicionar um novo elemento na array
        console.log(i)
    })
}

funcs[2]()
funcs[8]() // como var não tem escopo de função, todos recebera 10.