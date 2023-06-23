import { Heading, Text } from '@chakra-ui/react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <Heading>Oops</Heading>
      <Text>
        {isRouteErrorResponse(error)
          ? 'This page does not exist'
          : 'An unexcepted error occurred'}
      </Text>
    </>
  );
};

export default ErrorPage;
