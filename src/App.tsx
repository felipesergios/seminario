import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Input,
  Container,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"
import ControllerInput from "./ControllerInput"

export const App = () => (
  <ChakraProvider theme={theme}>
   
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
      
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <Logo h="40vmin" pointerEvents="none" />
          <Text>
            Edit <Code fontSize="xl">src/App.tsx</Code> and save to reload.
          </Text>
         
            <ControllerInput/>
   

          <Link
            color="teal.500"
            href="https://chakra-ui.com"
            fontSize="2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
           
          </Link>
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
)
