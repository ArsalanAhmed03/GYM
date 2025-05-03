import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const Diet1 = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-10 w-full bg-[#0a0a0a80]">
      <h2 className="font-bold text-3xl text-white text-center leading-9 font-['Roboto',Helvetica]">
        Subscribe for Weekly Diet Plans
      </h2>

      <p className="max-w-[489px] font-normal text-white text-base text-center leading-6 font-['Roboto',Helvetica]">
        Get the latest meal plans and nutrition advice delivered to your inbox.
      </p>

      <div className="flex items-center justify-center">
        <div className="flex">
          <Input
            className="w-[245px] h-12 rounded-[8px_0px_0px_8px] font-['Roboto',Helvetica] text-base placeholder:text-[#b2b2b2]"
            placeholder="Enter your email"
          />
          <Button className="w-[119px] h-12 rounded-[0px_8px_8px_0px] bg-red-500 hover:bg-red-600 font-['Roboto',Helvetica] font-normal text-base">
            Subscribe
          </Button>
        </div>
      </div>
    </section>
  );
};
