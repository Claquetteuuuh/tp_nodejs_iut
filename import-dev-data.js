import fs from 'fs';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { Tour } from './models/tour.model.js';

dotenv.config();

const connectString = process.env.MONGO_URI;

if (!connectString) {
  console.log('Erreur: Aucune URI MongoDB trouvée');
  process.exit(1);
}

mongoose
  .connect(connectString)
  .then(() => {
    console.log('Connection à MongoDB réussie!');
  })
  .catch((err) => {
    console.log('Connection à MongoDB échouée:', err);
    process.exit(1);
  });

const tours = JSON.parse(
  fs.readFileSync('./dev-data/data/tours-simple.json', 'utf-8')
);

const importData = async () => {
  try {
    await Tour.create(tours);
    console.log('Données importées avec succès!');
  } catch (err) {
    console.log("Erreur lors de l'importation:", err);
  }
  process.exit();
};

const deleteData = async () => {
  try {
    await Tour.deleteMany();
    console.log('Données supprimées avec succès!');
  } catch (err) {
    console.log('Erreur lors de la suppression:', err);
  }
  process.exit();
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
} else {
  console.log('Commande non reconnue. Utilisez --import ou --delete');
  process.exit();
}
