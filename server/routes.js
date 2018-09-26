var controller = require('./controller')
var path = require('path')

module.exports = function(app) {
    app.get("/items", function(req,res) {
        controller.allBoxes(req, res);
    });

    app.post("/items", function(req,res) {
        controller.createBox(req,res);
    });

    app.get("/items/:id", function(req,res) {
        controller.showBox(req,res);
    });

    app.put("/items/:id", function(req,res) {
        controller.updateBox(req,res);
    });

    app.delete("/items/:id", function(req,res) {
        controller.destroyBox(req,res);
    });

    app.post("/items/:id/subitem", function(req,res) {
        controller.createMessage(req,res);
    });

    app.delete("/items/:id/subitem/:sid", function(req,res) {
        controller.deleteMessage(req,res);
    });

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve(__dirname+"../../public/dist/public/index.html"));
    });
}