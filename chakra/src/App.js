import {
  Button,
  Checkbox,
  Container,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  GridItem,
  Heading,
  HStack,
  Input,
  Select,
  SimpleGrid,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";

function App() {
  return (
    <Container maxWidth="container.xl">
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
          <SimpleGrid columns={2} columnGap={3} rowGap={4}>
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
                <Textarea placeholder="Enter Your Address..."></Textarea>
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>City</FormLabel>
                <Input placeholder="Enter City" />
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>last Name</FormLabel>
                <Select placeholder="Select City">
                  <option value={"india"}>India</option>
                </Select>
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <FormControl>
                <Checkbox>I agree to the terms and conditions</Checkbox>
              </FormControl>
            </GridItem>
            <GridItem colSpan={2}>
              <Button width={"full"} size="lg">
                Submit
              </Button>
            </GridItem>
          </SimpleGrid>
        </VStack>
        <VStack bg={"gray.500"} w="full" p={10} spacing={10} align="flex-start">
          <HStack justifyContent={"space-between"}>
            <Text>Enter your details</Text>
            <Heading size={"sm"}>Step 1</Heading>
          </HStack>
          <HStack justifyContent={"space-between"}>
            <Text>Enter your details</Text>
            <Heading size={"sm"}>Step 1</Heading>
          </HStack>
          <HStack justifyContent={"space-between"}>
            <Text>Enter your details</Text>
            <Heading size={"sm"}>Step 1</Heading>
          </HStack>
          <Divider />
        </VStack>
      </Flex>
    </Container>
  );
}

export default App;
