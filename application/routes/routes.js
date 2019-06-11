const controllers = require('../controllers/index'); // include all the controllers 


module.exports = {
    routes: function(app){
        app.get('/', (req,res,next) => {
            const welcome = new controllers.Welcome();
            welcome.index(req,res,next); // calling method with specific controller
        });

        // 404 Routes it should be at the end of all the routes.
        app.get('*', (req,res,next) => {
          res.send('No route found 404')
        });
    }
}