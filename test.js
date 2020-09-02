const mongoose = require("mongoose")

const connect = () => {
    return mongoose.connect('mongodb://localhost:27017/whatever', { useNewUrlParser: true, useUnifiedTopology: true })
}

const student = new mongoose.Schema({
    firstName: String,
    lastName: {
        type: String,
        required: true
    },
    grade: {
        type: Number
    },
    courseList: [{type: String}]
})

const Student = mongoose.model('student', student)

connect()
    .then(async connection => {
        const student = await Student.create({firstName: "Bruce", lastName: "Wayne"})
        const found = Student.find({firstName: "Bruce"})
        console.log(found)
    })
    .catch(e => console.error(e))