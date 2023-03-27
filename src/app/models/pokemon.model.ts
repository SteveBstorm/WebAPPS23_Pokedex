export interface Pokemon {
  name : string
  height : number
  weight : number
  sprites : Sprites
}

export interface Sprites {
  back_default : string
  front_default : string
  other : Other
}

export interface Other {
  "official-artwork" : Artwork
}

export interface Artwork {
  front_default : string
}
