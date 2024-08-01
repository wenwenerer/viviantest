
1. 列出 id 為 6 的寶可夢名稱（name）
Ans:ID 為 6 的寶可夢名稱: charizard 
- 有在官網先行確認id=6的寶可夢名稱(charizard)來確定找到的答案是正確的，也有試著找不同ID的寶可夢名稱是否符合回傳的數據
- 測試回推 charizard 是否=id6

- QA測試結果如下:
- ID 為 6 的寶可夢名稱: charizard
   這個寶可夢是Charizard

2. 列出 id < 20, id > 0 的寶可夢名稱（name）以及其寶可夢的屬性（types），依照 id 由小至大排序
Ans:
- 參考官網的ID=1~19的名稱https://www.pokemon.com/us/pokedex，
- 使用api: https://pokeapi.co/api/v2/pokemon/1~19的資料確定名稱跟屬性是否與官網與POSTMAN回傳值是否一致
- 使用pokenmonQA.js 測試屬性回推id是否符合我找到的名稱(改為排序為大到小)如下:

ID: 1, 名稱: bulbasaur, 屬性: grass, poison
ID: 2, 名稱: ivysaur, 屬性: grass, poison
ID: 3, 名稱: venusaur, 屬性: grass, poison
ID: 4, 名稱: charmander, 屬性: fire
ID: 5, 名稱: charmeleon, 屬性: fire 
ID: 6, 名稱: charizard, 屬性: fire, flying
ID: 7, 名稱: squirtle, 屬性: water
ID: 8, 名稱: wartortle, 屬性: water
ID: 9, 名稱: blastoise, 屬性: water 
ID: 10, 名稱: caterpie, 屬性: bug 
ID: 11, 名稱: metapod, 屬性: bug 
ID: 12, 名稱: butterfree, 屬性: bug, flying 
ID: 13, 名稱: weedle 屬性: bug, poison 
ID: 14, 名稱: kakuna, 屬性: bug, poison 
ID: 15, 名稱: beedrill, 屬性: bug, poison 
ID: 16, 名稱: pidgey, 屬性: normal, flying 
ID: 17, 名稱: pidgeotto, 屬性: normal, flying
ID: 18, 名稱: pidgeot, 屬性: normal, flying
ID: 19, 名稱: rattata, 屬性: normal

- QA測試結果如下:
2. ID 在 1 ~ 19 之間且屬性包含 bug 的寶可夢名稱：
ID: 15, 名稱: beedrill
ID: 14, 名稱: kakuna 
ID: 13, 名稱: weedle
ID: 12, 名稱: butterfree
ID: 11, 名稱: metapod
ID: 10, 名稱: caterpie



3. 列出 id < 100, id > 0 的寶可夢中，體重（weight） < 50 的寶可夢名稱（name）及寶可夢體重（weight），並且依照體重由大至小排序
Ans:
名稱: meowth, 體重: 42
名稱: bellsprout, 體重: 40
名稱: shellder, 體重: 40 
名稱: rattata, 體重: 35 
名稱: weedle, 體重: 32 
名稱: caterpie, 體重: 29 
名稱: spearow, 體重: 20 
名稱: pidgey, 體重: 18 
名稱: diglett, 體重: 8
名稱: haunter, 體重: 1 
名稱: gastly, 體重: 1


- QA測試結果如下:
- ID 在 1 ~ 99 體重為54的寶可夢名稱是否為oddish  及 體重為32的寶可夢名稱是否為caterpie，如果不是名稱為何
檢查 ID 在 1 ~ 99 的寶可夢：
體重為 54 的寶可夢名稱: oddish
名稱為 Oddish: 是
體重為 32 的寶可夢名稱: weedle
名稱為 Caterpie: 否
