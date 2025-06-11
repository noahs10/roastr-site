export function getBrewLogScore(
  average_score: number | null,
) {
  if (!average_score) {
    return {
      emoji: "❓",
      label: "No rating",
    }
  }

  if (average_score >= 85) {
    return {
      emoji: "😍",
      label: "Yes, I’d buy again",
    }
  } else if (average_score >= 40) {
    return {
      emoji: "🤔",
      label: "It was okay",
    }
  } else {
    return {
      emoji: "👎",
      label: "Not for me",
    }
  }
}