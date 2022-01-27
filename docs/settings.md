---
title: Additional Settings
description: List of possible additional settings
sidebar_position: 3
---

# Additional Settings

## `dwellmax`

### Default dwell time
For the default hand siteswap sequence (hss = 2), each of the two hands throws on every second beat. So if the right hand has thrown on beat #N, then it will next throw on beat #(N+2). The object that the right hand has to throw at beat #(N+2) can be caught anywhere in the 2-beat window from beat #N to beat #(N+2). The time between the catch and the throw at beat #(N+2) is called dwell time: the time for which an object dwells in the hand after being caught and before being thrown again. Most juggling simulators assume a constant dwell time for every object. For example, Juggling Lab assigns the constant dwell time of 1.3 beats to every object, i.e., the simulation shows the object being caught 1.3 beats before it is thrown again (except if the object being caught was previously thrown as a '1'. This case is handled separately in Juggling Lab). This means that the hand which threw at beat #N will catch the object to be thrown by it next at a time corresponding to (N + 0.7) and then throw it 1.3 beats later i.e. at beat #(N+2). 

### dwellmax feature
With the hss feature, it is possible for a given hand to have a variable interval between two successive throws being made from it. For example, if the hss for the right hand of a given juggler is '5' at beat #N, then that hand will only throw again at beat #(N+5). It can therefore, afford to catch the object to be thrown next anywhere between beat #N and beat #(N+5). The default juggling lab behaviour would be to assign a 1.3 beats dwell time for this object, causing it to be caught at a time corresponding to beat (N + 3.7) so that after a dwell time of 1.3 beats, the object is thrown again at beat (N+5). The dwellmax feature however, tries to maximise the dwell time and causes the object to be caught at a time corresponding to beat (N + 0.7) leading to a dwell time of 4.3 beats in this case. This means that the previous throw of the object is thrown lower and it is caught earlier. For example if the object being caught was thrown as a '7' at beat #(N-2), then it will be caught at beat (N+0.7) instead of at (N+5.7) as under the default settings. So the '7' can effectively be thrown to the height of what would usually be called a '4', thus making the pattern easier to juggle. The assumption is that jugglers instinctively prefer lower throws and longer dwell times whenever possible. The dwellmax setting effectively ensures that the catch is always at (N+0.7), i.e., 0.7 beats after the hand became empty which is exactly what happens with the default dwell beats setting when the hss = 2.

The dwellmax mechanism is enabled by default. It can be disabled by entering 'dwellmax = false' in the Manual Settings. It can be re-enabled by entering 'dwellmax = true'.

## `hold`

Lorem ipsum


## `handspec`

Lorem ipsum
