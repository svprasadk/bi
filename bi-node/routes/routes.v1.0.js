let express = require('express');
let multiparty = require('connect-multiparty');
let multipartymiddleware = multiparty();

let router = express.Router();


let UserRouter = require('../api/v1.0/users/route');

let ConstantsRouter = require('../api/v1.0/constants/route');

let ProjectsRouter = require('../api/v1.0/projects/route');

let CategoryRouter = require('../api/v1.0/category/route')

let PackagesRouter = require('../api/v1.0/packages/route');

let InvitationsRouter = require('../api/v1.0/invitations/route');

let NotificationsRouter = require('../api/v1.0/notifications/route');


router.use('/users', UserRouter);

router.use('/constants', ConstantsRouter);

router.use('/projects', ProjectsRouter);

router.use('/packages', PackagesRouter);

router.use('/category', CategoryRouter);

router.use('/invite', InvitationsRouter);

router.use('/notifications', NotificationsRouter);

router.post('/users/uploader', multipartymiddleware, function (req, res) {
    var fs = require('fs');

    fs.readFile(req.files.upload.path, function (err, data) {
        var timeStamp = new Date() - 0;
        var newPath = 'client/images/editorImages/' + timeStamp + "" + req.files.upload.name;
        fs.writeFile(newPath, data, function (err) {
            if (err) {
                res.send(err)
            }
            else {
                html = "";
                html += "<script type='text/javascript'>";
                html += "    var funcNum = " + req.query.CKEditorFuncNum + ";";
                html += "    var url     = \"/images/editorImages/" + timeStamp + "" + req.files.upload.name + "\";";
                html += "    var message = \"Uploaded file successfully\";";
                html += "";
                html += "    window.parent.CKEDITOR.tools.callFunction(funcNum, url, message);";
                html += "</script>";
                res.send(html);
            }
        });
    });
});


module.exports = router;