const puppeteer = require("puppeteer-core");
const chromium = require("@sparticuz/chromium");
const scrapePhoneNumber = async phoneNumber => {
  return "ok";
};
/*const scrapePhoneNumber = async phoneNumber => {
  console.log("Début du scraping...");
  const browser = await puppeteer.launch({
    // executablePath: "E:\\Slimjet_fonctionnel_windows7\\slimjet.exe" //commenter ceci en mode netlify
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath(),
    headless: chromium.headless,
    ignoreHTTPSErrors: true
  });

  const page = await browser.newPage();

  try {
    console.log("Ouverture de la page...");
    await page.goto("https://azovy.vercel.app/", { waitUntil: "networkidle2" });

    // Remplir le champ numéro de téléphone
    console.log("Remplissage du champ numéro de téléphone...");
    await page.type("#phone_number", phoneNumber);

    // Trouver et cliquer sur le bouton
    console.log("Recherche du bouton 'Search for owner'...");
    await page.waitForSelector("button");
    await page.evaluate(() => {
      const buttons = Array.from(document.querySelectorAll("button"));
      const targetButton = buttons.find(
        button => button.textContent.trim() === "Search for owner"
      );
      if (targetButton) targetButton.click();
    });

    // Attendre que le résultat s'affiche
    console.log("Attente du résultat...");
    await page.waitForSelector(".text-md.font-medium.leading-none");

    // Extraire le résultat
    const result = await page.evaluate(() => {
      const targetElement = document.querySelector(
        ".text-md.font-medium.leading-none"
      );
      return targetElement ? targetElement.innerText : "Aucun résultat trouvé";
    });

    console.log("Résultat extrait :", result);
    return { success: true, result };
  } catch (error) {
    console.error("Erreur de scraping :", error.message);
    return { success: false, error: error.message };
  } finally {
    console.log("Fermeture du navigateur...");
    await browser.close();
  }
};*/

module.exports = scrapePhoneNumber;
