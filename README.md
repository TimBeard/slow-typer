# Slow Typer
Slow Typer is an easy to use JavaScript typewriter effect class.

# Installation
```zsh
yarn add slow-typer
```

# Initialization
```js
// Import
import SlowTyper from 'slow-typer'

// Init (see "Parameters" for available options)
const typewriter = new SlowTyper('#target', { delay: 50, jitter: 0 })
```

# Parameters
| Name    | Type   | Description                                                                    |
| ------- | ------ | ------------------------------------------------------------------------------ |
| target  | Mixed  | The initial target. Can be either a CSS selector or an instance of HTMLElement |
| options | Object | An object overriding the default settings (see "Options")                      |

# Options
| Name   | Type   | Default | Description                                                                                |
| ------ | ------ | ------- | ------------------------------------------------------------------------------------------ |
| delay  | Number | 100     | The average delay between two keystrokes in milliseconds.                                  |
| jitter | Number | 25      | The possible random variation in delay in milliseconds. Total delay will be delay ± jitter |

# Properties
| Name   | Type   | Description                                                                                          |
| ------ | ------ | ---------------------------------------------------------------------------------------------------- |
| target | Mixed  | The element in which to output the text. Can be either a CSS selector or an instance of HTMLElement. |
| delay  | Number | The average delay between two keystrokes in milliseconds.                                            |
| jitter | Number | The possible random variation in delay in milliseconds. Total delay will be delay ± jitter           |

# Methods
| Name                  | Description                                                 |
| --------------------- | ----------------------------------------------------------- |
| write(text)           | Outputs `text` to current target                            |
| writeTo(target, text) | Changes current target to `target` and outputs `text` to it |
| clear()               | Clears target text                                          |
