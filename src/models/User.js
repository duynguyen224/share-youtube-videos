const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    imageUrl: String,
    googleId: String
})

module.exports = mongoose.model("User", userSchema);


// {
//     "googleId":"104610995260190081231",
//     "imageUrl":"https://lh3.googleusercontent.com/a-/AFdZucp2Bq-AEmOyb739CTPMPuTCStj6Tg2rzMKR5bbf=s96-c",
//     "email":"nguyenducduy224.aris@gmail.com",
//     "name":"Nguyen Duc Duy",
//     "givenName":"Nguyen Duc Duy"
// }