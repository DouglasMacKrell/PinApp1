offers1 = [
  ["shop1", "ruby", 1],
  ["shop1", "opal", 2],
  ["shop2", "jade", 3],
];
preferences1 = ["ruby", "opal", "jade"];

offers2 = [["Shiny Rock Shop", "ruby", 10]]
preferences2 = ['diamond', 'emerald', 'ruby', 'jade'];

function gemstones(offers, preferences) {
  let shops = {};
  let gems = {};
  let purchases = []
  for (let gem of preferences) {
      gems[gem] = 0
  }
  for (let shop of offers) {
    if (shops[shop[0]]) {
      shops[shop[0]].push(shop[1])
      shops[shop[0]].push(shop[2])
    } else {
      shops[shop[0]] = [shop[1], shop[2]];
    }
  }
  for (let store in shops) {
      console.log(shops[store].length)
      counter = 0
      for (let pref of preferences) {
          for (let i = 0; i < shops[store].length; i++) {
              if (pref == shops[store][i] && counter < 1) {
                  console.log(shops[store][i])
                  gems[shops[store][i]] = shops[store][i + 1]
                  counter += 1
              }
          }
      }
  }
  console.log("gemsobj", gems)
  for (let gem in gems) {
      console.log("gem: ", gems[gem])
      purchases.push(gems[gem])
  }

//   console.log(shops);
//   console.log(gems)
//   console.log(purchases)
  return [];
}

gemstones(offers2, preferences2);


offers1 = [
  ["shop1", "ruby", 1],
  ["shop1", "opal", 2],
  ["shop2", "jade", 3],
];
preferences1 = ["ruby", "opal", "jade"];

const gemstones2 = (offers, preferences) => {
    let shops = {}
    for(let shop of offers) {
        let store = shop[0]
        let stone = shop[1]
        let volume = shop[2]
        shops[store] = {[stone]: volume}
    } 
}

// computed properties
// dynamic variables 
// bracket notation 