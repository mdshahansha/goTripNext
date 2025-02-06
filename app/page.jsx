import Wrapper from "@/components/layout/Wrapper";
import MainHome from "../app/(homes)/home_10/page";

export const metadata = {
  title: "Homepage || Travel & Tour React NextJS Template",
  description: "Travel & Tour React NextJS Template",
};

export default function Home() {
  return (
    <>
      <Wrapper>
        <MainHome />
      </Wrapper>
    </>
  );
}
