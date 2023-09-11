interface Button {
    btnClass?:string;
    title:string;
    onClick?:()=>void
}
interface AuthInterface{
    clientId:string;
    clientSecret:string;
}
interface Progress {
    progress: number;
  }

interface ArrayType{
    map:Function
}
interface FolderStructure{
    parentId:string ;
    ownerEmail: string;

}