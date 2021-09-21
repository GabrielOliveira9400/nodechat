import {Request,Response, Router} from 'express';
const router = Router();

router.get('/', (req:Request, res:Response)=>{
    let user = {
        name: 'Gabriel',
        age: 20
    }
    let showOld:boolean = false;
    if(user.age>20){
        showOld = true;
    }
    res.render('pages/home',{
        user,
        showOld,
        products: [
            {
                title: 'Produto X',
                price: '10',
            },
            {
                title: 'Produto Y',
                price: '20',

            },
            {
                title: 'Produto W',
                price: '50',
            }
        ],
        frasedodia: [
            'So sei que nada sei',
            'Você pediu uma chance, ai está ela',
            'Prove que você é capaz'
        ]
    });
});
router.get('/contat', (req:Request, res:Response)=>{
    res.render('pages/contat');
});
router.get('/sobre', (req:Request, res:Response)=>{
    res.render('pages/sobre');
});

export default router;