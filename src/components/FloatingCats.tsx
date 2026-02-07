import { useEffect, useState } from "react";
import catHappy from "@/assets/cat-happy.png";

interface FloatingCat {
  id: number;
  top: number;
  size: number;
  duration: number;
  delay: number;
}

const FloatingCats = () => {
  const [cats, setCats] = useState<FloatingCat[]>([]);

  useEffect(() => {
    const generated: FloatingCat[] = Array.from({ length: 5 }, (_, i) => ({
      id: i,
      top: 10 + Math.random() * 70,
      size: 40 + Math.random() * 30,
      duration: 12 + Math.random() * 10,
      delay: i * 3 + Math.random() * 2,
    }));
    setCats(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {cats.map((cat) => (
        <img
          key={cat.id}
          src={catHappy}
          alt=""
          className="absolute animate-float-across"
          style={{
            top: `${cat.top}%`,
            left: "-100px",
            width: `${cat.size}px`,
            height: `${cat.size}px`,
            animationDuration: `${cat.duration}s`,
            animationDelay: `${cat.delay}s`,
            objectFit: "contain",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingCats;
