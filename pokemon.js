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
    // 1. 列出 id 為 6 的寶可夢名稱（name）
let pokemon6 = pokemonList.find(p => p.id === 6);
if (pokemon6) {
    console.log(`1. ID6 的寶可夢名稱為: ${pokemon6.name}`);
} else {
    console.log("1. 無ID6 的寶可夢");
}
    // 2. 列出 id < 20, id > 0 的寶可夢名稱（name）以及其寶可夢的屬性（types），依照 id 由小至大排序
    console.log("\n2. ID 在 1 ~ 19 之間的寶可夢名稱及屬性（按 ID 小到大）:");
    pokemonList.filter(p => p.id > 0 && p.id < 20)
               .sort((a, b) => a.id - b.id)
               .forEach(p => {
                console.log(`ID: ${p.id}, 名稱: ${p.name}, 屬性: ${p.types.join(', ')}`);
               });

    // 3. 列出 id < 100, id > 0 的寶可夢中，體重（weight） < 50 的寶可夢名稱（name）及寶可夢體重（weight），並且依照體重由大至小排序
    console.log("\n3. ID 在 1 ~ 99 之間且體重小於 50 的寶可夢（大到小）:");
    pokemonList.filter(p => p.id > 0 && p.id < 100 && p.weight < 50)
               .sort((a, b) => b.weight - a.weight)
               .forEach(p => {
                   console.log(`名稱: ${p.name}, 體重: ${p.weight}`);//單獨跑需要20000才會全部跑完
               });
}, 100000);
