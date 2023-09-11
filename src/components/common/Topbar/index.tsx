import React from 'react'
import { useFetchSession } from '@/Hooks/useSession'
import { signIn, signOut } from "next-auth/react"
import { Button } from "@/components/common/Button/Button"
import styles from './Topbar.module.scss'

export const Topbar = () => {
  const {session}=  useFetchSession();
  // console.log(session?.user);
  
  return (
    <div className={styles.authBtn}>
        {
            session ?(
              <img onClick={()=>signOut()}
              className={styles.profileImg} 
              src={session?.user.image as string} />
            ):
            <Button onClick={() => signIn()} 
            btnClass='btn-primary' 
            title='Sign up'/>
            
          }
    </div>
  )
}
