import { Router } from 'express';
import bookControler from './controler.js'

const bookRouter = new Router();

//роути 
bookRouter.get("/init", bookControler.init);
bookRouter.get('/', bookControler.get);
bookRouter.get('/:id', bookControler.get_id);
bookRouter.post('/', bookControler.post);
bookRouter.delete('/:id', bookControler.delete_id);
bookRouter.patch('/:id', bookControler.patch);

export default bookRouter;