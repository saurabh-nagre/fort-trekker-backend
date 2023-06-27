// signup user
const { OAuth2Client } = require("google-auth-library");

exports.signupUser = (req, res) => {};

// login user

exports.loginUser = (req, res) => {};

//

exports.loginWithGoogle = (req, res) => {
  const client = new OAuth2Client(process.env.CLIENT_ID);
  if (!req.body) {
    res.status(303);
    res.send("Signin failed");
  } else {
    const token = req.body.credential;
    async function verify() {
      const ticket = await client.verifyIdToken({
        idToken: token,
        audience: process.env.CLIENT_ID, // Specify the CLIENT_ID of the app that accesses the backend
        // Or, if multiple clients access the backend:
        //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
      });
      const payload = ticket.getPayload();
      const userid = payload["sub"];

      res.status(200);

      // fetch the userid from database
      // return it
      // res.send({user_id:})
    }
    verify().catch((reason)=>{
      if (process.env.NODE_ENV === "development") console.log(reason);
    });
  }
};
