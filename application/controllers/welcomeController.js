// Starting of the controller defination.

class WelcomeController {
    // constructor will be called when object of the class is created.
    constructor(){
        console.log('WelcomeController Constructor Called');
    }
    // simple method to display the content with view.
    index(req,res,next){
        res.send(`WelcomeController Text`);
    }
}

module.exports = WelcomeController;