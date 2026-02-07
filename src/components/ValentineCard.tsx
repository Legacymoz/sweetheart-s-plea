import { useState } from "react";
import catHappy from "@/assets/cat-happy.png";
import catAnnoyed from "@/assets/cat-annoyed.png";
import catAngry from "@/assets/cat-angry.png";
import Confetti from "./Confetti";

const MAX_NO_CLICKS = 8;

const angryMessages = [
  "Please don't choose no... 🥺",
  "Are you sure, Lindsey?? 😿",
  "You're making kitty sad... 😾",
  "Really Lindsey?! Think again! 😤",
  "I'm getting upset now... 💢",
  "This is your LAST warning Lindsey! 😡",
  "LINDSEY PLEASE JUST SAY YES!! 🔥",
  "Fine... this is truly your last chance... 💔",
];

const getCatImage = (count: number) => {
  if (count <= 1) return catHappy;
  if (count <= 4) return catAnnoyed;
  return catAngry;
};

const ValentineCard = () => {
  const [noCount, setNoCount] = useState(0);
  const [accepted, setAccepted] = useState(false);
  const [shaking, setShaking] = useState(false);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 500;
  const yesScale = 1 + noCount * (isMobile ? 0.2 : 0.35);
  const noScale = Math.max(1 - noCount * 0.1, 0.3);
  const showNo = noCount < MAX_NO_CLICKS;

  const handleNo = () => {
    if (noCount < MAX_NO_CLICKS) {
      setNoCount((prev) => prev + 1);
      setShaking(true);
      setTimeout(() => setShaking(false), 400);
    }
  };

  const handleYes = () => {
    setAccepted(true);
  };

  if (accepted) {
    return (
      <>
        <Confetti />
        <div className="valentine-card max-w-lg mx-4 px-4 py-6 sm:p-8 animate-bounce-in">
          <img
            src={catHappy}
            alt="Happy cat"
            className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-3 sm:mb-4 object-contain animate-pulse-love"
          />
          <h1 className="text-3xl sm:text-5xl md:text-6xl mb-3 sm:mb-4" style={{ color: "hsl(var(--valentine-rose))" }}>
            Yaaay!! 🎉
          </h1>
          <p className="text-base sm:text-xl md:text-2xl font-medium text-foreground mb-2">
            I knew you'd say yes, Lindsey! 💕
          </p>
          <p className="text-sm sm:text-lg text-muted-foreground">
            You've made me the happiest person ever! ❤️
          </p>
          <div className="mt-4 sm:mt-6 flex justify-center gap-2 text-2xl sm:text-4xl">
            {"💖💕💗💓💝".split("").map((e, i) => (
              <span key={i} className="animate-pulse-love" style={{ animationDelay: `${i * 0.2}s` }}>
                {e}
              </span>
            ))}
          </div>
        </div>
      </>
    );
  }

  const currentCat = getCatImage(noCount);

  return (
    <div className="valentine-card max-w-md mx-3 sm:mx-4 px-4 py-5 sm:p-8">
      {/* Cat image - key forces re-render on change */}
      <div key={`shake-${noCount}`} className={shaking ? "animate-shake" : ""}>
        <img
          key={`cat-${noCount}`}
          src={currentCat}
          alt="Valentine cat"
          className="w-20 h-20 sm:w-28 sm:h-28 mx-auto mb-3 sm:mb-4 object-contain transition-all duration-300"
        />
      </div>

      {/* Message under cat */}
      {noCount > 0 && (
        <p
          key={`msg-${noCount}`}
          className="text-sm md:text-base font-semibold mb-4 animate-bounce-in"
          style={{
            color: noCount <= 3
              ? "hsl(var(--valentine-purple))"
              : "hsl(var(--accent))",
            fontSize: `${Math.min(0.875 + noCount * 0.08, 1.4)}rem`,
          }}
        >
          {angryMessages[noCount - 1]}
        </p>
      )}

      {/* Title */}
      {/* <h1
        className="text-2xl sm:text-4xl md:text-5xl mb-1 sm:mb-2"
        style={{ color: "hsl(var(--valentine-rose))" }}
      >
        Lindsey,
      </h1> */}
      <h1
        className="text-xl sm:text-3xl md:text-4xl mb-1 sm:mb-2"
        style={{ color: "hsl(var(--valentine-purple))" }}
      >
        Will You Be
      </h1>
      <h1
        className="text-2xl sm:text-4xl md:text-5xl mb-4 sm:mb-6"
        style={{ color: "hsl(var(--valentine-rose))" }}
      >
        My Valentine? 💌
      </h1>

      {/* Buttons */}
      <div className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
        <button
          onClick={handleYes}
          className="btn-yes"
          style={{
            transform: `scale(${yesScale})`,
            padding: `${8 + noCount * 3}px ${20 + noCount * (isMobile ? 4 : 8)}px`,
            fontSize: `${(isMobile ? 0.85 : 1) + noCount * 0.08}rem`,
            zIndex: 10,
          }}
        >
          Yes! 💖
        </button>

        {showNo && (
          <button
            onClick={handleNo}
            className="btn-no"
            style={{
              transform: `scale(${noScale})`,
              padding: "12px 32px",
              fontSize: `${Math.max(1 - noCount * 0.05, 0.6)}rem`,
            }}
          >
            No 😢
          </button>
        )}
      </div>
    </div>
  );
};

export default ValentineCard;
