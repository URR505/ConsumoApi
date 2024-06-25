document.addEventListener('DOMContentLoaded', () => {
  // Este evento se dispara cuando el HTML ha sido completamente cargado

  const baseURL = 'https://pokeapi.co/api/v2/pokemon/';
  // URL de la PokeAPI desde donde se obtendrá la información.

  const randomID = Math.floor(Math.random() * 898) + 1;
  // Genera un número aleatorio entre 1 y 898 (el número total de pokemones).

  fetch(`${baseURL}${randomID}`)
    // Realiza una solicitud GET a la URL que incluye el ID aleatorio generado.
    .then(response => response.json())
    // Convierte la respuesta en formato JSON.
    .then(data => {

      console.log(data); // Imprime los datos del pokemon en la consola para asegurarme 

      // Extrae la información específica del Pokémon de los datos obtenidos.
      const pokemonName = data.name;
      const pokemonHeight = data.height;
      const pokemonWeight = data.weight;
      const pokemonTypes = data.types.map(type => type.type.name).join(', ');
      const pokemonImage = data.sprites.other['official-artwork'].front_default;

      // Actualiza los elementos HTML con la información obtenida.
      document.getElementById('pokemon-name').textContent = pokemonName.toUpperCase();
      document.getElementById('pokemon-height').textContent = pokemonHeight;
      document.getElementById('pokemon-weight').textContent = pokemonWeight;
      document.getElementById('pokemon-types').textContent = pokemonTypes;
      document.getElementById('pokemon-image').src = pokemonImage;
    })
    .catch(error => {
      // Captura cualquier error que pueda ocurrir durante la solicitud o el procesamiento.
      console.log('Error', error);
    });
});
