import { sign } from 'crypto';
import type { NextPage } from 'next';
import { signIn, signOut, useSession } from 'next-auth/react';

const Home: NextPage = () => {
  const { data } = useSession();

  console.log('Here is the data that is being sent to the server: ', data);

  return (
    <>
      {data?.user ? (
        <button onClick={() => signOut()}>Sign Out</button>
      ) : (
        <button onClick={() => signIn('google')}>Sign In</button>
      )}

      {data ? <p>Signed in as {data.user?.name}</p> : <p>Not signed in</p>}
    </>
  );
};

export default Home;
