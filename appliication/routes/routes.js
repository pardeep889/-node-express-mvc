const controllers = require('../controllers/index');
module.exports = {
    routes: function(app){
        app.get('/', (req,res,next) => {
            const welcome = new controllers.Welcome();
            welcome.index(req,res,next);
        });
        app.get('*', (req,res,next) => {
          res.send('No route found 404')
        });
    }
}