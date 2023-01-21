import {
  Container,
  Flex,
  FormControl,
  FormLabel,
  GridItem,
  Heading,
  Input,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";

function App() {
  return (
    <Container maxWidth="container.lg">
      <Flex h="100vh" py={20}>
        <VStack
          bg={"green.400"}
          w="full"
          p={10}
          spacing={10}
          align="flex-start"
        >
          <VStack align={"flex-start"} spacing={2}>
            <Heading>Your details</Heading>
            <Text>This is your path to follow</Text>
          </VStack>
          <SimpleGrid columns={2} columnGap={3} rowGap={2}>
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>First Name</FormLabel>
                <Input placeholder="Enter Your First Name" />
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>last Name</FormLabel>
                <Input placeholder="Enter Your last Name" />
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl>
                <FormLabel>Address</FormLabel>
                <Input placeholder="Enter Your Address" />
              </FormControl>
            </GridItem>
          </SimpleGrid>
        </VStack>
        <VStack
          bg={"gray.500"}
          w="full"
          p={10}
          spacing={10}
          align="flex-start"
        ></VStack>
      </Flex>
    </Container>
  );
}

export default App;
