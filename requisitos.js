const requisitos = ["javascript", "react"];

const usuario = {
  habilidades: ["java", "POO"],
};

// inicializamos la variable 'cumpleTodos' en true 
// ya que es más facil pasar esta variable a false 
// si encontramos un requisito que no se encuentre 
// en las habilidades del usuario
let cumpleTodos = true;

for (const r in requisitos) {
  const requisito = requisitos[r];

  let encontrado = false;
  // Para cada requisito vamos a recorrer todo el array de habilidades
  // del usuario y ver si este usuario tiene esta habilidad
  
  // [Tu lógica acá]
  
  for (const h in usuario.habilidades) {
    if (usuario.habilidades[h] === requisito) {
        encontrado = true; // Marcamos que encontramos el requisito
            break; // Salimos del bucle porque ya no necesitamos seguir buscando
  }
}


  if (!encontrado) {
    cumpleTodos = false;
  }
}

// Resultado final
if (cumpleTodos) {
  console.log("El usuario cumple con todos los requisitos");
} else {
  console.log("El usuario no cumple con todos los requisitos");
}