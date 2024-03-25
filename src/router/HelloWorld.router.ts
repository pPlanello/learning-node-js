import { Router } from 'express';

import { getHelloWorld } from '../controller/HelloWorld.controller';

const router = Router();

router.get('/', getHelloWorld);

export default router;
