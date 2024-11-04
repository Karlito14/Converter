import { UNITS } from '../constants';

const converter = (value, unit) => {
  let result;

  switch (unit) {
    case '°C':
      result = value * 1.8 + 32;
      break;
    case '°F':
      result = (value - 32) / 1.8;
      break;
  }

  return isNaN(result) ? '' : result.toFixed(1);
};

const getOpposit = (unit) => {
  return unit === UNITS.celcius ? UNITS.faranheit : UNITS.celcius;
};

export { getOpposit, converter };
