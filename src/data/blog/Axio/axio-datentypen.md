---
author: Leonard Ramminger
pubDatetime: 2026-01-26T00:30:02Z
title: Axio Datentypen
slug: axio-datentypen
featured: false
draft: false
tags:
  - Programmieren
  - Programmiersprache
  - Axio
  - Doku
next: axio-variablen
description: Datentypen der Sprache Axio
---

# Datentypen in Axio 

In Axio bilden diese primitiven Datentypen die Grundlage für die Speicherverwaltung und Datenverarbeitung. Sie sind hardwarenah optimiert und ermöglichen eine präzise Kontrolle über den Footprint deiner Anwendung.

---

## Ganzzahlen (Integers)


### Vorzeichenbehaftet (Signed)
Können sowohl positive als auch negative Werte speichern. Das höchstwertige Bit (MSB) wird als Vorzeichenbit verwendet.

* **i8 / char / byte**: 8-Bit (-128 bis 127)
* **i16 / short**: 16-Bit (-32.768 bis 32.767)
* **i32 / int**: 32-Bit (-2.147.483.648 bis 2.147.483.647)
* **i64 / long**: 64-Bit (Für massive Zahlenbereiche)



### Vorzeichenlos (Unsigned)
Können nur positive Werte speichern. Da kein Vorzeichenbit benötigt wird, verdoppelt sich der positive Wertebereich.

* **u8 / uchar / ubyte**: 8-Bit (0 bis 255)
* **u16 / ushort**: 16-Bit (0 bis 65.535)
* **u32 / uint**: 32-Bit (0 bis 4.294.967.295)
* **u64 / ulong**: 64-Bit (Standard für Speicheradressierung und große Counts)

---

## Fließkommazahlen (Floating Point)

Diese Typen folgen dem IEEE 754 Standard für die Darstellung von Dezimalzahlen mittels Vorzeichen, Exponent und Mantisse.

### Standard-Präzision
* **f32 / float**: 32-Bit. Weit verbreitet in der Grafikprogrammierung (GPUs) und bei Audio-Daten.
* **f64 / double**: 64-Bit. Der Standard für mathematische Berechnungen, die hohe Präzision erfordern.



### Kompakt-Formate (Spezialtypen)
* **f8 / f16**: Extrem kompakte Formate. Diese werden primär in Machine-Learning-Kontexten (Tensor-Operationen) oder spezialisierter Hardware zur Performance-Optimierung genutzt.

---

## Logik und Zeichen

### Wahrheitswerte (Booleans)
Wird für logische Bedingungen, Vergleiche und Kontrollfluss-Steuerung genutzt.

* **bool**: Kann nur die Zustände `true` oder `false` annehmen. Intern belegt ein `bool` in der Regel 8-Bit zur effizienteren Adressierung durch die CPU.

### Zeichentypen
Repräsentiert einzelne Symbole.

* **char**: Standardmäßig 8-Bit (ASCII-kompatibel).
* **uchar**: Die vorzeichenlose Variante, oft genutzt für die Arbeit mit Raw-Buffer-Daten oder erweiterten Zeichensätzen.

---

## Typhierarchie & Speicherübersicht

| Kategorie | Bits | Vorzeichen | Axio-Typen & Aliase |
| :--- | :--- | :--- | :--- |
| **Ganzzahl (klein)** | 8 | Ja | `i8`, `char`, `byte` |
| | 8 | Nein | `u8`, `uchar`, `ubyte` |
| **Ganzzahl (mittel)** | 16 | Ja | `i16`, `short` |
| | 16 | Nein | `u16`, `ushort` |
| **Ganzzahl (standard)**| 32 | Ja | `i32`, `int` |
| | 32 | Nein | `u32`, `uint` |
| **Ganzzahl (groß)** | 64 | Ja | `i64`, `long` |
| | 64 | Nein | `u64`, `ulong` |
| **Fließkomma** | 32 | Ja | `f32`, `float` |
| | 64 | Ja | `f64`, `double` |
| **Logik** | 8 | N/A | `bool` |
