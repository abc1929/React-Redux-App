import { Box } from "@chakra-ui/react";
import React from "react";
import BookCard from "./BookCard";
import { v4 } from "uuid";

export default React.memo(function Booklist(props) {
   return props.type === "works" ? (
      <Box
         display="flex"
         flexWrap="wrap"
         justifyContent="center"
         marginLeft="10%"
      >
         {props.works.map((i, j) => (
            <BookCard
               key={i.last_modified_i + j}
               book={i}
               bt="add"
               dispatch={props.dispatch}
            />
         ))}
      </Box>
   ) : (
      <Box>
         {props.myfavs.map((i, j) => (
            <BookCard
               key={i.last_modified_i + j}
               book={i}
               bt="remove"
               index={j}
               dispatch={props.dispatch}
            />
         ))}
      </Box>
   );
});
