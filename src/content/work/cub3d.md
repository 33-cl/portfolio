---
title: Cub3d
publishDate: 2024-11-31 00:00:00
img: /assets/cub3d.png
img_alt: youtube image cub3d
description: |
  Projet de l'école 42 consistant a créer un jeu en 3D en C
tags:
  - C
  - Ray casting
  - Map parsing
---

<iframe 
        width="560" 
        height="315" 
        src="https://youtube.com/embed/M6TIJRxylPM" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
</iframe>

## Cub3d : Un raycasting en C

> <i>Your goal is to create a dynamic view of a maze where you must find your way.</i>

Le projet <b>cub3d</b> est une exploration fascinante de la programmation graphique en C. Inspiré par le célèbre jeu Wolfenstein 3D, ce projet consiste à créer un moteur de rendu 3D en utilisant la technique du <b>raycasting</b>. L'objectif est de générer une vue dynamique d'un labyrinthe en temps réel, où le joueur peut se déplacer et interagir avec l'environnement.


### Fonctionnalités implémentées

- <b>Gestion de la carte</b> : Lecture et validation de fichiers de configuration (.cub) pour définir la carte, les textures et les couleurs.
- <b>Raycasting</b> : Algorithme de rendu 3D pour afficher des murs, des sols et des plafonds.
- <b>Textures</b> : Application de textures sur les murs pour un rendu visuel réaliste.
- <b>Mouvements du joueur</b> : Déplacement fluide avec les touches directionnelles et rotation de la caméra.
- <b>Gestion des collisions</b> : Le joueur ne peut pas traverser les murs.

### Apprentissages clés

Ce projet m'a permis de plonger dans les mathématiques derrière le rendu 3D, notamment les calculs de distances, d'angles et de projections. J'ai également approfondi ma compréhension de la gestion des textures, de la mémoire et des performances en temps réel.

#### Technologies utilisées

- <b>Langage C </b>: Le cœur du projet, avec une utilisation intensive de la programmation système.
- <b>MiniLibX </b>: Bibliothèque graphique fournie par 42 pour créer des fenêtres et afficher des images.
- <b>Makefile </b>: Pour la compilation et la gestion des dépendances.
- <b>Git </b>: Pour le versioning et la collaboration.
