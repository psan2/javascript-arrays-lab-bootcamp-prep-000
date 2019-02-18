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