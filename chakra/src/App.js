import { Container, Flex, VStack } from "@chakra-ui/react";


function App() {
  return (
    <Container maxWidth="container.lg">
     <Flex h="100vh" py={20}>
      <VStack bg={"green.400"} w="full" p={10} spacing = {10} align = "flex-start" >
      </VStack>
      <VStack bg={"gray.500"} w="full" p={10} spacing = {10} align = "flex-start" >
      </VStack>
     </Flex>
    </Container>
  );
}

export default App;
