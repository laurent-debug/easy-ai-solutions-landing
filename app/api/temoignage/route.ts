import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Fichier dans lequel on va stocker les témoignages (à la racine du projet)
    const filePath = path.join(process.cwd(), 'temoignages.json');
    
    let existingData = [];
    
    // Tenter de lire le fichier s'il existe déjà
    try {
      const fileContent = await fs.readFile(filePath, 'utf-8');
      if (fileContent) {
        existingData = JSON.parse(fileContent);
      }
    } catch (error) {
      // Ignorer l'erreur, ça veut juste dire que le fichier n'existe pas encore
    }

    // Ajouter la nouvelle entrée avec la date
    const newEntry = {
      date: new Date().toISOString(),
      ...data,
    };

    existingData.push(newEntry);
    
    // Réécrire le fichier complet
    await fs.writeFile(filePath, JSON.stringify(existingData, null, 2), 'utf-8');

    return NextResponse.json({ success: true, message: 'Sauvegardé avec succès' });
  } catch (error) {
    console.error('Erreur API témoignage:', error);
    return NextResponse.json(
      { success: false, error: 'Échec de la sauvegarde des données' },
      { status: 500 }
    );
  }
}
