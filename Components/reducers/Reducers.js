function cloneObject(obj){
  return JSON.parse(JSON.stringify(obj));
}
let newState = {
  Items:{
    value:""
  }
}
export default function reducers(state,action){
    switch (action.type) {
      case "ADD":
        newState = cloneObject(state)
        newState.Items.value = action.noidung;
        return newState;
      break;
      default: return state || newState;

    }
  }
