

export function getRoastrScore(
  average_score: number | null,
  ratings_count: number | null
) {
  if (!average_score || ratings_count === 0 || ratings_count === null) {
    return {
      avgScore: null,
      roastrScore: "🤷",
      roastrScoreDesc: "No ratings yet",
      bgColor: "bg-gray-200",
      count: 0,
    }
  }

  let roastrEmoji = "🤷"
  let roastrScoreDesc = "Mixed feelings"
  let bgColor = "bg-orange-300"

  if (average_score >= 85) {
    roastrEmoji = "✅"
    roastrScoreDesc = "Loved by most"
    bgColor = "bg-green-400"
  } else if (average_score >= 70) {
    roastrEmoji = "👍"
    roastrScoreDesc = "Generally liked"
    bgColor = "bg-yellow-300"
  } else if (average_score < 50) {
    roastrEmoji = "❌"
    roastrScoreDesc = "Not recommended"
    bgColor = "bg-red-500"
  }

  return {
    average_score: average_score,
    roastrEmoji,
    roastrScoreDesc,
    ratings_count: ratings_count,
    bgColor,
  }
}