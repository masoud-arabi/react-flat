export function setFlats() {
  const promise =  fetch('https://petalmd-api.herokuapp.com/api/v1/pokemons')
    .then(response => response.json());
  return {
  type: 'SET_FLATS',
  payload: promise
  }; 
}

export function selectFlat(flat) {
  return {
    
    type: "SELECT_FLAT",
    payload: flat
  };
}