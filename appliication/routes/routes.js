const Welcome = require('../controllers/welcomeController');

module.exports = {
    routes: function(app){
        app.get('/', (req,res,next) => {
            const welcome = new Welcome();
            welcome.index(req,res,next)
        });
    }
}