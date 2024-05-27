// Personaje de TV
let nombre = "Tanjiro";
let anime = "Demon Slayer";
let edad = 16;

// propiedad o llave valor

let personaje = {
  nombre: "Tanjiero",
  anime: "Demon Slayer",
  edad: 16,
};
console.log(personaje);
console.log(personaje.nombre);
console.log(personaje["anime"]);

personaje.edad = 13;

personaje["edad"] = 16;

delete personaje.anime;

console.log(personaje);
