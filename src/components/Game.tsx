import { useState, useEffect } from 'react';
import { LobbyScene } from "./LobbyScene"
import { GameScene } from "./GameScene"
import { EnterName } from "../components/EnterName"
import { UserRegistration } from "../components/UserRegistration"
import { useParams } from 'react-router-dom';
import { doc, where, collection, query, onSnapshot } from 'firebase/firestore';
import { useDocumentDataOnce, useCollectionDataOnce } from 'react-firebase-hooks/firestore';
import { useAuthState, useSignInWithFacebook } from 'react-firebase-hooks/auth';
import { db, auth, setUser } from '../config/firebase'
import {
  Text,
  Card,
  Group,
  Loader,
  Button,
  Divider,
  Stack,
  Container,
  LoadingOverlay,
  Avatar,
  Center,
} from '@mantine/core';

export function Game({user}:any) {
  const param = useParams();
  const [userData] = useCollectionDataOnce(query(collection(db, "users"),where('uuid', '==', String(user?.uid))));
  const [roomData, setRoomData] = useState<any>([]);

  useEffect(() =>{
    if(param.id){
      const unsub = onSnapshot(query(collection(db, "rooms"), where("uid", "==", String(param.id))), (querySnapshot) => {
        setRoomData(querySnapshot.docs.map((doc => ({ ...doc.data() }))));
      });
    }
  }, [])
  
  if (!userData || (userData && userData.length === 0)) {
    return (
      <UserRegistration uuid={user?.uid} />
    );
  }

  return (
    <>
      {roomData && roomData.length > 0 && roomData[0].state === "lobby" &&  <LobbyScene roomData={roomData} userData={userData}/> }
      {roomData && roomData.length > 0  &&  <GameScene  roomData={roomData} userData={userData} roomId={param.id}/> }
    </>
  )


  // return (
  //   <Center h="100vh" w="100%">
  //     <Loader color="cyan" />
  //   </Center>
  // );
  
  
  // return (
  //   <>
  //     {roomData && roomData.length > 0 && roomData[0].state === "lobby" &&  <LobbyScene roomData={roomData} userData={userData}/> }
  //     {roomData && roomData.length > 0  &&  <GameScene  roomData={roomData} userData={userData} roomId={param.id}/> }
  //   </>
  // )
}
