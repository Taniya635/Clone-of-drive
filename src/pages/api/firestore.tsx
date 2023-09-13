import type { NextApiRequest,NextApiResponse } from 'next'

const firestore=(req:NextApiRequest,res:NextApiResponse)=>{ 
    res.status(200).json({text:"Hello"})
    console.log(req);
    
    
    
}
export default firestore