import Image from "next/image"

type BeanCardProps = {
  image: string
  roaster: string
  name: string
  score: number
  ratings: number
  description: string
}

export default function BeanCard({
  image,
  roaster,
  name,
  score,
  ratings,
  description,
}: BeanCardProps) {
  return (
    <div className="rounded-2xl border border-gray-300 p-4 w-[250px] flex flex-col items-center text-center bg-white shadow-sm">
      <div className="relative w-40 h-40 mb-4">
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="contain"
          className="rounded"
        />
      </div>
      <p className="text-sm text-gray-500">{roaster}</p>
      <p className="font-semibold">{name}</p>
      <p className="text-sm text-gray-500 mt-1">{description}</p>
      <p className="text-sm mt-2">
        <span className="font-bold">{score}</span>{" "}
        <span className="text-gray-400">({ratings} ratings)</span>
      </p>
    </div>
  )
}