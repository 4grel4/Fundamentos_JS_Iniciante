{
    {
        {
            {
                var sera = 'Será???' // mesmo se vc criar a var dentro do bloco, será visivel , em outras linguagens, não funcionaria
                console.log(sera)
            }
        }
    }
}

console.log(sera)

function teste () {
    var local = 123 //  essa só sera visivel dentro desta função
    console.log(local)
}

teste ()
console.log(local) // este não funcionara, pois o var foi colocado diretamente dentro da função.

// Var só tem dois escopos possiveis: ou é nivel global(visivel na sua aplicação inteira) ou cria uma var num escopo de função