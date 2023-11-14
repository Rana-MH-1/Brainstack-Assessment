export type locationType = {
    id : String,
    name : String,
    coord: [number, number],
    type: String
  };


  export type PropsType = {
    options: locationType[],
    OnInputChange?: (value: string) => void,
    onClick?: (option: locationType) => void,
    isloading : Boolean
  }