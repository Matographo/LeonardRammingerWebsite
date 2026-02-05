---
author: Leonard Ramminger
pubDatetime: 2026-02-05T20:34:15Z
title: Axio Kontrollstrukturen
slug: axio-kontrollstrukturen
featured: false
draft: false
tags:
  - Programmieren
  - Programmiersprache
  - Axio
  - Doku
next: axio-funktionen
description: Kontrollstrukturen der Sprache Axio und wie sie funktionieren. Dabei werden bekannte und bewährte Konzepte verwendet.
---

# Kontrollstrukturen in Axio

In Axio gibt es eine Menge Kontrollstrukturen, welche den Programmfluss steuern. In diesem Artikel werden die wichtigsten Kontrollstrukturen vorgestellt.

Eine Kontrollstruktur ist so entwickelt, dass mit Hilfe einer Bedingung unterschiedliche Pfade in der Ausführung des Codes beeinflusst werden kann.

## If Abfrage

```
if bedingung {
    // code to execute
}
```

## Else Abfrage

```
if bedingung {
    // code to execute
} else {
    // other code to execute
}
```

## Else IF Abfrage

```
if bedingung {
    // code to execute
} else if bedingung2 {
    // other code to execute
}
```

## Ternäre Abfrage


```
variable = bedingung ? 4 : 2
```


## Switch 

```
switch item {
    case A: // code
        // code
    case C,B: 
        // code
    default:
}
```

## Return Switch

```
variable = switch value {
    case A   => 9
    case C,B => 5
    default  => 7
}
```


## Bedingungs Switch

```
result = switch value {
    case < 5  => 6
    case == 5 => 7
    case > 5  => 8
    default   => 0
}
```




## Bedingte Schleife

```
for bedingung {
    // code
}
```

## Zähl Schleife 

```
for i = 0; i < len; i += 1 {
    // code nutzt i
}
```

## Range und Collection Schleife

```
for x in 0..n {
    // code mit x
}


for x in variables {
    // code mit x
}
```

## Async Schleife

```
async for x in 0..n {
    // code mit x
}


async for x in variables {
    // code mit x
}

async for i = 0; i < len; i += 1 {
    // code nutzt i
}
```

## Verschieben einer Anweisung

```
reader = open()
defer reader.close()
```
