
let pokemonList = [];
function getPokemon(id) {
    pm.sendRequest({
        url: `https://pokeapi.co/api/v2/pokemon/${id}/`,
        method: 'GET'
    }, (err, res) => {
        if (err) {
        console.error(err);
        } else if (res.code === 200) {
        let pokemon = res.json();
        processPokemon(pokemon);
        }
    });
}

// 蒐集寶可夢名字屬性體重
function processPokemon(pokemon) {
    pokemonList.push({
        id: pokemon.id,
        name: pokemon.name,
        types: pokemon.types.map(t => t.type.name),
        weight: pokemon.weight
    });
}


for (let i = 1; i <= 99; i++) {
    getPokemon(i);
}

setTimeout(() => {
    // 在 確定名稱Charizard是否為ID6 單獨跑需要10000才可以找到正確答案
    let pokemonId6 = pokemonList.find(p => p.id === 6);
    if (pokemonId6) {
        console.log(`1. ID 為 6 的寶可夢名稱: ${pokemonId6.name}`);
        if (pokemonId6.name.toLowerCase() === 'charizard') {
            console.log("   這個寶可夢是Charizard");
        } else {
            console.log("   這個寶可夢不是Charizard");
        }
    } else {
        console.log("1. ID 為 6 的寶可夢未找到");
}
    // 2. ID 在 1 ~ 19 之間且屬性包含 bug 的寶可夢名稱(大到小排法)
    console.log("\n2. ID 在 1 ~ 19 之間且屬性包含 bug 的寶可夢名稱：");
    pokemonList.filter(p => p.id >= 1 && p.id <= 19 && p.types.includes('bug'))
           .sort((a, b) => b.id - a.id)
           .forEach(p => {
               console.log(`ID: ${p.id}, 名稱: ${p.name}`);
           });

    // 3. 列出 id < 100, id > 0  體重為54的寶可夢名稱是否為oddish  及 體重為32的寶可夢名稱是否為caterpie
    console.log("\n檢查 ID 在 1 ~ 99 的寶可夢：");
    const oddishCheck = pokemonList.find(p => p.id > 0 && p.id < 100 && p.weight === 54);
    const caterpieCheck = pokemonList.find(p => p.id > 0 && p.id < 100 && p.weight === 32);

if (oddishCheck) {
    console.log(`體重為 54 的寶可夢名稱: ${oddishCheck.name}`);
    if (oddishCheck.name.toLowerCase() === "oddish") {
        console.log("名稱Oddish: 是");
    } else {
        console.log("名稱Oddish: 否");
    }
} else {
    console.log("沒有找到體重為 54 的寶可夢");
}

if (caterpieCheck) {
    console.log(`體重為 32 的寶可夢名稱: ${caterpieCheck.name}`);
    if (caterpieCheck.name.toLowerCase() === "caterpie") {
        console.log("名稱為 Caterpie: 是");
    } else {
        console.log("名稱為 Caterpie: 否");
    }
} else {
    console.log("沒有找到體重為 32 的寶可夢");
}

}, 200000);
