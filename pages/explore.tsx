import { Box } from '@chakra-ui/react';
import React, { ReactElement } from 'react'
import Layout from '../components/Layout';

const explore = () => {
  return (
    <Box w="calc(100vw - 46.875rem)">explore</Box>
  )
}

export default explore

explore.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};