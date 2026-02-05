---
author: Leonard Ramminger
pubDatetime: 2026-01-26T00:30:01.761Z
modDatetime: 2026-01-26T21:53:00.761Z
title: Axio Operatoren
slug: axio-operatoren
featured: false
draft: false
tags:
  - Programmieren
  - Programmiersprache
  - Axio
  - Doku
next: axio-datentypen
description: Operatoren der Sprache Axio und wie diese verwendet werden
---

# Operatoren in Axio 

In Axio gibt es eine ganze Reihe an Operatoren welche grundlage der ganzen Sprache sind.

## Vorzeichenoperatoren

### Negatives Vorzeichen (-)

Eine Zahl kann durch ein Negatives Vorzeichen negiert werden.

```
-5
```

### Positives Vorzeichen (+)
Eine Zahl kann einen expliziten Positiven Vorzeichen Operator haben.


```
+5
```

Dieser ist jedoch äquivalent als würde kein Vorzeichen verwendet werden.

```
5
```

## Arithmetik

### Addition (+)


```
5+5    => 10
```

### Substraktion (-)

```
5-5    => 0
```

### Multiplikation (*)

```
5*5    => 25
```

### Division (/)

```
5/5    => 1
```

### Modulo (%)

```
5%5    => 0
6%5    => 1
```

## Bitmanipulation

### Bitweises UND (&)

```
5&5    => 5
6&5    => 4
```

### Bitweises ODER (|)

```
5|5    => 5
6|5    => 7
```

### Bitweises XOR (^)

```
5^5    => 0
6^5    => 3
```

### Bitweises NICHT (~)

```
~5     // 0101 => 1010
```

### Linksshift (<<)

```
2<<2   => 8
3<<2   => 12
```

### Rechtsshift (>>)

```
2>>1   => 1
8>>2   => 2
```


## Logische Operatoren

### Gleichheit (==)

```
5==5   => true
6==5   => false
```

### Ungleichheit (!=)

```
5!=5   => false
6!=5   => true
```

### Kleiner (<)

```
5<5   => false
4<5   => true
```

### Größer (>)

```
5>5   => false
5>4   => true
```

### Kleiner Gleich (<=)

```
5<=5   => true
4<=5   => true
```

### Größer Gleich (>=)

```
5>=5   => true
5>=4   => true
```

### Boolisches UND (&&)

```
5==5 && 4==4   => true
5==5 && 3==4   => false
```

### Boolisches ODER (||)

```
5==5 || 4==4   => true
5==5 || 3==4   => true
```

### Boolisches NICHT (!)

```
(5==5)   => true
!(5==5)  => false
```

### Logische Vergleichskette Kleiner (< < <)

```
1<5<10<11   => true
5<5<11      => false
```

### Logische Vergleichskette Größer (> > >)

```
11>10>5>1   => true
11>5>5      => false
```

### Logische Vergleichskette Kleiner Gleich (<= <= <=)

```
1<=5<=10<=11   => true
5<=5<=11      => false
```

### Logische Vergleichskette Größer Gleich (>= >= >=)

```
11>=10>=5>=1   => true
11>=5>=5      => false
```

### Range Vergleich (..)

```
1 in 1..10   => true
5 in 1..10   => true
10 in 1..10  => false
```

### Range Vergleich Gleichheit (..=)

```
1 in 1..=10   => true
5 in 1..=10   => true
10 in 1..=10  => true
```
