import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="bg-black text-white text-center py-16 px-4">
      <h1 className="text-4xl font-bold mb-4">roastr</h1>
      <p className="text-lg text-gray-300 max-w-xl mx-auto mb-6">
        explore indo’s best specialty coffee – no B.S., just real human reviews.
      </p>

      <div className="max-w-md mx-auto mb-4">
        <Input
          placeholder="search beans, roasters, or flavors..."
          className="rounded-full text-black bg-white px-6 py-5 text-lg"
        />
      </div>

      <p className="text-sm text-gray-400 mb-2">
        <span className="font-bold">3561</span> reviews made by coffee lovers like you
      </p>

      <p className="text-sm text-gray-300">
        Brewed something special?{" "}
        <a href="#" className="underline text-indigo-400">Write a review</a>
      </p>
    </section>
  )
}
