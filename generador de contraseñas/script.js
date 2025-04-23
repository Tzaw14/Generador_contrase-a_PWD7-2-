// main.js

function crearClave() {
  const largo = parseInt(document.getElementById("tam").value);
  const incluirMayus = document.getElementById("mayus").checked;
  const incluirNum = document.getElementById("num").checked;
  const incluirSimbolos = document.getElementById("simbolos").checked;

  let base = "abcdefghijklmnopqrstuvwxyz";
  let garantizado = [];

  if (incluirMayus) {
    const mayus = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    base += mayus;
    garantizado.push(mayus.charAt(Math.floor(Math.random() * mayus.length)));
  }
  if (incluirNum) {
    const numeros = "0123456789";
    base += numeros;
    garantizado.push(numeros.charAt(Math.floor(Math.random() * numeros.length)));
  }
  if (incluirSimbolos) {
    const simbolos = "!@#$%^&*()_+";
    base += simbolos;
    garantizado.push(simbolos.charAt(Math.floor(Math.random() * simbolos.length)));
  }

  if (!incluirMayus && !incluirNum && !incluirSimbolos) {
    alert("Advertencia: tu contraseña solo tendrá letras minúsculas. ¡Activá más opciones para mayor seguridad!");
  }

  let resultado = garantizado.join("");
  for (let i = garantizado.length; i < largo; i++) {
    resultado += base.charAt(Math.floor(Math.random() * base.length));
  }

  // Mezcla los caracteres
  resultado = resultado.split('').sort(() => 0.5 - Math.random()).join('');
  document.getElementById("claveGenerada").value = resultado;
}

document.getElementById("generar").addEventListener("click", crearClave);

document.getElementById("copiar").addEventListener("click", async () => {
  const campo = document.getElementById("claveGenerada");
  try {
    await navigator.clipboard.writeText(campo.value);
    alert("¡Clave copiada al portapapeles!");
  } catch (err) {
    console.error("Error al copiar: ", err);
  }
});

document.getElementById("tam").addEventListener("input", (e) => {
  document.getElementById("tamValor").textContent = e.target.value;
});
