import React from 'react'
import { useFetchSession } from '@/Hooks/useSession'
import { signIn, signOut } from "next-auth/react"
import { Button } from "@/components/common/Button/Button"
import styles from './Topbar.module.scss'
import Image from 'next/image'

export const Topbar = () => {
  const {session}=  useFetchSession();
  // console.log(session?.user);
  
  return (
    <div className={styles.authBtn}>
        {session ? (
        <Image
        onClick={async () => {
          await signOut(); // Wait for the sign-out to complete
          // Additional code you want to run after sign-out
        }}
        className={styles.profileImg}
        src={session?.user.image! as string}
        alt='empty'
      />
      ) : (
        <Button
  onClick={async () => {
    await signIn(); // Wait for the sign-in to complete
    // Additional code you want to run after sign-in
  }}
  btnClass="btn-primary"
  title="Sign Up!"
/>
      )}
    </div>
  )
}
