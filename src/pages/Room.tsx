import { Game } from "../components/Game"
import { Center, Loader, Text } from '@mantine/core';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../config/firebase'
import { UserRegistration } from '../components/UserRegistration';
import { Login } from '../components/Login';

export function Room() {
  const [user, loading, error] = useAuthState(auth);
  
  if (loading) {
    return (
      <Center h="100vh" w="100%">
        <Loader color="cyan" />
      </Center>
    );
  }
  if (error) {
    return (
      <Center h="100vh" w="100%">
        <Text>エラーが発生しました</Text>
      </Center>
    );
  }
  if (user) {
    return (
      <Game user={user}/>
    );
  }

  return <Login />;
}
