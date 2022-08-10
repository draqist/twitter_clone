import { Box } from '@chakra-ui/react';
import React, { ReactElement } from 'react'
import Layout from '../components/Layout';

const bookmarks = () => {
  return (
    <Box w="calc(100vw - 46.875rem)">bookmarks</Box>
  )
}

export default bookmarks

bookmarks.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};