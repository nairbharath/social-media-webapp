import { Button } from "@chakra-ui/react";
import React from "react";

//no props in this component

const AuthButtons: React.FC = () => {
  return (
    <>
      <Button
        variant="outline"
        height="28px"
        display={{ base: "none", sm: "flex" }}
        width={{ base: "70px", md: "110px" }}
        mr={2}
        // onClick={() => setAuthModalState({ open: true, view: "login" })}
      >
        Log In
      </Button>

      {/* //display={{show nothing on mobile screen, small=flex}}
       */}
      <Button
        variant="solid"
        height="28px"
        display={{ base: "none", sm: "flex" }}
        width={{ base: "70px", md: "110px" }}
        mr={2}
        // onClick={() => setAuthModalState({ open: true, view: "signup" })}
      >
        Sign Up
      </Button>
    </>
  );
};
export default AuthButtons;
