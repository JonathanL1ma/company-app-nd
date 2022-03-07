import React from 'react';
import { Box, Flex, HStack, Image, Link } from '@chakra-ui/react';

interface NavBarProps {
  items: string[];
}

const NavBar: React.FC<NavBarProps> = ({ items }) => (
  <Box w='100%' padding='3' bgColor='transparent'>
    <Flex alignItems='center' justifyContent='space-around'>
      <HStack spacing='48px'>
        <Image src='/assets/logo.png' alt='Company Logo' />
        {items?.map((item) => (
          <Link href={`#${item}`} key={item} textColor='white'>
            {item}
          </Link>
        ))}
      </HStack>
    </Flex>
  </Box>
);

export default NavBar;
