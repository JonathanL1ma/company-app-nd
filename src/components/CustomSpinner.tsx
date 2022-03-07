import { Center, Flex, Spinner } from '@chakra-ui/react';

const CustomSpinner = () => {
  return (
    <Flex minW='100vw' minH='100vh' bgColor='linear-gradient(#00ADEE, #1E50A0)'>
      <Center>
        <Spinner color='white' />
      </Center>
    </Flex>
  );
};

export default CustomSpinner;
