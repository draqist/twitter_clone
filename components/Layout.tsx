import { HStack } from '@chakra-ui/react';
import Sidebar from './Sidebar';
import Trends from './Trends';
// @ts-ignore
const Layout = ({ children }) => {
  return (
    <HStack spacing="0" bg="#15202B" alignItems="flex-start" px="24px">
      <Sidebar />
      {children}
      <Trends />
    </HStack>
  );
};

export default Layout;
