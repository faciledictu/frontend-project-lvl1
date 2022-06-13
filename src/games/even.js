import play from '../index.js';
import { getLimit, getRndInt } from '../utilities/calculations.js';
import msg from '../messages.js';

export default () => {
  const getGameData = () => {
    const num = getRndInt(1, getLimit());
    const answer = num % 2 === 0 ? msg.yes : msg.no;
    return [num, answer];
  };

  play(msg.instruction.even, getGameData);
};
