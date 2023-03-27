export interface Pokedex {
  count : number
  previous? : string
  next? : string
  results : Result[]
}

export interface Result {
  name : string
  url : string
}
