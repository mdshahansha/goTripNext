import dynamic from "next/dynamic";
import Header10 from "@/components/header/header-10";
import Hero10 from "@/components/hero/hero-10";
import Link from "next/link";
import Footer8 from "@/components/footer/footer-2";


export const metadata = {
  title: "Home-10 ||Travel & Tour React NextJS Template",
  description: "Travel & Tour React NextJS Template",
};

const home_10 = () => {
  return (
    <>
      {/* End Page Title */}

      <Header10 />
      {/* End Header 5 */}

      <Hero10 />
      {/* End Hero 5 */}

      <Footer8 />
      {/* End Footer Section */}
    </>
  );
};

export default dynamic(() => Promise.resolve(home_10), { ssr: false });
