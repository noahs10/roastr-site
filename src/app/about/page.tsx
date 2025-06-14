
// app/about/page.tsx

export default function AboutPage() {
  return (
    <div className="w-full bg-black text-white min-h-screen">
        <div className="max-w-3xl mx-auto px-4 py-16 text-white space-y-16 mt-10">
      {/* Section 1: About Roastr */}
      <section>
        <p className="text ">
            About roastr
        </p>
        <h1 className="text-3xl font-bold mt-4 mb-6">
          The roastr Manifesto: Good roasters and good coffee deserve to be seen. 👀
        </h1>
        <div className="space-y-6 text-base text-gray-300 leading-relaxed">
          <p>
            But too often, they get buried — under jargon, gatekeeping, and the noise of hype.
            It’s confusing. It’s exclusive. And it makes discovering great coffee harder than it should be.
          </p>
          <p>
            Behind every bag is someone who cares — a roaster who sources well, roasts with purpose,
            and crafts flavors worth talking about. <strong className="text-white">They deserve more than buzzwords.
            They deserve real recognition.</strong>
          </p>
          <p>
            That’s why we built <span className="font-semibold text-white">Roastr</span>.
            A place for real people to explore, log, and share the coffees they actually enjoy —
            because quality is defined by taste and experience.
          </p>
          <p>
            You don’t need to be an expert to have a voice here.
            Just someone who cares enough to taste, to learn, and to share.
          </p>
          <p>
            <strong className="text-white">Roastr is for anyone who loves great coffee — and wants to make it easier to find.</strong><br />
            Welcome to the table.
          </p>
        </div>
      </section>

      {/* Section 2: Roastr Score */}
      <section>
        <div className="text-2xl font-bold text-white">
          How the&nbsp;
          <span className="relative inline-block">
            <span className="relative z-10">“roastr Community Ratings”</span>
            <img
              src="/scribble-circle.svg"
              width="130%"
              alt=""
              aria-hidden="true"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-auto object-contain z-0 pointer-events-none"
            />
          </span>
          &nbsp;works?
        </div>

        <div className="space-y-4 text-base text-gray-300 leading-relaxed mt-4">
          <p>
            <strong className="text-white">Honest experience, not technical tasting.</strong><br />
            At Roastr, scoring is dead simple — we don’t use fancy grading sheets or flavor wheels.
          </p>

          <p>
            <strong className="text-white">We ask one question:</strong><br />
            “Would you buy this coffee again?”
          </p>

          <p>That’s it. Three answers:</p>
          <ul className="list-disc list-inside ml-2 space-y-1">
            <li>😍 Yes, I’d buy again → score: 100</li>
            <li>🤔 It was okay → score: 60</li>
            <li>👎 Not for me → score: 20</li>
          </ul>

          <p>
            <strong className="text-white">The Roastr Score is the average of all answers.</strong><br />
            So if a bean averages 75, it means most people enjoyed it, some were unsure.
            A score of 90? Almost everyone would drink it again.
          </p>

          <p>
            <strong className="text-white">It’s about how much people actually liked it.</strong>
          </p>

          <p>The Breakdown:</p>
          <ul className="list-disc list-inside ml-2 space-y-1">
            <li>85–100 → ✅ Loved by most</li>
            <li>70–84 → 👍 Generally liked</li>
            <li>50–69 → 🤷 Mixed feelings</li>
            <li>Below 50 → ❌ Not recommended</li>
          </ul>

          <p>No Q-grader certificate required. Just real feedback from real drinkers.
            <a
            href="/submit"
            className="underline hover:scale-95 active:scale-95 transition-transform duration-150">
              Would you share one?</a>
          </p>
        </div>
      </section>
    </div>
        
    </div>
    
  )
}
