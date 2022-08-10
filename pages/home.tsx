import { Box, Flex, IconButton, Text } from '@chakra-ui/react';
import { ReactElement } from 'react';
import tl from '../components/icons/tl';
import Layout from '../components/Layout';
import Tweet from '../components/Tweet';
import TweetInput from '../components/TweetInput';
import { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  return (
    <Box
      w="calc(100vw - 46.875rem)"
      bg="#15202B"
      borderLeft="1px solid #2F3336"
      borderRight="1px solid #2F3336"
      pos="relative"
      left="15.6875rem"
    >
      <Flex
        px="1rem"
        justifyContent={['space-between']}
        alignItems="center"
        h="53px"
        borderBottom="1px solid #2F3336"
      >
        <Text color="white"> Home </Text>
        <IconButton
          aria-label="Timeline button"
          icon={tl()}
          variant="unstyled"
          textAlign={'center'}
          justifyContent="center"
          display="flex"
        />
      </Flex>
      <TweetInput />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
      <Tweet />
    </Box>
  );
};

export default Home;

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
