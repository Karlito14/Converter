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
      result = value * 2.20;
      break;
      case UNITS.livre:
      result = value / 2.20;
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
  if (unit === UNITS.celcius) {
    return UNITS.faranheit;
  }

  if (unit === UNITS.faranheit) {
    return UNITS.celcius;
  }

  if (unit === UNITS.kilometre) {
    return UNITS.miles;
  }

  if (unit === UNITS.miles) {
    return UNITS.kilometre;
  }

  if (unit === UNITS.kilo) {
    return UNITS.livre;
  }

  if (unit === UNITS.livre) {
    return UNITS.kilo;
  }
};

export { getOpposit, converter };
