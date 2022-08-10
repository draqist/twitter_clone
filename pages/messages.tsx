import { Box } from '@chakra-ui/react';
import React, { ReactElement } from 'react';
import Layout from '../components/Layout';

const messages = () => {
  return <Box w="calc(100vw - 46.875rem)">messages</Box>;
};

export default messages;

messages.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
