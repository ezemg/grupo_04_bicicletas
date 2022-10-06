const multer = require('multer');

let storage = multer.diskStorage({

    destination: function (req, file, cb) {
        cb(null, "public/images/productos");
    },

    filename: function (req, file, cb) {
        cb(null, Date.now() + "" + file.originalname)
    }
});

const upload = multer({ storage })

module.exports = upload