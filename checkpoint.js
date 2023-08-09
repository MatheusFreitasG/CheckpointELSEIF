// Exercicio 1/3
let promocao = true;
promocao = (!promocao);

// Exercicio 2/4

if (promocao == true){
    console.log('Hora de comprar!')
}else{
    console.log('Hora de esperar uma promoção!')
};

// Exercicio 5

let nivelFome = 7;

// Exercicio 6

if (nivelFome > 7){
    console.log('Hora de comer!')
}else{
    console.log('Podemos comer mais tarde')
};

// Exercicio 7 

let humor = 'sonolento';
let nivelCansaco = 6;

if (humor == 'sonolento' && nivelCansaco > 8){
    console.log('Hora de dormir!')
}else{
    console.log('Ainda não é hora de dormir!')
};

// Exercicio 8/9/10

let estacao = 'inverno';
if (estacao == 'inverno'){
    console.log('É inverno! Tudo está coberto de neve.')
}else if (estacao = 'outono'){
    console.log('É outono! As folhas estão caindo!')
}else if (estacao == 'verão'){
    console.log('É ensolarado e quente porque é verão!')
};

// Exercicio 11/12

let posicaoFinalAtleta = 'Primeiro lugar'
switch (posicaoFinalAtleta){
    case 'Primeiro lugar':
        console.log('Você ganha a medalha de ouro!')
        break
    case 'segundo lugar':
        console.log('Você ganha a medalha de prata!')
        break
    case 'terceiro lugar':
        console.log('Você ganha a medalha de bronze!')
        break
    default:
        console.log('Nenhuma medalha concedida.')
};