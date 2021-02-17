import { Box, Image, Text, Divider } from "@chakra-ui/react";

// Name
// BirthDate DeathDate
// pic: https://covers.openlibrary.org/a/id/5544365-M.jpg
// bio
// sample-books

export default function AuthorCard(props) {
   return (
      <Box
         width="56%"
         alignSelf="center"
         display="flex"
         flexDir="column"
         alignItems="center"
      >
         <Box
            display="flex"
            justifyContent={props.author?.photos ? "space-between" : "center"}
            width="100%"
            mt="4%"
            mb="3%"
         >
            <Image
               display={
                  props.author?.photos
                     ? props.author?.photos <= 0
                        ? "none"
                        : "initial"
                     : "none"
               }
               src={
                  props.author?.photos
                     ? "https://covers.openlibrary.org/a/id/" +
                       props.author.photos[0] +
                       "-M.jpg"
                     : ""
               }
               boxSize="300px"
               objectFit="cover"
               marginRight="50px"
            />
            <Box
               display="flex"
               flexDir="column"
               alignItems="center"
               justifyContent="center"
            >
               <Text fontSize="1.2rem"> {props.author?.name} </Text>

               <Text>
                  {props.author?.birth_date}
                  {props.author === null ? "" : " - "}
                  {props.author?.death_date ? props.author?.death_date : ""}
               </Text>
               <Divider m="2%"></Divider>
               <Text> {props.author?.bio?.value} </Text>
            </Box>
         </Box>
      </Box>
   );
}
