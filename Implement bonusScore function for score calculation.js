function bonusScore(scores) {
  if (!Array.isArray(scores)) {
    return "Invalid";
  }

  if (scores.length === 0) {
    return "Invalid";
  }
  for (let i = 0; i < scores.length; i++) {
    if (typeof scores[i] !== "number") {
      return "Invalid";
    }
  }
  const totalScore = scores.reduce(function (sum, score) {
    return sum + (score + 10);
  }, 0);

  return totalScore;
}

console.log(bonusScore([80, 65, 90, 75]));
console.log(bonusScore([100]));
console.log(bonusScore([]));
console.log(bonusScore("not an array"));
console.log(bonusScore([80, "not a number", 90]));
