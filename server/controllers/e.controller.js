const {  E  } = require('../models/e.models');

module.exports = {
getAll: (req, res) => {
    E.find({})
        .then((ev) => res.json(ev))
        .catch((err) => res.status(400).json(err))
},
createe: (req, res) => {
    E.create(req.body)
        .then((ev) => res.json(ev))
        .catch((err) => res.status(400).json(err))
},
getOne: (req, res) => {
    E.findOne({ _id: req.params.id })
        .then((ev) => res.json(ev))
        .catch((err) => res.status(400).json(err))
},
updatee: (req, res) => {
    E.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        runValidators: true,
    })
        .then((ev) => res.json(ev))
        .catch((err) => res.status(400).json(err))
},
deletee: (req, res) => {
    E.deleteOne({ _id: req.params.id})
        .then((ev) => res.json(ev))
        .catch((err) => res.status(400).json(err))
}
}