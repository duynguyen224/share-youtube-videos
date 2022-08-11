const User = require("../models/User");

async function addUser(userInfo) {
    try {
        const user = new User({
            name: "Test user",
            email: "Test email",
            imageUrl: "Test image",
            googleId: "Test google id",
        });

        await user.save();

        console.log(user)
    } catch (error) {
        console.log(error.message);
    }
}
