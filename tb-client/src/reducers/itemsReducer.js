const initialState = {
    items: [],
    loading: true
  }
  
  const itemsReducer = (state=initialState, action) => {
    switch(action.type) {
      case "LOADING":
        return {
          ...state,
          loading: true
        }
      case "SET_ITEMS":
        return {
          ...state,
          loading: false,
          items: action.items
        }
      case "ADD_ITEM":
        return {
          ...state,
          items: [...state.items, action.item]
        }
      default:
        return state;
    }
  }
  
  export default itemsReducer;