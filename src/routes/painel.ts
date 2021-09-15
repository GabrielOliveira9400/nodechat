import {Request,Response, Router} from 'express';
const router = Router();

router.get('/', (req:Request, res:Response)=>{
    res.send('Home do Painel');
});
router.get('/noticias', (req:Request, res:Response)=>{
    res.send('Lista de noticias cadastradas');
});
router.get('/noticias', (req:Request, res:Response)=>{
    res.send('Lista de noticias cadastradas');
});
export default router;