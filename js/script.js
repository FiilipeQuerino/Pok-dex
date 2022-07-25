const buscaPokemon = async (pokemon) => { 
    const  ApiResposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    const data = ApiResposta.json();

    console.log(data)
}

buscaPokemon();