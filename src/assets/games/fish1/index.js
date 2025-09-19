import angle from './terrain/angle.gif'
import line from './terrain/line.gif'
import empty from './terrain/empty.png'
import apple from './bonus/apple.png'
import apple2 from './bonus/apple2.png'
import pointer from './cursor/pointer.png'
import notAllowed from './cursor/not-allowed.png'
import player from './player.png'
import background from './background.png'
import map from './map.json'

const images = {
  angle: angle,
  line: line,
  empty: empty
}

export default {
  player,
  bonus: [apple, apple2],
  map,
  images,
  cursor: {
    pointer,
    notAllowed
  },
  background
}