const mongoose = require('mongoose')


const dbString = 'mongodb+srv://shruti31:CeWgxQyfgmkYQKWZ@cluster0.gi7dc.mongodb.net/myEducationPlatform?retryWrites=true&w=majority&appName=Cluster0'

mongoose.connect(dbString).then(() => {
    console.log('connection successfull')
}).catch((err) => {
    console.log(err)
})


const courseSchema = new mongoose.Schema({
    name: String,
    creator: String,
    ratings:Number,
    isPublished: Boolean,
    releaseDate: {type:Date, default: Date.now()}
})

let CourseModel = mongoose.model('course', courseSchema);

async function createCourse() {
    let newCourse = new CourseModel({
        name: 'Data Trek',
        creator: 'Abhishek',
        ratings: 5,
        isPublished: true
    })
    await newCourse.save();
}

const userSchema = new mongoose.Schema({
    name:String,
    age: Number,
    course: String
})

let UserModel = mongoose.model('user', userSchema);

async function createUser() {
    let newUser = new UserModel({
        name: 'Shruti',
        age: 26,
        course: 'Data Trek'
    })
    await newUser.save();
}


createUser()

