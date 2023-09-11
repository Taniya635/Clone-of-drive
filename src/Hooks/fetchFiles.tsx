import { database } from "@/firebaseConfig"
import { collection, onSnapshot , query,where} from "firebase/firestore"
import { useEffect, useState } from "react"
import { useFetchSession } from '@/Hooks/useSession'


let files=collection(database,"files")

export const fetchFiles=(parentId:string, userEmail:string)=>{
    console.log(parentId);
    // let {session} =useFetchSession()
    
    const [fileList, setFileList]=useState<ArrayType>([])

    
    const getFolders=()=>{
        if(userEmail){
            // let emailQuery=query(files,where('userEmail','==' , userEmail))
        if(!parentId ){
            onSnapshot(files,(response)=>{
                setFileList(
                    response.docs.map((item)=>{
                        return {...item.data(), id:item.id}
                    }).filter((item:any)=> item.parentId==="")
                )    
            })
        }else{
            onSnapshot(files,(response)=>{
                setFileList(
                    response.docs.map((item)=>{
                        return {...item.data(), id:item.id}
                    }).filter((item:any)=> item.parentId===parentId)
                )    
            })
        }
        }

        
        
    }

    useEffect(()=>{
        getFolders()
    },[parentId,userEmail])
 
    return {fileList}
}