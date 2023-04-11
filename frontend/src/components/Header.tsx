import {
  Box,
  Button,
  HStack,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { FaAirbnb } from "react-icons/all";
import { FaMoon } from "react-icons/fa";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";

export default function Header() {
  const {
    onOpen: onLoginOpen,
    isOpen: isLoginOpen,
    onClose: onLoginClose,
  } = useDisclosure();

  const {
    onOpen: onSignUpOpen,
    isOpen: isSignUpOpen,
    onClose: onSignUpClose,
  } = useDisclosure();

  return (
    <HStack
      justifyContent={"space-between"}
      px={10}
      py={5}
      borderBottomWidth={1}
    >
      <Box color="red.500">
        <FaAirbnb size={"48"} />
      </Box>
      <HStack spacing={2}>
        <IconButton
          variant={"ghost"}
          aria-label="Toggle dark mode"
          icon={<FaMoon />}
        />
        <Button onClick={onLoginOpen}>Log in</Button>
        <Button onClick={onSignUpOpen} colorScheme={"red"}>
          Sign up
        </Button>
      </HStack>
      <LoginModal isOpen={isLoginOpen} onClose={onLoginClose} />
      <SignUpModal isOpen={isSignUpOpen} onClose={onSignUpClose} />
    </HStack>
  );
}
