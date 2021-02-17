import {
   GET_AUTHOR_START,
   GET_AUTHOR_SUCCESS,
   GET_AUTHOR_FAILURE,
   GET_AUTHORKEY_START,
   GET_AUTHORKEY_SUCCESS,
   GET_AUTHORKEY_FAILURE,
   ADD_TO_FAVORITE,
   REMOVE_FROM_FAVORITE,
} from "../actions";

const initialState = {
   authorkey: "",
   author: null,
   works: [],
   myfavs: [],
   isFetching: false,
   error: "",
};

export const rootReducer = (state = initialState, action) => {
   const favsAfterRemoving = (index) => {
      return state.myfavs.filter((i, j) => j !== index);
   };

   switch (action.type) {
      case GET_AUTHOR_START:
         return { ...state, isFetching: true, error: "" };

      case GET_AUTHOR_SUCCESS:
         return {
            ...state,
            isFetching: false,
            error: "",
            author: action.payload,
         };

      case GET_AUTHOR_FAILURE:
         return {
            ...state,
            isFetching: false,
            error: action.payload,
         };

      case GET_AUTHORKEY_START:
         return { ...state, isFetching: true, error: "" };

      case GET_AUTHORKEY_SUCCESS:
         return {
            ...state,
            isFetching: false,
            error: "",
            authorkey: action.payload,
            works: action.payload_for_books,
         };

      case GET_AUTHORKEY_FAILURE:
         return {
            ...state,
            isFetching: false,
            error: action.payload,
         };

      case ADD_TO_FAVORITE:
         if (
            state.myfavs.filter(
               (i) => i.edition_key[0] === action.payload.edition_key[0]
            ).length > 0
         ) {
            return state;
            // already in fav, return
         }
         return { ...state, myfavs: state.myfavs.concat(action.payload) };
      case REMOVE_FROM_FAVORITE:
         return { ...state, myfavs: favsAfterRemoving(action.payload) };

      default:
         return state;
   }
};
