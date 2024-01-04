const express = require("express");
const app = express();

const infos = {
	formations: [
		{
			name: "Licence Informatique",
			dates: "2021-2024",
			description:
				"L1 Mathématiques-Informatique puis L2-L3 Informatique",
		},
		{
			name: "Baccalauréat Général",
			dates: "2021",
			description:
				"Spécialités Mathématiques / Numérique et Sciences Informatiques - Mention Bien",
		},
		{
			name: "Certification TOEIC",
			dates: "Janvier 2021",
			description: "Score de 980/990 - Niveau C1",
		},
	],
	experience: [
		{
			company: "Angers Loire Habitat",
			jobTitle: "Chargé d’accueil et secrétariat",
			dates: "2 au 25 août 2023",
		},
		{
			company: "Verisure",
			jobTitle: "Conseiller Technique et Relation Client",
			dates: "13 juin au 19 août 2022",
			description:
				"- Prise en charge et résolution des besoins client\n- Orientation du client vers les services adéquats\n- Manipulations administratives relatives aux besoins client",
		},
	],
	skills: {
		POO: ["C++", "C#", "Java"],
		Web: ["HTML/CSS", "JavaScript", "PHP", "Astro"],
		BDD: ["SQL", "PostgreSQL"],
		Autres: ["Python", "GitHub"],
	},
	interests: [
		{
			name: "Développement de jeux vidéos en amateur",
		},
		{
			name: "Jeu de rôle sur table en association",
			context: "(Héritiers de Dumnacus)",
		},
		{
			name: "Worldbuilding",
			context: "(projet communautaire The World Beyond The Ice Wall)",
		},
	],
	languages: ["Français natif", "Anglais C2", "Espagnol A2"],
};

app.get("/api", (req, res) => {
	res.json(infos);
});

app.listen(5000, () => {
	console.log("Server started on port 5000.");
});
