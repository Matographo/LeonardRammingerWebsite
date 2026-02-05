---
author: Leonard Ramminger
pubDatetime: 2026-01-29T14:55:30Z
title: Privater Homeserver Verbindung mit dem Laptop
slug: privater-homeserver-verbindung-mit-dem-laptop
featured: true
draft: true
tags:
  - Homeserver
  - Laptop
  - Server
  - Privat
  - Internet
description: Mein erster Entwurf.
---

# Privater Homeserver Verbindung mit dem Laptop

Ich habe mir vor einer weile einen brand neuen PC zusammen gestellt. Dieser hat 64 GB RAM und eine 5070 TI Grafikkarte.

Parallel besitze ich einen Laptop, welchen ich oft für die Arbeit verwende. Dabei merke ich, dass mein Laptop in manchen fällen nicht genug Rechenpower besitzt und somit die meiste zeit nur rum steht.

## Die Idee

Nachdem ich lange zeit überlegt habe, wie ich meinen PC nun vollständig nutzen kann, ist mir aufgefallen, dass ich meinen PC als Homeserver nutzen könnte. Somit kann ich dann mit meinem Laptop auf meinen PC zugreifen und die Rechenpower meines PCs nutzen. Jedoch ist die Frage, wie ich das am besten anstelle, so dass es sich auf dem Laptop so anfühlt, als ob ich immernoch auf dem Laptop arbeite.

Dabei geht es zum einen um die Rechenleistung als auch um den Speicherplatz.

Ebenfalls sollte die Verbindung stabil und schnell sein, als auch sicher.

Die weitere idee ist, dass auf dem PC verschiedene Dienste laufen, welche ich dann auch mit dem Laptop nutzen kann. Dabei muss zum einen das bereitstellen der Services als auch das Verbinden zu diesem mit dem Client abgestimmt sein. Bei vielen Diensten ist das kein großes Problem, jedoch bei anderen wird es schwerer sein sie Nativ sich anfühlen zu lassen.

## Konzept

Das Konzept ist, dass auf dem Server (Host) ein Programm läuft, welches Services verwaltet und laufen lässt.

Dafür wird Podman verwendet, da es zum einen Sicherer ist als Docker, da es Rootless läuft, und zum anderen es einen minimal besseren Ressourcen verbrauch hat.

Es wird ein Ordner erstellt in welchem die einzelnen Services definiert werden mittels Podman Quadlet, wodurch Services ganz einfach hinzugefügt oder weggenommen werden können.

Podman sollte von außerhalb zugreifbar sein, so dass Remote neue Services gestartet und hinzugefügt werden können.

Ebenfalls muss eine schicht zwischen drin sein, welche es ermöglicht dass die ganzen services und der Host selber sicher sind und nicht gehackt werden können.

Um kontrolle zu haben, was gerade auf dem Host passiert sollte eine Gui/Tui bestehen, womit man den Server im auge behalten kann. In dem Moment wird an der Stelle Homepage preferiert, da es alles anzeigt und ebenfalls sehr leichtgewichtig ist.

Damit die Verbindung zwischen dem Host und dem Client sicher bleibt wird Wireguard verwendet, was dazu führt dass die kommunikation verschlüsselt bleibt.

## Herangehensweise

1) Statische IP Adresse einstellen.
2) Wireguard verbindung zwischen Server und Client herstellen.
3) Fail2Ban Installieren um gegen Brute-Force Attaken vorzugehen.
4) Service Ordner hinterlegen und so hinterlegen, dass Podman es erkennt.
5) Podman automatisch starten lassen mit Systemd.
6) Ersten Service hinterlegen.
7) ggf. bei einer GPU den Services GPU beschleunigung geben.
8) Für die einzelnen Services Server-Client Konstrukt bauen.


## Umsetzung



