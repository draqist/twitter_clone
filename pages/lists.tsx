import { Box } from '@chakra-ui/react';
import React, { ReactElement } from 'react'
import Layout from '../components/Layout';

const lists = () => {
  return (
    <Box w="calc(100vw - 46.875rem)">lists</Box>
  )
}

export default lists

lists.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};