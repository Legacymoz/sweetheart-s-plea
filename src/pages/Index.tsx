import FloatingHearts from "@/components/FloatingHearts";
import FloatingCats from "@/components/FloatingCats";
import ValentineCard from "@/components/ValentineCard";

const Index = () => {
  return (
    <div
      className="flex min-h-screen items-center justify-center relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, hsl(var(--valentine-light)), hsl(var(--valentine-pink) / 0.3), hsl(var(--valentine-purple) / 0.15))`,
      }}
    >
      <FloatingHearts />
      <FloatingCats />
      <div className="relative z-10">
        <ValentineCard />
      </div>
    </div>
  );
};

export default Index;
