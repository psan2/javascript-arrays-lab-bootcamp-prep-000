var kittens = ["Milo","Otis","Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(newkitten){
  kittens.push(newkitten)
  return kittens
}

function destructivelyPrependKitten(newkitten){
  kittens.unshift(newkitten)
  return kittens
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
}

function appendKitten(newkitten){
  return [...kittens,newkitten]
}
