const mathPrize = (bidsCount, price, ratio, bonusRatio, percent) => {
  if (bidsCount > 1) {
    const prize = (price * bidsCount - (((price * bidsCount) / 100) * (percent / bonusRatio)))
    return prize > 9 ? prize.toFixed(0) : prize.toFixed(4)
  } else {
    const prize = (price * ratio) * bonusRatio
    return prize > 9 ? prize.toFixed(0) : prize.toFixed(4)
  }
}

export default mathPrize

