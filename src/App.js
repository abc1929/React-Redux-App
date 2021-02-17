import "./App.css";

import { Text, Box, Input, Button } from "@chakra-ui/react";
import { connect } from "react-redux";
import { getAuthorkey, getAuthor } from "./actions";
import { useState, useEffect } from "react";
import AuthorCard from "./components/AuthorCard";
import Nav from "./components/Nav";
import { Route } from "react-router-dom";
import Booklist from "./components/Booklist";

function App(props) {
   const [searchterm, setSearchterm] = useState("David Foster Wallace");

   return (
      <div className="App">
         <Nav />
         <Route exact path="/">
            <Box display="flex" width="60%" alignSelf="center">
               <Input
                  margin="0 4%"
                  name="authorsearchbar"
                  placeholder="Search Author"
                  value={searchterm}
                  onChange={(e) => {
                     setSearchterm(e.target.value);
                  }}
               />
               <Button
                  width="10rem"
                  onClick={() => props.dispatch(getAuthorkey(searchterm))}
                  colorScheme="telegram"
               >
                  Search
               </Button>
            </Box>
            {props.isFetching && <Text fontSize="2rem">Getting Data...</Text>}
            {props.error.length > 0 ? (
               <Text> Something went wrong, Try another search </Text>
            ) : (
               <>
                  <AuthorCard author={props.author}></AuthorCard>
                  <Booklist
                     works={props.works.slice(0, 10)}
                     type="works"
                     dispatch={props.dispatch}
                  />
               </>
            )}
         </Route>
         <Route exact path="/fav">
            <Booklist
               myfavs={props.myfavs}
               type="myfavs"
               dispatch={props.dispatch}
            />
         </Route>
      </div>
   );
}

export default connect((s) => {
   return {
      author: s.author,
      works: s.works,
      myfavs: s.myfavs,
      isFetching: s.isFetching,
      error: s.error,
   };
})(App);
