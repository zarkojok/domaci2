import express from "express";
import {Request, Response} from "express";
import bodyParser from "body-parser";
import hbs from "hbs";
import path from "path";

class App {
    public app : express.Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }
    public config() : void{
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: false}));

        this.app.use('/', express.static('views/images'));
        this.app.use('/', express.static('node_modules/bootstrap/dist'));

        hbs.registerPartials(path.join(__dirname, '../views/partials'));

        this.app.set('view engine', 'hbs');
        this.app.set('views', path.join(__dirname, '../views'));
    }

    public routes() : void{
        const router = express.Router();

        router.get('/', (req:Request, res:Response) => {
            res.render('home', {
                ime: 'Zarko Jokmanovic',
                slika: '461234646-Toni-Servillo-La-grande-bellezza.jpg'
            });
        }); 

        router.get('/places', (req:Request, res:Response) => {
            res.render('places', {
                slika1: '1200px-Space_Needle002.jpg',
                slika2: 'orlando-florida-lake-eola-travel-guide-ftr.jpg',
                slika3: 'beautiful-day-birds-eye-view-of-buffalo-ny-and-surrounding-areas-michael-frank-jr.jpg'
            });
        }); 

        router.get('/films', (req:Request, res:Response) => {
            res.render('films', {
                filmovi: [
                    {name: '2046', link: 'https://www.imdb.com/title/tt0212712/?ref_=fn_al_tt_1'},
                    {name: 'La grande bellezza', link: 'https://www.imdb.com/title/tt2358891/?ref_=nv_sr_1'},
                    {name: 'Blade Runner', link: 'https://www.imdb.com/title/tt0083658/?ref_=nv_sr_2'},
                    {name: 'Guardians of the Galaxy Vol. 2', link: 'https://www.imdb.com/title/tt3896198/?ref_=nv_sr_2'}
                ]
            });
        }); 


        this.app.use('/', router);
    }
}

export default new App().app;
