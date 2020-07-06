import {Router} from 'express'

import {getPosts} from '../controllers/post.controllers'

const router = Router();
router.route('/')
.get(getPosts);


export default router;