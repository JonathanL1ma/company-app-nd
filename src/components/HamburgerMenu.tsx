import React from 'react';
import { HamburgerIcon, PhoneIcon, EmailIcon } from '@chakra-ui/icons';
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  useDisclosure,
  Image,
  CloseButton,
  Link,
  VStack,
  DrawerFooter,
  HStack,
  Text,
  Icon,
} from '@chakra-ui/react';
import { FaWhatsapp } from 'react-icons/fa';

interface HamburgerMenuProps {
  items: string[];
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ items }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <IconButton
        aria-label='Options'
        icon={<HamburgerIcon color='white' />}
        variant='transparent'
        onClick={onOpen}
        size='lg'
      />
      <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg='linear-gradient(#1E50A0, #1565C0)'>
          <DrawerHeader>
            <Flex justifyContent='space-between'>
              <Image src='/assets/logo.png' alt='Company Logo' maxW='64px' />
              <CloseButton size='lg' onClick={onClose} color='white' />
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            <VStack alignItems='flex-start' spacing='28px'>
              {items?.map((item) => (
                <Link href={`#${item}`} key={item} textColor='white'>
                  {item}
                </Link>
              ))}
            </VStack>
          </DrawerBody>
          <DrawerFooter textAlign='left'>
            <VStack w='100%' alignItems='flex-start' spacing='16px'>
              <HStack>
                <PhoneIcon color='white' />
                <Text color='white'>(786) 723 - 3677</Text>
              </HStack>
              <HStack>
                <Icon as={FaWhatsapp} color='white' />
                <Text color='white'>(424) 336 - 6702</Text>
              </HStack>
              <HStack>
                <EmailIcon color='white' />
                <Text color='white'>correo@electronico.com</Text>
              </HStack>
            </VStack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default HamburgerMenu;
