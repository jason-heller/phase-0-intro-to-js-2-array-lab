const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    let appendedCats = cats.slice();
    appendedCats.push(name);
    return appendedCats;
}

function prependCat(name) {
    let prependedCats = cats.slice();
    prependedCats.unshift(name);
    return prependedCats;
}

function removeLastCat() {
    let poppedCats = cats.slice();
    poppedCats.pop();
    return poppedCats;
}

function removeFirstCat() {
    let shiftedCats = cats.slice();
    shiftedCats.shift();
    return shiftedCats;
}