/*inicio do objeto, Declaração do objeto operações*/

var operacoes = new Object();

// todo objeto tem os seus atributos 
//Atributos do objetos
operacoes.A = 0;
operacoes.B = 0;

// metodos funcionais do objeto operacoes
//operacoes basicas
operacoes.soma = function(){
    return this.A + this.B;
}
operacoes.subtracao = function(){
    return this.A - this.B;
}
operacoes.multiplicacao = function(){
    return this.A * this.B;
}
operacoes.divisao = function(){
    return this.A / this.B;
}

// math funcão para operaçoes matematica/ sqrt = raiz quadrada, pow = potencia
operacoes.raizaQuadrada = function(){
    return Math.sqrt(this.A)
}
operacoes.potenciaQuadrada = function(){
    return Math.pow(this.A,2);
}
operacoes.umdivididoporX = function(){
    return 1/this.A;
}
//fim Do objeto operaçoes

//metodo construtor do objeto operacoes

function Operacoes(n1,n2){
    this.A = n1;
    this.B = n2;
    this.soma = function() { return this.A + this.B; }
    this.subtracao = function() { return this.A - this.B; }
    this.multiplicacao = function() { return this.A * this.B; }
    this.divisao = function() { return this.A / this.B; }
    this.raizaQuadrada = function() { return Math.sqrt(this.A); }
    this.potenciaQuadrada = function() { return Math.pow(this.A,2); }
    this.umdivididoporX = function() { return 1/this.A;}
}


//inicio variaveis e funçoes javaScript

//variaveis globais
numero1;
numero2;
operacao;

//funções javaScript chamadas no onclick dos botões

function clicouNumero(numero){
    document.frmCalculadora.txt_Visor.value += numero;
}
function clicouCE(){
    document.frmCalculadora.txt_Visor.value = '';
}

/*parseFloat = converte string em numero real
alert(operacao)
alert(numero1)
toFixed(2) = duas casas decimais*/
function clicouOperacao(ope) {
    operacao = ope;
    numero1 = parseFloat(document.frmCalculadora.txt_Visor.value);
    numero1 = parseFloat(numero1.toFixed(2));
    document.frmCalculadora.txt_Visor.value = '';
    if ((operacao == '√') || (operacao == 'X2') || (operacao == '1/x')){
        clicouIGUAL();
    }

}
function clicouIGUAL(){
    numero2 = parseFloat(document.frmCalculadora.txt_Visor.value);
    numero2 = parseFloat(numero2.toFixed(2));
    //gerar o objeto operacoes = instanciar a operacoes
    var obj_operacoes = new Operacoes(numero1, numero2);
    switch(operacao){
        case'+': {
            document.frmCalculadora.txt_Visor.value = parseFloat(obj_operacoes.soma());
            break;
        }
        case'-': {
            document.frmCalculadora.txt_Visor.value = parseFloat(obj_operacoes.subtracao());
            break;
        }
        case'*': {
            document.frmCalculadora.txt_Visor.value = parseFloat(obj_operacoes.multiplicacao());
            break;
        }
        case'/': {
            document.frmCalculadora.txt_Visor.value = parseFloat(obj_operacoes.divisao());
            break;
        }
        case'√': {
            document.frmCalculadora.txt_Visor.value = parseFloat(obj_operacoes.raizaQuadrada());
            break;
        }
        case'X2': {
            document.frmCalculadora.txt_Visor.value = parseFloat(obj_operacoes.potenciaQuadrada());
            break;
        }
        case'1/x': {
            document.frmCalculadora.txt_Visor.value = parseFloat(obj_operacoes.umdivididoporX());
            break;
        }
    }
}