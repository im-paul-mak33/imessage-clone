import Auth from '@/components/Auth/Auth';
import Chat from '@/components/Chat/Chat';
// import Dashboard from '@/components/Dashboard/Dashboard';

import { Box } from '@chakra-ui/react';
import type { NextPage, NextPageContext } from 'next';
import { getSession, useSession } from 'next-auth/react';
import { Session } from 'next-auth';

const Home: NextPage = () => {
  const { data: session } = useSession();

  console.log('Here is the data that is being sent to the server: ', session);

  const reloadSession = () => {};

  return (
    <>
      {/* {(session?.user?.name = "Paul") ? <Dashboard /> : <Auth />} */}
      <Box>
        {session?.user?.username ? (
          <Chat />
        ) : (
          <Auth session={session} reloadSession={reloadSession} />
        )}
      </Box>
    </>
  );
};

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}

export default Home;
