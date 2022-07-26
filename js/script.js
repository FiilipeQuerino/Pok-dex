const nomePokemon = document.querySelector('.pokemon__name');
const numeroPokemon = document.querySelector('.pokemon__number');
const imgPokemon = document.querySelector('.pokemon__image');

const form = document.querySelector('.form');
const input = document.querySelector('.input__search');

const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');

let buscarPokemon = 1;

const buscaPokemon = async (pokemon) => {
    const ApiResposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if (ApiResposta.status == 200) {
        const data = ApiResposta.json();
        return data;
    }
}

const mostraPokemon = async (pokemon) => {
    nomePokemon.innerHTML = 'Buscando...';
    numeroPokemon.innerHTML = '';

    const data = await buscaPokemon(pokemon);

    if (data) {
        nomePokemon.innerHTML = data.name;
        numeroPokemon.innerHTML = data.id;
        imgPokemon.src = data.sprites.versions['generation-v']['black-white']['animated']['front_default'];

        input.value = '';
    } else {
        nomePokemon.innerHTML = ':(';
        numeroPokemon.innerHTML = '';
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    mostraPokemon(input.value.toLowerCase());
});

mostraPokemon(buscarPokemon);