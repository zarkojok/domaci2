"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var hbs_1 = __importDefault(require("hbs"));
var path_1 = __importDefault(require("path"));
var App = /** @class */ (function () {
    function App() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    App.prototype.config = function () {
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: false }));
        this.app.use('/', express_1.default.static('views/images'));
        this.app.use('/', express_1.default.static('node_modules/bootstrap/dist'));
        hbs_1.default.registerPartials(path_1.default.join(__dirname, '../views/partials'));
        this.app.set('view engine', 'hbs');
        this.app.set('views', path_1.default.join(__dirname, '../views'));
    };
    App.prototype.routes = function () {
        var router = express_1.default.Router();
        router.get('/', function (req, res) {
            res.render('home', {
                ime: 'Zarko Jokmanovic',
                slika: '461234646-Toni-Servillo-La-grande-bellezza.jpg'
            });
        });
        router.get('/places', function (req, res) {
            res.render('places', {
                slika1: '1200px-Space_Needle002.jpg',
                slika2: 'orlando-florida-lake-eola-travel-guide-ftr.jpg',
                slika3: 'beautiful-day-birds-eye-view-of-buffalo-ny-and-surrounding-areas-michael-frank-jr.jpg'
            });
        });
        router.get('/films', function (req, res) {
            res.render('films', {
                filmovi: [
                    { name: '2046', link: 'https://www.imdb.com/title/tt0212712/?ref_=fn_al_tt_1' },
                    { name: 'La grande bellezza', link: 'https://www.imdb.com/title/tt2358891/?ref_=nv_sr_1' },
                    { name: 'Blade Runner', link: 'https://www.imdb.com/title/tt0083658/?ref_=nv_sr_2' },
                    { name: 'Guardians of the Galaxy Vol. 2', link: 'https://www.imdb.com/title/tt3896198/?ref_=nv_sr_2' }
                ]
            });
        });
        this.app.use('/', router);
    };
    return App;
}());
exports.default = new App().app;
