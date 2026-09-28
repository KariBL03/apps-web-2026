function myFunction() {
    document.getElementById("demo").innerHTML = "Bienvenidos TIID 04_02.";
}

document.getElementById("saludo").innerHTML="Bienvenido TIID JavaScript";

console.log("Hola mundo");
console.log(2+2);

console.group("Información a moestrar");
console.log("UA: ", navigator.userAgent);
console.log("Lang: ", navigator.language);
console.log("Plataforma: ", navigator.platform);
console.log("Cookies habilitadas: ", navigator.cookieEnabled);
console.log("Online: ", navigator.onLine);
console.groupEnd();