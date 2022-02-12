import { FETCHED_DATA, UPDATE_SETTINGS } from "../constant/constants";
export const initialState = {
  images: [],
  duration: 2,
  direction: "Reverse",
};

export const Reducer = (state, action) => {
  switch (action.type) {
    case FETCHED_DATA:
      return { ...state, images: action.payload };
    case UPDATE_SETTINGS:
      console.log(action.payload);
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
