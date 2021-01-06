const pokémon = Object.freeze([
        { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
        { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
        { "id": 9,   "name": "Blastoise",  "types": ["water"] },
        { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
        { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
        { "id": 23,  "name": "Ekans",      "types": ["poison"] },
        { "id": 24,  "name": "Arbok",      "types": ["poison"] },
        { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
        { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
        { "id": 52,  "name": "Meowth",     "types": ["normal"] },
        { "id": 63,  "name": "Abra",       "types": ["psychic"] },
        { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
        { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
        { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
        { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
        { "id": 98,  "name": "Krabby",     "types": ["water"] },
        { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
        { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
        { "id": 133, "name": "Eevee",      "types": ["normal"] },
        { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
        { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
        { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
        { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
    ]);

    const bListPokemon = pokémon.filter( p => p.name[0] === "B");
    console.log(bListPokemon);

    const id3 = pokémon.filter( val => val.id % 3 ===  0);
    console.log(id3);

    const fireList = pokémon.filter( item => item.types.includes("fire"));
    console.log(fireList);
    //An array with pokemon who have more than one type, an array with pokemon with just one type
    const multiType = pokémon.filter( item => item.types.length>1 );
    const oneType = pokémon.filter( item => item.types.length===1 );
    console.log(multiType);
    console.log(oneType);
    //Prints an array of all the pokemon just by name
    const names = pokémon.map( item => item.name);
    console.log(names);
    //an array with pokemon who have id greater than 99
    const id99Plus = pokémon.filter( items => items.id > 99).map( item => item.name);
    console.log(id99Plus);
    //an array with just the names of the pokémon whose only type is poison
    const poison = pokémon.filter( item => item.types == "poison").map( p => p.name);
    console.log(poison);
    // an array containing just the first type of all the pokémon whose second type is "flying"
    const flyers = pokémon.filter( item => item.types[1] == "flying").map( p => p.name);
    console.log(flyers);
    // a count of number of pokemon that are normal type
    console.log("Normal");
    const normalType = pokémon.filter( item => item.types.includes("normal")).length;
    console.log(normalType);