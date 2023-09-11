import React from 'react'
import styles from './Home.module.scss'
import { Topbar } from '../common/Topbar'
import { UploadFiles } from '../UploadFiles'
import ShowFiles from '../ShowFiles'
export const HomeComponent = () => {

  return (
    <div>
        <Topbar/>
        <UploadFiles parentId="" ownerEmail=''/>
        <ShowFiles parentId="" ownerEmail=''/>
    </div>
  )
}
