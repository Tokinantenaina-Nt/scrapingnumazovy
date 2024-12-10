const router = require("express").Router();
const scrapePhoneNumber = require("./scrape");
const chromium = require("@sparticuz/chromium");

router.get("/", (req, res) => res.send("hello EvOne1"));

router.get("/:phoneNumber", async (req, res) => {
  const { phoneNumber } = req.params;

  if (!phoneNumber) {
    return res.status(400).json({ error: "Numéro de téléphone requis" });
  }

  const result = await scrapePhoneNumber(phoneNumber);
  res.json(result);
});
module.exports = router;
