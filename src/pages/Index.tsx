import FloatingHearts from "@/components/FloatingHearts";
import FloatingCats from "@/components/FloatingCats";
import ValentineCard from "@/components/ValentineCard";

const Index = () => {
  return (
    <div
      className="flex min-h-screen items-center justify-center relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, hsl(280 60% 92%), hsl(300 50% 85%), hsl(340 70% 88%), hsl(280 50% 80%))`,
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
