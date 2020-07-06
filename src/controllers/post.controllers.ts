import {Request, Response} from 'express'
import {conect} from '../database'

export async  function getPosts(req:Request, res:Response): Promise<Response>{
 const con = await conect();
 const posts = await con.query('SELECT *FROM posts');
  return res.json(posts);
}