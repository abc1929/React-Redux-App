import React, { useState } from "react";
import { Box, Image, Button, Text } from "@chakra-ui/react";
import { addFav, delFromFav } from "../actions";
import { connect } from "react-redux";

// cover: https://covers.openlibrary.org/cover/id/{}.jpg

const BookCard = React.memo((props) => {
   return (
      <Box margin="1%">
         <Box display="flex" width="30vw" minWidth="500px" alignItems="center">
            {props.bt === "add" ? (
               <Button onClick={() => props.dispatch(addFav(props.book))}>
                  +
               </Button>
            ) : (
               <Button onClick={() => props.dispatch(delFromFav(props.index))}>
                  -
               </Button>
            )}
            <Image
               src={
                  props.book.cover_i &&
                  "https://covers.openlibrary.org/cover/id/" +
                     props.book.cover_i +
                     ".jpg"
               }
               boxSize="60px"
               marginLeft="2%"
            />
            <Box display="flex" justifyContent="space-between" width="30vw">
               <Box display="flex" flexDir="column" marginLeft="4%">
                  <Text textAlign="start">
                     {" "}
                     {props.book.title} by{" "}
                     {props.book.author_name.length === 1
                        ? props.book.author_name
                        : props.book.author_name[0] + " et al."}{" "}
                  </Text>
                  <Text textAlign="start">
                     {" "}
                     Year: {props.book.first_publish_year}{" "}
                  </Text>
               </Box>
            </Box>

            {/* or remove to fav */}
         </Box>
      </Box>
   );
});

export default connect((s) => {
   return {};
})(BookCard);
