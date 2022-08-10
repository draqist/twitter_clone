import { Box, Button, VStack } from '@chakra-ui/react';
import { AiOutlinePicture } from 'react-icons/ai';
import NextLink from 'next/link';
import { sideNav } from '../utils/types';

const Sidebar = () => {
  return (
    <Box
      w={['15.6875rem']}
      h="100vh"
      color="white"
      marginInlineStart={0}
      py="14px"
      pos="fixed"
    >
      <VStack spacing="8px" alignItems="flex-start">
        {sideNav.map((data, idx) => (
          <Button
            key={idx}
            justifyContent="flex-start"
            gap="10px"
            fontSize="19px"
            leftIcon={<data.icon fontSize="24px" />}
            variant="ghost"
            h="50px"
            pl="10px"
            pr="20px"
            _hover={{ bgColor: '#505152', w: 'unset', borderRadius: '36px' }}
          >
            <NextLink href={data.route}>{data.title}</NextLink>
          </Button>
        ))}
      </VStack>
    </Box>
  );
};

export default Sidebar;
