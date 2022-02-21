import { Box, Center, Heading, Text, HStack, Divider, Image, Flex, Link } from '@chakra-ui/react'
import avatar from './image-avatar.png'
import equil from './image-equilibrium.jpg'
import eth from './icon-ethereum.svg'
import clock from './icon-clock.svg'

function App() {

  let textColor = "#8BACD9"
  let hover = "#00FFF8"
  
  return (
    <div className="App">
      <Center bg="#0D192C" h="100vh">
        <Box bg="#15263F" color="white" borderRadius="2xl" p={6} w={350}>
        <Image
          src={equil}
          borderRadius="8px"
          marginBottom={6}
          cursor="pointer"
        >

        </Image>
        <Heading 
          as="h2" 
          fontSize="22px" 
          mb={4}
          cursor="pointer"
          _hover={{
            color: "#00FFF8"
          }}>
          Equilibrium #3429
        </Heading>
        <Text color={textColor} mb={6} fontSize="18px">
          Our Equilibrium collection promotes balance and calm.
        </Text>
        <HStack justify="space-between">
          <Flex align="center">
            <Image
              src={eth}
              marginRight="6px"
              height="18px"
            >
            </Image>
            <Text color="#00FFF8" fontWeight="bold">
              0.041 ETH
            </Text>
          </Flex>
          <Flex align="center">
            <Image
                src={clock}
                marginRight="6px"
                height="16px"
              >

            </Image>
            <Text color={textColor}>
              3 days left
            </Text>
          </Flex>
        </HStack>
        <Divider borderColor="#2E405A" mt={6} mb={4}/>
        <Flex>
          <Image
              border="1px"
              borderColor="white"
              borderRadius="50px"
              boxSize='30px'
              objectFit='cover'
              src={avatar}
              alt='Profile Picture'
              marginRight={4}
            />
          <Text color={textColor}>
            Creation of{' '}
            <Link 
              color='white' 
              href='#'
              _hover={{
                color: "#00FFF8"
              }}>
              Jules Wyvern
            </Link>
          </Text>
        </Flex>
        </Box>
      </Center>
    </div>
  );
}

export default App;
