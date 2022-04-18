const functions = require("firebase-functions");

exports.someOnCallFunction = functions.https.onCall(async (data, context) => {
    console.log(`data :: ${JSON.stringify(data)}`);
    if (context.auth === undefined) {
        console.log(`User is not authenticated!!`);
        return "Unauthenticated"
    } else {
        if (context.auth.token.role === "USER") {
            console.log("User role");
            return "USER"
        } else if (context.auth.token.role === "ADMIN") {
            console.log("Admin role");
            return "ADMIN"
        }
    }
});
