import { UNITS } from '../constants';

const converter = (value, unit) => {
  let result;

  switch (unit) {
    case UNITS.celcius:
      result = value * 1.8 + 32;
      break;
    case UNITS.faranheit:
      result = (value - 32) / 1.8;
      break;
    case UNITS.kilo:
      result = value * 2.2;
      break;
    case UNITS.livre:
      result = value / 2.2;
      break;
    case UNITS.kilometre:
      result = value / 0.62;
      break;
    case UNITS.miles:
      result = value * 1.61;
      break;
  }

  return isNaN(result) ? '' : result.toFixed(1);
};

const getOpposit = (unit) => {
  switch (unit) {
    case unit === UNITS.celcius:
      return UNITS.faranheit;
    case unit === UNITS.faranheit:
      return UNITS.celcius;
    case unit === UNITS.kilometre:
      return UNITS.miles;
    case unit === UNITS.miles:
      return UNITS.kilometre;
    case unit === UNITS.kilo:
      return UNITS.livre;
    case unit === UNITS.livre:
      return UNITS.kilo;
  }
};

export { getOpposit, converter };
