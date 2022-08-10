import { Box } from '@chakra-ui/react';
import React, { ReactElement } from 'react'
import Layout from '../components/Layout';

const notifications = () => {
  return (
    <Box w="calc(100vw - 46.875rem)">notifications</Box>
  )
}

export default notifications

notifications.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};