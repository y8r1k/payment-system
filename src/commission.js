// Commission calculation module
function calculateCommission(amount, rate) {
    return amount * rate;
}

function calculateProgressiveCommission(amount, rate) {
  // TODO: implement progressive rates
  if (amount < 100) {
    return amount * rate;
  } else if (amount < 1000) {
    // Первые 100 по базовой ставке, остаток (до 1000) — по ставке +5%
    return (100 * rate) + ((amount - 100) * (rate + 0.05));
  } else {
    // Первые 100 по базовой, от 100 до 1000 по +5%, всё что выше 1000 — по +10%
    return (100 * rate) + (900 * (rate + 0.05)) + ((amount - 1000) * (rate + 0.10));
  }
}


module.exports = { calculateCommission };
