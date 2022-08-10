import { AddIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  ButtonGroup,
  Center,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  IconButton,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';
import type { NextPage } from 'next';
import { ruleData } from '../utils/types';
// import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <Stack
      direction="row"
      bgColor="#15202B"
      color="white"
      w="100vw"
      h="100vh"
      gap="0"
    >
      <Center w="50%" h="100%" bg="">
        <Box w="575px" p="20px">
          <Text color="white"> Kindly enter your twitter handle </Text>
          <FormControl mt="30px">
            <FormLabel color="white">Twitter Username</FormLabel>
            <Input
              type="text"
              placeholder="Enter a valid username"
              color="white"
            />
          </FormControl>
          <Text my="20px"> Select fields you're interested in </Text>
          <Grid
            templateColumns={'repeat(4, 1fr)'}
            rowGap="5"
            columnGap="5"
            mt="10px"
          >
            {ruleData.map((data, id) => (
              <GridItem colSpan={1} key={id}>
                <ButtonGroup size="sm" w="100%" isAttached variant="outline">
                  <Button>{data}</Button>
                  <IconButton
                    aria-label={`Add ${data} rule`}
                    icon={<AddIcon />}
                  />
                </ButtonGroup>
              </GridItem>
            ))}
          </Grid>
          <Button mt="32px" w="100%" colorScheme="twitter">
            {' '}
            Continue{' '}
          </Button>
        </Box>
      </Center>
      <Center
        w="50%"
        h="100%"
        borderLeft="1px solid #5c5f61"
        bgColor="gray.800"
        marginInlineStart="0"
        bgImage={'url(/twitter.png)'}
      >
        <Box w="400px">
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="r-jwli3a r-4qtqp9 r-yyyyoo r-rxcuwo r-1777fci r-m327ed r-dnmrzs r-494qqr r-bnwqim r-1plcrui r-lrvibr"
          >
            <g>
              <path
                fill="white"
                d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"
              ></path>
            </g>
          </svg>
        </Box>
      </Center>
    </Stack>
  );
};

export default Home;
