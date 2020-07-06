import {Request, Response} from 'express'
import router from '../routes/index_routes'

 export function indexWelcome(req:Request, res:Response){
 return res.json('welcome to my api')
};
export default router;