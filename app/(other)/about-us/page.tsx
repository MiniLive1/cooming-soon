import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "About CricDash | Live Cricket Score, IPL Schedule, News | CricDash.com",
  description:
    "Get live cricket scores with CricDash, delivering real-time updates on ongoing matches. Whether it's international tournaments, domestic leagues like IPL, BBL, or T10 League, our app comprehensively covers all, keeping you well-informed about the latest scores and match progress.",
  keywords: ["About cricdash", "cricdash app"],
};

const page = () => {
  return (
    <div className="w-full overflow-y-auto scrollbar">
      <div className="pt-0 pb-4 xl:px-1.5">
        <main className="mt-4 md:mt-5">
          {/* Header section */}
          <header className="flex flex-col gap-2 sm:gap-8">
            <div className="text-center sm:px-2">
              <h1 className="mt-4 text-4xl font-semibold text-heading sm:mt-6 sm:text-5xl text-[#ff5757]">
                About Us
              </h1>

              <div className="font-medium py-4 max-w-full">
                Introducing{" "}
                <span className="text-[#ff5757] font-semibold">CricDash</span> –
                your ultimate companion for real-time cricket updates! Elevate
                your cricket experience with our feature-packed live score app,
                bringing you closer to the heart of the game. Stay on top of
                every thrilling moment, catch the passion, and embrace the
                intense competition with CricDash.
              </div>
              <p className="pb-2 text-left">
                Experience the convenience of instant access to live cricket
                scores with CricDash, delivering real-time updates on ongoing
                matches. Whether it&apos;s international tournaments, domestic
                leagues like IPL, BBL, or T10 League, our app comprehensively
                covers all, keeping you well-informed about the latest scores
                and match progress.
              </p>
            </div>
          </header>

          {/* Article content */}

          <h1 className="pb-1 text-xl font-semibold pt-4">
            {" "}
            Live Scores Anytime, Anywhere:
          </h1>
          <p>
            Stay connected with CricDash&apos;s live scores, ensuring
            you&apos;re always in the loop, whether you&apos;re at home, work,
            or on the go.
          </p>
          <h1 className="pb-1 text-xl font-semibold pt-4">
            {" "}
            Upcoming Match Fixtures:
          </h1>
          <p>
            From toss to final result, CricDash covers it all. Get detailed
            information about each match, including batting and bowling
            statistics, milestones, and player performances.
          </p>
          <h1 className="pb-1 text-xl font-semibold pt-4">
            {" "}
            Personalized Notifications:
          </h1>
          <p>
            Customize your alerts with CricDash to receive real-time
            notifications for match updates, wickets, and other key moments,
            keeping you in the game no matter where you are.
          </p>
          <h1 className="pb-1 text-xl font-semibold pt-4">
            {" "}
            User-Friendly Interface:
          </h1>
          <p>
            Enjoy a seamless and intuitive experience with CricDash&apos;s
            user-friendly design, making it easy to access the information you
            crave with just a few taps.
          </p>
          <h1 className="pb-1 text-xl font-semibold pt-4"> Player Profiles:</h1>
          <p>
            Explore the stars of the game with CricDash&apos;s detailed player
            profiles, offering a comprehensive overview of their career, recent
            performances, and more.
          </p>
          <h1 className="pb-1 text-xl font-semibold pt-4">
            {" "}
            Team Standings and Rankings:{" "}
          </h1>
          <p>
            Keep track of your team&apos;s performance with CricDash&apos;s live
            standings and rankings, ensuring you&apos;re up-to-date on their
            position in the cricketing world.
          </p>
          <h1 className="pb-1 text-xl font-semibold pt-4">
            {" "}
            Latest News and Highlights:
          </h1>
          <p>
            Immerse yourself in the cricketing universe with CricDash&apos;s
            latest news and highlights, staying informed and entertained between
            matches.
          </p>
          <p className="pt-6 font-medium">
            Get ready to enhance your cricket experience by downloading CricDash
            now. Immerse yourself in the passion, excitement, and intense
            competition of cricket with our feature-rich score app. Join a
            community of millions of cricket enthusiasts and stay ahead in the
            game with CricDash.
          </p>
        </main>
      </div>
    </div>
  );
};

export default page;
