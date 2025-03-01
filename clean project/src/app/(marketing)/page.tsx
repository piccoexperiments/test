import Wrapper from "@/components/global/wrapper";
import Features from "@/components/marketing/features";
import Hero from "@/components/marketing/hero";

const HomePage = () => {
  return (
    <Wrapper className="py-20 relative">
      <Hero />
      <Features />
    </Wrapper>
  );
};

export default HomePage;