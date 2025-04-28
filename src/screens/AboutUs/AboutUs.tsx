import { AboutUs4 } from "../../components/AboutUs4";
import { AboutUs3 } from "../../components/AboutUs3";
import { AboutUs2 } from "../../components/AboutUs2";
import { AboutUs1 } from "../../components/AboutUs1";

export const AboutUs = (): JSX.Element => {
  return (
    <main className="flex flex-col w-full min-h-screen items-center gap-4 px-20 py-8 relative overflow-hidden bg-[url(..//about-us.png)] bg-cover bg-center">
      <header className="inline-flex items-center justify-center gap-2 relative mb-4">
        <h1 className="w-full font-['Roboto',Helvetica] font-bold text-white text-[57px] text-center tracking-[-0.14px] leading-[64px]">
          ...
        </h1>
      </header>
      <header className="inline-flex items-center justify-center gap-2 relative mb-4">
        <h1 className="w-full font-['Roboto',Helvetica] font-bold text-white text-[57px] text-center tracking-[-0.14px] leading-[64px]">
          About Us
        </h1>
      </header>

      <section className="w-full">
        <AboutUs2 />
      </section>
      
      <section className="w-full">
        <AboutUs1 />
      </section>


      <section className="w-full">
        <AboutUs3 />
      </section>

      <section className="w-full">
        <AboutUs4 />
      </section>
    </main>
  );
};
