import { Avatar, Box, Grid, HStack, IconButton, Text } from '@chakra-ui/react'
import react from './icons/react'
import reply from './icons/reply'
import retweet from './icons/rt'
import share from './icons/share'

const Tweet = () => {
  return (
    <HStack spacing='12px' color='white' fontSize='1rem' borderBottom='1px solid #2F3336' px='16px' py='12px' alignItems='flex-start'>
      <Avatar src='https://bit.ly/dan-abramov' size='md' />
      <Box>
        <Text mb='8px'> Display name <Text as='span' color='#6E767D' fontSize='14px' pl='4px'>@twitter handle </Text> <Text as='span' color='#6E767D' fontSize='14px' pl='4px'> time </Text>  </Text>
        <Text> President Joe Biden touted a new agreement reached with the European Union to ease Trump-era tariffs on aluminum and steel as a "major breakthrough" that would serve to both strengthen the US steel industry and combat the global climate crisis.</Text>

        <Grid templateColumns='repeat(4, 1fr)' gap='4px'>
          <HStack spacing='8px'>
            <IconButton aria-label='Reply' icon={reply()} variant='unstyled' textAlign='center' justifyContent='flex-start'  display='flex' />
            <Text> No. </Text>
          </HStack>
          <HStack spacing='8px'>
            <IconButton aria-label='Reply' icon={retweet()} variant='unstyled' textAlign='center' justifyContent='flex-start'  display='flex' />
            <Text> No. </Text>
          </HStack>
          <HStack spacing='8px'>
            <IconButton aria-label='Reply' icon={react()} variant='unstyled' textAlign='center' justifyContent='flex-start'  display='flex' />
            <Text> No. </Text>
          </HStack>
          <HStack spacing='8px'>
            <IconButton aria-label='Reply' icon={share()} variant='unstyled' textAlign='center' justifyContent='flex-start'  display='flex' />
            <Text> No. </Text>
          </HStack>
        </Grid>
      </Box>
    </HStack>
  )
}

export default Tweet