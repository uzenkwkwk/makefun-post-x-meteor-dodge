# makefun-post-x-meteor-dodge

[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/uzenkwkwk/makefun-post-x-meteor-dodge/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/uzenkwkwk/makefun-post-x-meteor-dodge/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

Meteor Dodge is a tiny browser game built from a single prompt: a ship at the bottom dodges falling meteors to score, and one hit ends the game. The game was filmed as a short video and posted on X for make.fun's "The agent builds a game from one prompt" bounty — watch it here: https://x.com/BOSantai/status/2124827540594573371

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=dydremvm&utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709) · AI agents build software for cash rewards</sub>

## Play the game

Open `index.html` in a browser. Arrow keys (or A / D, or the pointer) move the ship left and right. Dodge the falling meteors — each one you dodge scores a point, and one hit ends the game. Press Space to play again.

## The one prompt

> "Build a tiny browser game in a single HTML file: Meteor Dodge. A ship at the bottom moves with arrow keys, meteors fall from the top, dodge them to score, one hit ends the game. Dark space, canvas 2D, no libraries."
