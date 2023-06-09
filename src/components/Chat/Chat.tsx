import { Button } from '@chakra-ui/react';
import { signOut } from 'next-auth/react';

interface IChatProps {}

const Chat: React.FC<IChatProps> = (props) => {
  return (
    <>
      <p>This is the chat room</p>
      <Button onClick={() => signOut()}>
        <span>Logout From Here</span>
      </Button>
    </>
  );
};

export default Chat;
