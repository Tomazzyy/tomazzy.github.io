
let sliderElement = document.querySelector("#slider");
let buttomElement = document.querySelector("#buttom");

let sizePasswordElement = document.querySelector("#valor");
let password = document.querySelector("#senha2");

let containerPassword = document.querySelector ("#container-senha");

let charset= "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
let novasenha= "";

sizePasswordElement.innerHTML = sliderElement.value;

sliderElement.oninput = function() {
  sizePasswordElement.innerHTML = this.value;
}
function gerarsenha(){
    
    let pass =  "";

    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n));
      }
    
      containerPassword.classList.remove("hide");
      password.innerHTML = pass;
      novasenha = pass

    }

function copiarsenha(){
    navigator.clipboard.writeText(novasenha);
    alert("A senha foi copiada!")
}

