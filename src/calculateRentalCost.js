/**
 * @param {number} days
 *
 * @return {number}
 */

function calculateRentalCost(days) {
  const DAILY_RATE = 50;
  const LONG_TERM_DAYS = 7;
  const SHORT_TERM_DAYS = 3;
  const LONG_TERM_DISCOUNT = 20;
  const SHORT_TERM_DISCOUNT = 10;

  const basePrice = DAILY_RATE * days;

  if (days >= LONG_TERM_DAYS) {
    return basePrice - LONG_TERM_DISCOUNT;
  }
  if (days >= SHORT_TERM_DAYS) {
    return basePrice - SHORT_TERM_DISCOUNT;
  }
  return basePrice;
}

module.exports = calculateRentalCost;
