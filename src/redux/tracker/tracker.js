const LOAD = 'tracker/LOAD';
const URL = 'https://api.covid19tracking.narrativa.com/api/';

export const loadData = (payload) => ({ type: LOAD, payload });

export const fetchData = () => async (dispatch) => {
  // const date = new Date().toISOString().slice(0, 10);
  const res = await fetch(`${URL}2021-10-21`);
  const state = await res.json();
  const { countries } = state.dates['2021-10-21'];
  const totalConfirmed = state.total.today_confirmed;
  dispatch(loadData({ countries, totalConfirmed }));
};

export default function reducer(state = {}, action) {
  switch (action.type) {
    case (LOAD):
      return action.payload;
    default: return state;
  }
}
