import React from 'react'
import { useRouter } from 'next/router'
import { UploadFiles } from '@/components/UploadFiles'
import ShowFiles from '@/components/ShowFiles'
import { Topbar } from '@/components/common/Topbar'
import { useFetchSession } from '@/Hooks/useSession'

 const Folder = () => {
  const router=useRouter()
  let parentId=router?.query?.id;
  let ownerEmail = router?.query?.owner;
  let session=useFetchSession()
  console.log(router?.query?.id);
  
  return (
    <div>
      <Topbar/>
      {session? <>
        <UploadFiles parentId={parentId as string} ownerEmail={ownerEmail as string}/>
      <ShowFiles parentId={parentId as string} ownerEmail={ownerEmail as string}/>
      </>:<></>
       
}
    </div>
  )
}
export default Folder
