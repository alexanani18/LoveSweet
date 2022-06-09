var eroareNume = document.getElementById('eroareNume');
var eroareTelefon = document.getElementById('eroareTelefon');
var eroareEmail = document.getElementById('eroareEmail');
var eroareMesaj = document.getElementById('eroareMesaj');
var eroareSend = document.getElementById('eroareSend');

function validareNume(){
    var numeCont = document.getElementById('numeContact').value;

    if(numeCont.length == 0){
        eroareNume.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> Numele este obligatoriu';
        return false;
    }
    else if(numeCont.length < 3){
        eroareNume.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> Minim 3 caractere';
        return false;
    }
    else{
        eroareNume.innerHTML = '';
        return true;
    }
}

function validareTelefon(){
    var telefonCont = document.getElementById('telefonContact').value;

    if(telefonCont.length == 0){
        eroareTelefon.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> Numarul de telefon este obligatoriu';
        return false;
    }
    else if(telefonCont.length !== 10){
        eroareTelefon.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> Numarul de telefon trebuie sa contina 10 cifre';
        return false;
    }
    else if(!telefonCont.match(/^[0-9]{10}$/)){
        eroareTelefon.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> Numarul de telefon este format doar din cifre';
        return false;
    }
    else{
        eroareTelefon.innerHTML = '';
        return true;
    }
}

function validareEmail(){
    var emailCont = document.getElementById('emailContact').value;

    if(emailCont.length == 0){
        eroareEmail.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> Adresa de email este obligatorie';
        return false;
    }
    else if(!emailCont.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[.][a-z]{2,4}$/)){
        eroareEmail.innerHTML = '<i class="fa-solid fa-circle-exclamation"></i> Adresa de email este invalida';
        return false;
    }
    else{
        eroareEmail.innerHTML = '';
        return true;
    }
}

function validareMesaj(){
    var mesajCont = document.getElementById('mesajContact').value;
    var lungimeText = 30;
    var ramasText = lungimeText - mesajCont.length;

    if(ramasText > 0){
        eroareMesaj.innerHTML = ramasText + 'caractere necesare';
        return false;
    }
    else{
        eroareMesaj.innerHTML = '';
        return true;
    }
}

function validareForm(){
    if(!validareNume() || !validareEmail() || !validareTelefon() || !validareMesaj()){
        eroareSend.style.display = 'block';
        eroareSend.innerHTML = 'Completati formularul corespunzator.';
        setTimeout(function(){eroareSend.style.display = 'none';}, 3000);
        return false;
    }
}