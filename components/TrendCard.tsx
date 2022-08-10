import { Box, Flex, IconButton, Text } from '@chakra-ui/react';
import { IoIosMore } from 'react-icons/io';

const TrendCard = () => {
  return (
    <Box
      w="21.875rem"
      h="26.625rem"
      p="1rem"
      bg="#273341"
      mt="12px"
      borderRadius="14px"
    >
      <Text fontSize="18px"> Trends for you </Text>
      <Flex mt="12px" justifyContent="space-between" alignItems="flex-start">
        <Box>
          <Text fontSize="12px" fontWeight="400" color="#717D8A">
            {' '}
            Trending in Turkey{' '}
          </Text>
          <Text fontSize="1rem" fontWeight="700" color="#D9D9D9" my="4px">
            {' '}
            Trend name
          </Text>
          <Text fontSize="12px" fontWeight="400" color="#717D8A">
            {' '}
            No of tweets{' '}
          </Text>
        </Box>
        <IconButton aria-label="options button" icon={<IoIosMore />} mt="8px" />
      </Flex>
    </Box>
  );
};

export default TrendCard;
