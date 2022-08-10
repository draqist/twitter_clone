import { Box, Input } from '@chakra-ui/react';
import TrendCard from './TrendCard';

const Trends = () => {
  return (
    <Box
      h="100vh"
      w="27em"
      zIndex="2"
      pos="relative"
      left="15.6875rem"
      color="white"
      px="30px"
    >
      <Box pos="fixed" mt="6px">
        <Input
          type="text"
          placeholder="Search Twitter"
          bgColor="#273341"
          w="21.875rem"
          h="42px"
          pl="20px"
          fontSize="14px"
          _placeholder={{ fontSize: '14px', color: '#7B8794' }}
          borderRadius="42px"
          outline="none"
        />
        <TrendCard />
      </Box>
    </Box>
  );
};

export default Trends;
