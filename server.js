const express = require("express");
const scrapePhoneNumber = require("./scrape");

const app = express();
const PORT = 3000;

// Route principale
app.get("/scrape/:phoneNumber", async (req, res) => {
  const { phoneNumber } = req.params;

  if (!phoneNumber) {
    return res.status(400).json({ error: "Numéro de téléphone requis" });
  }

  const result = await scrapePhoneNumber(phoneNumber);
  res.json(result);
});

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur en écoute sur http://localhost:${PORT}`);
});
