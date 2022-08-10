import { Box } from '@chakra-ui/react';
import { ReactElement } from 'react';
import Layout from '../components/Layout';

const profile = () => {
  return <Box w="calc(100vw - 46.875rem)">profile</Box>;
};

export default profile;

profile.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
