import { useEffect, useState } from 'react';
import {
  Box,
  HStack,
  useMediaQuery,
  Image,
  Center,
  Heading,
  Text,
  VStack,
  chakra,
} from '@chakra-ui/react';
import { useQuery } from 'react-query';

import { getMenu } from '../services/menu';
import CustomSpinner from '../components/CustomSpinner';
import NavBar from '../components/Navbar';
import HamburgerMenu from '../components/HamburgerMenu';

const Home = () => {
  const { isLoading, error, data } = useQuery('getMenu', getMenu);
  const [isLargerThan840] = useMediaQuery('(min-width: 840px)');
  const [navbarItems, setNavbarItems] = useState<string[]>([]);

  useEffect(() => {
    if (!data) return;
    let navbarItemsToAdd = [...data.results];
    if (isLargerThan840) {
      navbarItemsToAdd.length = navbarItemsToAdd.length - 2;
    }
    setNavbarItems(navbarItemsToAdd);
  }, [isLargerThan840, data]);

  if (isLoading) return <CustomSpinner />;

  if (error) return <Text color='white'>FATAL ERROR</Text>;

  return (
    <Box
      minH='100vh'
      minW='100vw'
      bg='url(./assets/tikal.png)'
      bgRepeat='no-repeat'
      bgAttachment='fixed'
      bgPosition='center'
    >
      <Box minW='100vw' minH='100vh' bg='linear-gradient(#00ADEED9, #1E50A0D9)'>
        {isLargerThan840 ? (
          <NavBar items={navbarItems} />
        ) : (
          <HStack w='100%' padding='5'>
            <HamburgerMenu items={navbarItems} />
            <Center w='100%'>
              <Image
                justifySelf='center'
                src='/assets/logo.png'
                alt='Company Logo'
                maxW='80px'
              />
            </Center>
          </HStack>
        )}
        <Center padding='58px'>
          <VStack>
            <Heading
              color='#FFF300'
              fontSize={isLargerThan840 ? '72px' : '32px'}
              w={isLargerThan840 ? '804px' : '315px'}
              textAlign='center'
              fontWeight='900'
            >
              ¡GUATEMALA ESTÁ MÁS CERCA DE TI!
            </Heading>
            <Text
              padding={isLargerThan840 ? '77px' : '51px'}
              w={isLargerThan840 ? '797px' : '315px'}
              textAlign='center'
              color='white'
              fontSize={isLargerThan840 ? '1rem' : '14px'}
              letterSpacing='1px'
              textShadow='-1px 1px 2px rgba(0, 0, 0, 0.3)'
            >
              Ahora con <strong>Nuestro Diario App</strong> puedes estar
              enterado te todo lo que está pasando en Guatemala y Estados
              Unidos.
              <br />
              <br />
              Es el App pensado para los chapines que están en Estados Unidos y
              quieren sentirse <strong>más cerca de Guatemala</strong>.
            </Text>
            <Text
              color='white'
              padding={isLargerThan840 ? '77px' : '35px'}
              w={isLargerThan840 ? '797px' : '315px'}
              textAlign='center'
              fontSize={isLargerThan840 ? '24px' : '14px'}
              textShadow='-1px 1px 2px rgba(0, 0, 0, 0.3)'
              letterSpacing='1px'
            >
              Te damos <chakra.span color='#FFF300'>15 días gratis</chakra.span>{' '}
              para que lo pruebes <br />
              <strong>¡Sólo debes descargar el app!</strong>
            </Text>
          </VStack>
        </Center>
      </Box>
    </Box>
  );
};

export default Home;
