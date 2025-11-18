const fs = require("fs");
const path = require("path");
const PDFDocument = require("pdfkit");

const outputPath = path.join(__dirname, "..", "public", "assets", "thomas-lopez-cv.pdf");

const doc = new PDFDocument({ margin: 50 });
doc.pipe(fs.createWriteStream(outputPath));

doc.fontSize(26).fillColor("#101428").text("Thomas Lopez");
doc.moveDown(0.2);
doc.fontSize(14).fillColor("#1d243b").text("Développeur Full Stack | Montlhéry, Essonne");

doc.moveDown();
doc.fontSize(12).fillColor("#101428").text("Contact", { underline: true });
doc.moveDown(0.2);
doc.fontSize(10).fillColor("#1d243b").text("Email : lopez.thomas91310@gmail.com");
doc.text("Téléphone : +33 6 34 43 08 03");
doc.text("LinkedIn : linkedin.com/in/thomas-lopez-dev");

doc.moveDown();
doc.fontSize(12).fillColor("#101428").text("Compétences", { underline: true });
doc.fontSize(10).fillColor("#1d243b").list([
  "Front-end : React.js, Next.js, Vue.js, Angular, Astro, HTML/CSS, TypeScript",
  "Back-end : Node.js, Laravel PHP, SpringBoot Java",
  "Databases : MongoDB",
  "Ops : Docker, Kubernetes, GitLab CI, GitHub, GitLab",
  "Langues : Français, Anglais, Espagnol (notions)"
]);

doc.moveDown();
doc.fontSize(12).fillColor("#101428").text("Expériences professionnelles", { underline: true });

doc.moveDown(0.2);
doc.fontSize(11).fillColor("#101428").text("Bouygues Telecom — 2024");
doc.fontSize(10).fillColor("#1d243b").list([
  "Refonte Next.js 14 de la médiathèque et documentation du design system.",
  "Scripts de migration Node.js, pipeline assets et déploiements Kubernetes."
]);

doc.moveDown(0.2);
doc.fontSize(11).fillColor("#101428").text("Fixspec — 2023-2024");
doc.fontSize(10).fillColor("#1d243b").list([
  "Application web Vue.js pour consolider les données financières.",
  "Intégrations back Laravel, automatisations d'import/export et analytics."
]);

doc.moveDown(0.2);
doc.fontSize(11).fillColor("#101428").text("Astrelya — 2023");
doc.fontSize(10).fillColor("#1d243b").list([
  "Plateforme Angular de gestion candidats : stats, filtres, graphes.",
  "Contribution SpringBoot pour sécuriser les APIs et les recherches."
]);

doc.moveDown(0.2);
doc.fontSize(11).fillColor("#101428").text("Riots — 2021-2022");
doc.fontSize(10).fillColor("#1d243b").list([
  "Création de story.to.design avec Astro, React et Node.js.",
  "Leaderboard Vue.js alimenté par Fathom Analytics."
]);

doc.moveDown();
doc.fontSize(12).fillColor("#101428").text("Formation", { underline: true });
doc.fontSize(10).fillColor("#1d243b").list([
  "Expert en technologies de l'information — EPITECH (2019-2024)",
  "Prépa ingénieur — EFREI (2017-2019)",
  "Bac Scientifique option ISN — Lycée Edmond Michelet (2014-2017)"
]);

doc.moveDown();
doc.fontSize(12).fillColor("#101428").text("Centres d'intérêt", { underline: true });
doc.fontSize(10).fillColor("#1d243b").text("Passionné de moto GSX-R 750 K6 et de mechanical design.");

doc.end();

console.log("CV PDF généré :", outputPath);
