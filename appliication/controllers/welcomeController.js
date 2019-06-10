class Welcome {
    constructor(){
        console.log('Welcome Constructor Called');
    }
    index(req,res,next){
        res.send(`Welcome Text`);
    }
}

module.exports = Welcome;