const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HQ8gSCWB6zAeUTthKuapmiPMY7Ev88dK03Af0ul2TGm4542wcDAlY5CAggzBzVzZ4vZZufg1X8qk9JJsjYzRda200uV7H4o1F"
);

//API

//App config

const app = express();

//middleware
app.use(cors({ origin: true }));
app.use(express.json());

//API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("payment received boom", total);

  const paymentIntend = await stripe.paymentIntends.create({
    amount: total,
    currency: "usd",
  });
  response.status(201).send({
    clientSecret: paymentIntend.client_secret,
  });
});

//Listen command

exports.api = functions.https.onRequest(app);

// http://localhost:5001/fir-aa8ca/us-central1/api
