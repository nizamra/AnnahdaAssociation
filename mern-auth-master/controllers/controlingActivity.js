const { Activity } = require('../models/modelActivities');
const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, '../client/public/pictures');
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname)
    }
})

const upload2 = multer({ storage: storage });
exports.upload2 = upload2;

module.exports.createActivity = (request, response) => {
    const pic = request.file.originalname;
    const { title, post } = request.body;
    Activity.create({
        title,
        post,
        pic
    })
        .then(activity => response.json(activity))
        .catch(err => {
            console.log(err);
            response.status(400).json(err);
        });
}

module.exports.getAllActivitys = (request, response) => {
    Activity.find({})
        .then(products => response.json(products))
        .catch(err => response.json(err))
}

module.exports.getActivity = (request, response) => {
    Activity.findOne({ _id: request.params.id })
        .then(activity => response.json(activity))
        .catch(err => response.json(err))
}

module.exports.updateActivity = (request, response) => {
    Activity.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true })
        .then(updatedActivity => response.json(updatedActivity))
        .catch(err => response.json(err))
}

module.exports.deleteActivity = (request, response) => {
    Activity.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}
