import { useState, useEffect } from 'react';
import { Lobby } from "../components/Lobby"
import { Game } from "../components/Game"
import { useParams } from 'react-router-dom';
import { doc, where, collection, query, onSnapshot } from 'firebase/firestore';
import { useDocumentDataOnce, useCollectionDataOnce } from 'react-firebase-hooks/firestore';
import { useAuthState, useSignInWithFacebook } from 'react-firebase-hooks/auth';
import { db, auth } from '../config/firebase'
import {signInAnonymously } from "firebase/auth";

export function Room() {
  const param = useParams();
  const [user, initialising] = useAuthState(auth);
  const [userData] = useCollectionDataOnce(query(collection(db, "users"),where('uuid', '==', String(user?.uid))));
  const [roomData, setRoomData] = useState<any>([]);   // メッセージと予測番号

  
  useEffect(() =>{
    if(param.id){
      const unsub = onSnapshot(query(collection(db, "rooms"), where("uid", "==", String(param.id))), (querySnapshot) => {
        setRoomData(querySnapshot.docs.map((doc => ({ ...doc.data() }))));
      });
    }
  }, [])

  useEffect(() =>{
    if(!initialising && !user){
      signInAnonymously(auth);
    }
  })

  return (
    <>
      {roomData && roomData.length > 0 && roomData[0].state === "lobby" &&  <Lobby roomData={roomData} userData={userData}/> }
      {roomData && roomData.length > 0 && roomData[0].state === "game"  &&  <Game  roomData={roomData} userData={userData} roomId={param.id}/> }
    </>
  )
}
