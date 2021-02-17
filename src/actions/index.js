export const GET_AUTHOR_START = "GET_AUTHOR_START";
export const GET_AUTHOR_SUCCESS = "GET_AUTHOR_SUCCESS";
export const GET_AUTHOR_FAILURE = "GET_AUTHOR_FAILURE";
export const GET_AUTHORKEY_START = "GET_AUTHORKEY_START";
export const GET_AUTHORKEY_SUCCESS = "GET_AUTHORKEY_SUCCESS";
export const GET_AUTHORKEY_FAILURE = "GET_AUTHORKEY_FAILURE";
export const ADD_TO_FAVORITE = "ADD_TO_FAVORITE";
export const REMOVE_FROM_FAVORITE = "REMOVE_FROM_FAVORITE";

export const addFav = (bookObj) => {
   return {
      type: ADD_TO_FAVORITE,
      payload: bookObj,
   };
};

export const delFromFav = (index) => {
   return {
      type: REMOVE_FROM_FAVORITE,
      payload: index,
   };
};

export const getAuthorkey = (searchterm) => (dispatch) => {
   fetch("https://openlibrary.org/search.json?author=" + searchterm)
      .then((res) => {
         res.json()
            .then((res) => {
               dispatch({
                  type: GET_AUTHORKEY_SUCCESS,
                  payload: res.docs[0]["author_key"][0],
                  payload_for_books: res.docs,
               });
               dispatch(getAuthor(res.docs[0]["author_key"][0]));
            })
            .catch((err) =>
               dispatch({ type: GET_AUTHORKEY_FAILURE, payload: String(err) })
            );
      })
      .catch((err) =>
         dispatch({ type: GET_AUTHORKEY_FAILURE, payload: String(err) })
      );

   dispatch({ type: GET_AUTHORKEY_START });
};

export const getAuthor = (authorkey) => (dispatch) => {
   // console.log(authorkey);
   fetch("https://openlibrary.org/authors/" + authorkey + ".json")
      .then((res) => {
         res.json()
            .then((res) => {
               // console.log(res);
               dispatch({
                  type: GET_AUTHOR_SUCCESS,
                  payload: res,
               });
            })
            .catch((err) =>
               dispatch({ type: GET_AUTHOR_FAILURE, payload: String(err) })
            );
      })
      .catch((err) =>
         dispatch({ type: GET_AUTHOR_FAILURE, payload: String(err) })
      );

   dispatch({ type: GET_AUTHOR_START });
};
