<h1 align="center">mrobot</h1>

[![Build Status](https://travis-ci.org/cwilgenhoff/mrobot.svg?branch=master)](https://travis-ci.org/cwilgenhoff/mrobot)

Navigate the surface of mars from the comfort of your CLI.

![http://i.imgur.com/hF5DzHs.png](http://i.imgur.com/hF5DzHs.png)

## Requirements

- Be able to rotate robots to the right or left keeping their position.
- Be able to move robots forward one step depending on their orientation (N, E, W, S).
- Be able to extend the instructions robots can execute.
- Be able to leave scent on the grid when a robot goes off the limits avoiding future ones to have the same problem.

## Installation

Installs all dependencies.

```
$ npm install
```

## Run

Starts the application.

```
$ ./bin/robots.sh -f <path>
```

## Tests

Runs the suit test.

```
$ npm test
```
