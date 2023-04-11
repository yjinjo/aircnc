import { Outlet } from "react-router-dom";
import {
  Box,
  Button,
  Divider,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { FaAirbnb, FaGithub, FaLock, FaUser } from "react-icons/all";
import { FaComment, FaMoon } from "react-icons/fa";

export default function Root() {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Box>
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
          <Button onClick={onOpen}>Log in</Button>
          <Button colorScheme={"red"}>Sign up</Button>
        </HStack>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Log in</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <VStack>
                <InputGroup size={"md"}>
                  <InputLeftElement
                    children={
                      <Box color="gray.500">
                        <FaUser />
                      </Box>
                    }
                  />
                  <Input variant={"filled"} placeholder="Username" />
                </InputGroup>
                <InputGroup>
                  <InputLeftElement
                    children={
                      <Box color="gray.500">
                        <FaLock />
                      </Box>
                    }
                  />
                  <Input variant={"filled"} placeholder="Pasword" />
                </InputGroup>
              </VStack>
              <Button mt={4} colorScheme={"red"} w={"100%"}>
                Log in
              </Button>
              <HStack my={8}>
                <Divider />
                <Text
                  textTransform={"uppercase"}
                  color="gray.500"
                  fontSize="xs"
                  as="b"
                >
                  Or
                </Text>
                <Divider />
              </HStack>
              <VStack>
                <Button
                  w="100%"
                  leftIcon={<FaGithub />}
                  colorScheme={"blackAlpha"}
                >
                  Continue with GitHub
                </Button>
                <Button
                  w="100%"
                  leftIcon={<FaComment />}
                  colorScheme={"yellow"}
                >
                  Continue with Kakao
                </Button>
              </VStack>
            </ModalBody>
          </ModalContent>
        </Modal>
      </HStack>
      <Outlet />
    </Box>
  );
}
