
function funcaochange(elemento){
    console.log(elemento.value);
    alert(elemento.value)
}

function load(){
    alert("Página carregada")
}


function voltar(elemento){
//document.getElementById("mousemove").innerHTML = "Passe o mouse aqui!";
elemento.innerHTML = "Passe o mouse aqui!"
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "<b> Obrigada por passar o mouse! </b>";
    elemento.innerHTML="Obrigada por passar o mouse!"
    //alert("trocar texto")
}

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b> Obrigada por clicar! </b>";
}

function redirecionar(){
    window.open("https://www.google.com.br/");
   // window.location.href="https://www.google.com.br/";
}




/*
var validar = 0;
function validaidade(idade){
    if(idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt ("Qual sua idade?");
validaidade(idade)
console.log(validar);
*/

/*
var validar=0;
function validaidade(idade){
    if (idade >=18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt ("Qual a sua idade?");
console.log (validaidade(idade));
*/

/*
function soma(n1, n2){
    return(n1 + n2)
}
alert(soma(5,10))

function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)
}
alert(setReplace("Vai Argentina!", "Argentina", "Brasil"));
*/

/*
var data = new Date();
alert (data.getHours());
alert (data.getMonth()+1); //o month conta do 0
alert (data.getDay());
alert (data.getFullYear());
*/

/*
var data = new Date();
alert (data);
*/

/*
var count
for(count=0; count <=5; count++){
    console.log(count);
    alert(count);
}
*/

/*
var count = 0
while(count <=5){
    console.log (count);
    count++;
}
*/

/*
var idade = prompt("Qual a sua  idade?")
if(idade >= 18){
    alert("Boa!! pode entrar!")
}else{
    alert("Vish, moio procê, vai dar não, vaza!!");
}
*/

/*var idade = 18;
 if(idade >= 18){
     alert("Boa!! pode entrar!")
 }else{
     alert("Vish, moio procê, vai dar não, vaza!!");
 }
*/

/*var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}, {nome:"morango", cor:"vermelho"}];
console.log(frutas);
alert(frutas[1].nome);
*/

/*
var fruta = {nome:"maça", cor:"vermelha"};
console.log(fruta.nome);
alert(fruta.cor)
*/

//var lista = ["maça", "pêra", "laranja"];
//console.log(lista[1]);
//lista.push("uva")
//lista.pop();
//console.log(lista);
//console.log(lista.toString())
//console.log(lista.join(" - "))
//alert(lista[1])

/*
//var nome = "Gabi Passos";
//var idade = 13;
//var idade2 = 10;
//var frase = "Argentina é o melhor time do mundo"
//alert(nome + " tem " + idade + " anos");
// alert(idade + idade2);
//console.log(nome);
//console.log(idade + idade2);
//console.log(frase.replace("Argentina", "Brasil"));
//console.log(frase.toUpperCase());
//alert(frase.replace("Argentina","Brasil"));
*/