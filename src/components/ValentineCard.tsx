import { useState } from "react";
import catHappy from "@/assets/cat-happy.png";
import catAnnoyed from "@/assets/cat-annoyed.png";
import catAngry from "@/assets/cat-angry.png";
import Confetti from "./Confetti";

const MAX_NO_CLICKS = 8;

const angryMessages = [
  "Please don't choose no... 🥺",
  "Are you sure?? 😿",
  "You're making kitty sad... 😾",
  "Really?! Think again! 😤",
  "I'm getting upset now... 💢",
  "This is your last warning! 😡",
  "PLEASE JUST SAY YES!! 🔥",
  "Fine... last chance... 💔",
];

const catImages = [
  catHappy,    // 0 clicks
  catHappy,    // 1
  catAnnoyed,  // 2
  catAnnoyed,  // 3
  catAnnoyed,  // 4
  catAngry,    // 5
  catAngry,    // 6
  catAngry,    // 7
  catAngry,    // 8
];

const ValentineCard = () => {
  const [noCount, setNoCount] = useState(0);
  const [accepted, setAccepted] = useState(false);
  const [shaking, setShaking] = useState(false);

  const yesScale = 1 + noCount * 0.35;
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
        <div className="valentine-card max-w-lg mx-4 animate-bounce-in">
          <img
            src={catHappy}
            alt="Happy cat"
            className="w-32 h-32 mx-auto mb-4 object-contain animate-pulse-love"
          />
          <h1 className="text-5xl md:text-6xl mb-4" style={{ color: "hsl(var(--valentine-rose))" }}>
            Yaaay!! 🎉
          </h1>
          <p className="text-xl md:text-2xl font-medium text-foreground mb-2">
            I knew you'd say yes! 💕
          </p>
          <p className="text-lg text-muted-foreground">
            You've made me the happiest person ever! ❤️
          </p>
          <div className="mt-6 flex justify-center gap-2 text-4xl">
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

  const currentCat = catImages[Math.min(noCount, catImages.length - 1)];

  return (
    <div className="valentine-card max-w-md mx-4">
      {/* Cat image */}
      <div className={shaking ? "animate-shake" : ""}>
        <img
          src={currentCat}
          alt="Valentine cat"
          className="w-28 h-28 mx-auto mb-4 object-contain transition-all duration-300"
        />
      </div>

      {/* Message under cat */}
      {noCount > 0 && (
        <p
          className="text-sm md:text-base font-semibold mb-4 transition-all duration-300"
          style={{
            color: noCount <= 3
              ? "hsl(var(--valentine-purple))"
              : "hsl(var(--accent))",
            fontSize: `${Math.min(0.875 + noCount * 0.05, 1.25)}rem`,
          }}
        >
          {angryMessages[noCount - 1]}
        </p>
      )}

      {/* Title */}
      <h1
        className="text-4xl md:text-5xl mb-2"
        style={{ color: "hsl(var(--valentine-rose))" }}
      >
        Will You Be
      </h1>
      <h1
        className="text-4xl md:text-5xl mb-6"
        style={{ color: "hsl(var(--valentine-purple))" }}
      >
        My Valentine? 💌
      </h1>

      {/* Buttons */}
      <div className="flex items-center justify-center gap-4 flex-wrap">
        <button
          onClick={handleYes}
          className="btn-yes"
          style={{
            transform: `scale(${yesScale})`,
            padding: `${12 + noCount * 4}px ${32 + noCount * 8}px`,
            fontSize: `${1 + noCount * 0.1}rem`,
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
