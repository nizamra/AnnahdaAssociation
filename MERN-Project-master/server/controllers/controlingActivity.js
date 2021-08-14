const { Activity } = require('../models/modelActivities');

module.exports.createActivity = (request, response) => {
    const url = request.protocol + "://" + request.get("host");
    const { title, post } = request.body;
    Activity.create({
        title,
        post,
        pic: url + "/images/" + request.file.originalname,
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
