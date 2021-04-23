import express from "express";
import Mailchimp from "mailchimp-api-v3";

console.log(JSON.stringify(process.env, null, 2));

const mailChimpApiKey = process.env.MAILCHIMP_API_KEY;
const mailChimpAudienceId = process.env.MAILCHIMP_AUDIENCE_ID;
const mailchimp = new Mailchimp(mailChimpApiKey);

const app = express();
app.use(express.json());

app.post("/subscribe", async (req, res) => {
  const { email: email_address } = req.body;
  try {
    const response = await mailchimp.request({
      method: "post",
      path: `/lists/${mailChimpAudienceId}/members`,
      body: {
        email_address,
        status: "subscribed"
      }
    });
    console.log(`Response: ${response}`);
    const { _links, ...result } = response;
    console.log(`Status: ${result.statusCode}; Result: ${result}`);
    res.status(result.statusCode).json(result);
  } catch (err) {
    console.error(`Status: ${err.status}; Message: ${err.detail}; Stack: ${err}`);
    res.status(err.status).send({message: err.detail});
  }
});

export default {
  path: "/api",
  handler: app
};
