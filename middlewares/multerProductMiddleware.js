const path = require('path')

const multer = require('multer');

file = null

let storage = multer.diskStorage({

    destination: function (req, file, cb) {
        cb(null, "public/images/productos");
    },

    filename: function (req, file, cb) {
        cb(null, Date.now() + "" + file.originalname)
    }
});

const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        const fileData = file;
        const validExt = ['.jpg', '.png', '.jpeg'];
        if (fileData) {
            const fileExt = path.extname(fileData.originalname);
            if (!validExt.includes(fileExt)) {
                cb(null, false);
            } else {
                cb(null, true);
            }
        }
    },
});

module.exports = upload



