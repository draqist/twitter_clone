import { Avatar, Box, Button, Flex, Grid, HStack, IconButton, Input, Text, Textarea } from '@chakra-ui/react'
import {AiOutlinePicture} from 'react-icons/ai'
import React, { useEffect,useState } from 'react'
import gif from './icons/gif'
import dash from './icons/dash'
import emoji from './icons/emoji'
import schedule from './icons/schedule'

const TweetInput = () => {
  const [tweet, setTweet] = useState('')
  const [toggle, setToggle] = useState<boolean>(true)
  useEffect(() => {
    if (tweet.length !== 0) {
      setToggle(false)
    } else {
      setToggle(true)
    }
  }, [tweet])
  function handleTweetInput(e:any) {
    e.preventDefault()
    setTweet(e.currentTarget.value)
  }
  return (
    <HStack spacing='12px' color='white' fontSize='1rem' borderBottom='1px solid #2F3336' px='1rem' py='12px' alignItems='flex-start'>
      <Avatar src='https://bit.ly/dan-abramov' />
      <Box w='100%'>
        <Box>
          <Textarea variant='flushed' borderColor='transparent' placeholder='What&apos;s happening?' pb='20px' value={tweet} onChange={handleTweetInput} />
        </Box>
        <Flex justifyContent='space-between' alignItems='center' mt='20px'>
          <HStack spacing='8px' fontSize='20px'>
            <IconButton colorScheme='twitter' aria-label='Reply' icon={<AiOutlinePicture color='#1DA1F2' fontSize='20px' />} variant='unstyled' textAlign='center' justifyContent='flex-start' display='flex' size='xs'/>
            <IconButton colorScheme='twitter' aria-label='Reply' icon={gif()} variant='unstyled' textAlign='center' justifyContent='flex-start' display='flex' size='xs' />
            <IconButton colorScheme='twitter' aria-label='Reply' icon={dash()} variant='unstyled' textAlign='center' justifyContent='flex-start'  display='flex' size='xs' />
            <IconButton colorScheme='twitter' aria-label='Reply' variant='unstyled' textAlign='center' justifyContent='flex-start'  display='flex' size='xs' icon={emoji()} />
            <IconButton colorScheme='twitter' aria-label='Reply' variant='unstyled' textAlign='center' justifyContent='flex-start'  display='flex' size='xs' icon={schedule()} />
          </HStack>
          <Button isDisabled={toggle} colorScheme='twitter' borderRadius='2.25rem' w='80px' > Tweet </Button>
        </Flex>
      </Box>
    </HStack>
  )
}

export default TweetInput