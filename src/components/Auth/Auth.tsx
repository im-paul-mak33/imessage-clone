import { useState } from 'react';
import { Button, Center, Image, Input, Stack, Text } from '@chakra-ui/react';
import { Session } from 'next-auth';
import { signIn } from 'next-auth/react';

interface IAuthProps {
  session: Session | null;
  reloadSession: () => void;
}

const Auth: React.FC<IAuthProps> = (session, reloadSession) => {
  const [userName, setUserName] = useState('');

  const onSubmit = () => {
    try {
      /*
        createUserName mutation to send our UserName to the graphQL API
      */
    } catch (error) {
      console.log('onSubmit Error: ', error);
    }
  };

  return (
    <>
      <Center height="100vh" border="10px solid green">
        <Stack alignItems="center" spacing={4}>
          {session ? (
            <>
              <Text fontSize="3xl">Create Your Username 😜</Text>
              <Input
                placeholder="Enter Your Username"
                value={userName}
                onChange={(event) => setUserName(event.target.value)}
              />
              <Button width="100%" onClick={onSubmit}>
                Save
              </Button>
            </>
          ) : (
            <>
              <Text>iMessenger</Text>
              <Button
                onClick={() => signIn('google')}
                leftIcon={<Image height="20px" src="/images/googlelogo.png" />}
              >
                Sign In With Google
              </Button>
            </>
          )}
        </Stack>
      </Center>
    </>
  );
};

export default Auth;
