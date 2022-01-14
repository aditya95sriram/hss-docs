---
title: Introduction
description: Introduction to hand siteswap sequences
sidebar_position: 1
---


# Introduction


## Background

Given an asynchronous siteswap, it is assumed by default to be juggled with 
right and left hands throwing alternately.
For patterns where hands do not throw alternately, multiple confusing terms 
and notations are prevalent:
  * Terms like 'galloped patterns', 'hurries' and 'polyrhythms' are used.
  * JoePass supports a notation to comprehend 'hurries'. Usual mathematical 
    rules of siteswap notation like average test and permutation test are 
    rendered irrelevant in this notation.
  * Juggling Lab supports the use of hand specifiers (`R` and `L`) and 
    throw modifiers (`x`) to represent such patterns. This complicates 
    the notation, the check for a valid sequence and the invention of 
    new sequences.

Further complications in the notation (passing, synchronous) arise when 
more than two hands (i.e., more than one juggler) are involved in an 
asynchronous pattern.


## Alternative Solution

Just as the siteswap sequence decides the order in which objects are thrown, 
a 'hand siteswap sequence' (HSS) can be specified to capture information 
about the order in which the hands throw.[^1]

:::note
The default order of hands throwing alternately corresponds to the HSS `2`.
:::


## Advantages

* Any asynchronous object siteswap sequence (OSS) involving any number of 
jugglers can be accurately and succinctly represented with this approach.

:::info Prechac patterns
For example, Prechac patterns containing fractional throws can be represented 
without needing either fractional throws or passing notation.
:::

* The usual average and permutation tests apply to both OSS and HSS.
* Easy to invent new patterns.

:::tip
Any valid OSS can be combined with any valid HSS to give a valid juggling pattern.
:::

:::caution Exception
Only exception is if the HSS has a `0`, i.e., no hand is available at a beat where 
the OSS has a non-zero throw, i.e., there is an object scheduled to be thrown at that beat.
:::

* Dwell times can be individually maximized for each hand, based on when it throws next.



[^1]: Polster B, 'The Mathematics of Juggling', NY: Springer, 2003, pp. 110-112