const router = require('express').Router();

router.get('/', function(req, res, next) {
    res.sendFile(req.app.get("admin_path")+"index.html");
    console.log(req.path);
    
});

module.exports = router;