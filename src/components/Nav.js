import { Text, Box } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function Nav(props) {
   return (
      <Box
         display="flex"
         justifyContent="space-between"
         pl="2%"
         margin="1% 0"
         alignItems="center"
      >
         <Text fontSize="1.6rem"> Acme Book Club </Text>
         <Box display="flex" justifyContent="space-around" width="15%">
            <NavLink to="/" className="navbutton">
               Home
            </NavLink>
            <NavLink to="/fav" className="navbutton">
               My Fav
            </NavLink>
         </Box>
      </Box>
   );
}
