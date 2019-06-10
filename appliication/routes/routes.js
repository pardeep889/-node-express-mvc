module.exports = {
    routes: function(app){
        app.get('/', (req,res) => {
            res.send("I am home");
        })
    }
}