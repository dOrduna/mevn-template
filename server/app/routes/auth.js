const { verifySignUp } = require("../middleware");
const controller = require("../controllers/auth");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        // res.header(
        //     "Access-Control-Allow-Origin",
        //     "http://localhost:8081"
        // );
        next();
    });

    app.post(
        "/api/auth/signup",
        [
            verifySignUp.checkDuplicateUsernameOrEmail,
            verifySignUp.checkRolesExisted
        ],
        controller.signup
    );

    app.post("/api/auth/signin", controller.signIn);

    app.post("/api/auth/refreshtoken", controller.refreshToken);
};
