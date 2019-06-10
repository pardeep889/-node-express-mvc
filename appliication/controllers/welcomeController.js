class WelcomeController {
    constructor(){
        console.log('WelcomeController Constructor Called');
    }
    index(req,res,next){
        res.send(`WelcomeController Text`);
    }
}

module.exports = WelcomeController;