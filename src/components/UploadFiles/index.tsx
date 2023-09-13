import React, {  useState } from "react";
import type { ChangeEvent } from "react";
import styles from "./Upload.module.scss";
import { Button } from "../common/Button/Button";
import { CommonProgress } from "../common/Progress";
import { fileUpload } from "@/API/FileUpload";
import { addFolder } from "@/API/FireStore";
import { useFetchSession } from "@/Hooks/useSession";

export const UploadFiles = ({ parentId,ownerEmail }:FolderStructure) => {
  // const [file,setFile]=useState({})
  const [isFileVisible, setFileVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isFolderVisible, setFolderVisible] = useState(false);
  const [folderName, setFolderName] = useState("");
  const {session}=useFetchSession()
  // console.log(session?.user.email);
  

  const upLoadFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      await fileUpload(file, setProgress, parentId, session!.user.email as string, ownerEmail);
    }
  };
  
  console.log(parentId);
  
  const upLoadFolder = () => {
    const payload = {
      folderName: folderName,
      isFolder: true,
      fileList: [],
      parentId: parentId || "",
      userEmail:session?.user.email,
      sharedTo: ownerEmail ? [ownerEmail] : [],
    };
    addFolder(payload);
    setFolderName("");
  };
  return (
    <div className={styles.uploadMain}>
      <Button
        onClick={() => {
          setFileVisible(!isFileVisible);
          setFolderVisible(false);
        }}
        title="Add a file"
        btnClass="btn-success "
      />

      {isFileVisible ? (
        <input
        onChange={async (event) => {
          await upLoadFile(event); // Wait for the upload to complete
          // Additional code you want to run after the upload
        }}
        type="file"
        className="file-input w-full max-w-xs"
      />
      
      ) : (
        <></>
      )}

      <Button
        onClick={() => {
          setFileVisible(false);
          setFolderVisible(!isFolderVisible);
        }}
        title="Add a folder"
        btnClass=" btn-success "
      />

      {isFolderVisible ? (
        <>
          <input
            type="text"
            placeholder="Type here"
            value={folderName}
            onChange={(event) => setFolderName(event.target.value)}
            className="input input-bordered input-accent w-full max-w-xs"
          />

          <Button
            onClick={upLoadFolder}
            title="Create"
            btnClass=" btn-success "
          />
        </>
      ) : (
        <></>
      )}

      {progress === 0 || progress === 100 ? (
        <></>
      ) : (
        <CommonProgress progress={progress} />
      )}
    </div>
  );
};
