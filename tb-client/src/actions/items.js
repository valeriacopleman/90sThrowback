export const getItems = () => {
    return dispatch => {
      dispatch({ type: "LOADING" })
      fetch("http://localhost:3001/items")
        .then(resp => resp.json())
        .then(items => dispatch({ type: "SET_ITEMS", items }))
    }
}

export const addItem = (item, history) => {
    return dispatch => {
      fetch('http://localhost:3001/items', {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ item })
      })
        .then(resp => resp.json())
        .then(item => {
          dispatch({ type: "ADD_ITEM", item })
          history.push("/items")
        })
    }
  }

  