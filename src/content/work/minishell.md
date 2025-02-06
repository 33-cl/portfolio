---
title: Minishell
publishDate: 2020-07-22 00:00:00
img: /assets/minishell.png
img_alt: Iridescent ripples of a bright blue and pink liquid
description: |
  Projet de l'école 42 consistant a recréer un shell inspiré de bash en C
tags:
  - C
  - Command parsing
  - Multi-threading
---

## Minishell : Un shell minimaliste

> <i>This project is about creating a simple shell. Yes, your own little bash.</i>

Le projet <b>minishell</b> est l'un des projets les plus emblématiques de l'école 42. Il consiste à créer un interpréteur de commandes (shell) en C, capable de gérer des commandes de base, des pipes, des redirections, et bien plus encore. Le tout de façon rigoureuse avec une parfaite gestion de la mémoire. Ce projet m'a permis de plonger en profondeur dans les mécanismes des systèmes d'exploitation, tout en renforçant mes compétences en programmation système.


### Fonctionnalités implémentées

- <b>Gestion des commandes simples</b> : Exécution de commandes comme ls, cd, echo, etc.
- <b>Pipes (|)</b> : Redirection de la sortie d'une commande vers l'entrée d'une autre.
- <b>Redirections (>, <, >>)</b> : Manipulation des flux d'entrée/sortie.
- <b>Environnement</b> : Gestion des variables d'environnement (env, export, unset).
- <b>Signaux</b> : Gestion des interruptions comme Ctrl+C et Ctrl+D.

### Apprentissages clés

Ce projet m'a permis de comprendre en détail le fonctionnement d'un shell, ainsi que les appels système essentiels comme fork, execve, pipe, et dup2. J'ai également appris à gérer les erreurs de manière robuste et à structurer un projet complexe en modules.

#### Technologies utilisées

- <b>Langage C </b>: Le cœur du projet, avec une utilisation intensive de la programmation système.
- <b>Makefile </b>: Pour la compilation et la gestion des dépendances.
- <b>Git </b>: Pour le versioning et la collaboration.
