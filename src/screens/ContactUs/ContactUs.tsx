import { MailIcon, PhoneIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";

export const ContactUs = (): JSX.Element => {
  return (
    <div
      className="flex flex-col min-h-screen items-center justify-center gap-4 px-4 md:px-20 py-0 relative bg-cover bg-center"
      style={{ backgroundImage: "url(..//bg1.png)" }}
    >
      {/* Contact Form Section */}
      <section className="flex flex-col items-center justify-center gap-2 px-0 py-8 relative self-stretch w-full flex-[0_0_auto] bg-[#0f131ba6]">
        <header className="flex items-center justify-center gap-2 px-4 md:px-[428px] py-0 relative self-stretch w-full flex-[0_0_auto]">
          <h1 className="relative w-fit mt-[-1.00px] font-bold text-gray-300 text-3xl text-center tracking-[0] leading-9 whitespace-nowrap">
            ---
          </h1>
        </header>
        <header className="flex items-center justify-center gap-2 px-4 md:px-[428px] py-0 relative self-stretch w-full flex-[0_0_auto]">
          <h1 className="relative w-fit mt-[-1.00px] font-bold text-gray-300 text-3xl text-center tracking-[0] leading-9 whitespace-nowrap">
            Contact Us
          </h1>
        </header>

        <Card className="border-none w-full max-w-4xl bg-[#181e28] rounded-lg overflow-hidden">
          <CardContent className="flex flex-col items-start gap-4 p-8">
            <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
              <label className="font-bold text-gray-300 text-lg tracking-[0] leading-7 whitespace-nowrap">
                Name
              </label>
            </div>

            <Input
              className="w-full bg-gray-700 text-[#b2b2b2] rounded p-4 border-0"
              placeholder="Your Name"
            />

            <div className="inline-flex items-center justify-center gap-2 relative flex-[0_0_auto]">
              <label className="font-bold text-gray-300 text-lg tracking-[0] leading-7">
                Email
              </label>
            </div>

            <Input
              className="w-full bg-gray-700 text-[#b2b2b2] rounded p-4 border-0"
              placeholder="Your Email"
              type="email"
            />

            <div className="inline-flex items-center justify-center gap-2 relative flex-[0_0_auto]">
              <label className="font-bold text-gray-300 text-lg tracking-[0] leading-7">
                Message
              </label>
            </div>

            <Textarea
              className="w-full bg-gray-700 text-[#b2b2b2] rounded p-4 min-h-[100px] border-0"
              placeholder="Your Message"
            />

            <Button className="w-full bg-[#ff4b2b] hover:bg-[#ff3b1b] text-white py-[7px] rounded border-0">
              Send Message
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Location & Map Section */}
      <section className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto] bg-[#00000080]">
        <header className="flex items-center justify-center gap-2 px-4 md:px-[365px] py-0 relative self-stretch w-full flex-[0_0_auto]">
          <h2 className="relative w-fit mt-[-1.00px] font-bold text-gray-300 text-3xl text-center tracking-[0] leading-9 whitespace-nowrap">
            Location &amp; Map
          </h2>
        </header>

        <div className="flex flex-col md:flex-row items-start gap-9 relative self-stretch w-full flex-[0_0_auto]">
          <Card className="border-none flex flex-col items-start gap-2 p-6 relative flex-1 self-stretch grow bg-[#181e28] rounded-lg">
            <CardContent className="p-0">
              <div className="inline-flex items-center justify-center gap-2 relative flex-[0_0_auto]">
                <h3 className="relative w-fit mt-[-1.00px] font-bold text-gray-300 text-xl tracking-[0] leading-7 whitespace-nowrap">
                  Our Address
                </h3>
              </div>

              <div className="flex flex-col items-start relative flex-[0_0_auto] mt-2">
                <p className="relative self-stretch mt-[-1.00px] font-normal text-gray-300 text-lg tracking-[0] leading-7">
                  123 Fitness St,
                </p>
                <p className="relative self-stretch font-normal text-gray-300 text-lg tracking-[0] leading-7">
                  Healthy City, HC 12345
                </p>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col items-center justify-center relative self-stretch flex-1">
            <img
              className="relative max-w-full h-auto object-cover rounded-lg"
              alt="Map location"
              src="/maps.png"
              width={500}
              height={500}
            />
          </div>
        </div>
      </section>

      {/* Customer Support Section */}
      <section className="flex flex-col items-start gap-2 px-4 md:px-16 py-14 relative self-stretch w-full flex-[0_0_auto] bg-[#00000080]">
        <Card className="border-none w-full bg-[#181e28] rounded-lg overflow-hidden">
          <CardContent className="flex flex-col items-start gap-[35px] px-8 py-6">
            <div className="flex flex-col w-full items-start gap-3 relative flex-[0_0_auto]">
              <div className="flex items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                <h2 className="relative w-full mt-[-1.00px] font-bold text-white text-2xl tracking-[0] leading-8">
                  Customer Support
                </h2>
              </div>

              <div className="flex items-center justify-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
                <p className="relative w-full mt-[-1.00px] font-normal text-white text-lg tracking-[0] leading-7">
                  For any inquiries, please contact us:
                </p>
              </div>

              <div className="flex items-center gap-2 px-[18px] py-0 relative self-stretch w-full flex-[0_0_auto]">
                <MailIcon className="w-[18px] h-[13.5px] text-white" />
                <span className="relative w-fit mt-[-1.00px] font-normal text-white text-lg tracking-[0] leading-7 whitespace-nowrap">
                  Email:
                </span>
                <a
                  href="mailto:support@example.com"
                  className="relative w-fit mt-[-1.00px] font-normal text-blue-400 text-lg tracking-[0] leading-7 whitespace-nowrap"
                >
                  support@example.com
                </a>
              </div>

              <div className="flex items-center gap-2 px-[18px] py-0 relative self-stretch w-full flex-[0_0_auto]">
                <PhoneIcon className="w-[18px] h-[18px] text-white" />
                <span className="relative w-fit mt-[-1.00px] font-normal text-white text-lg tracking-[0] leading-7 whitespace-nowrap">
                  Phone:
                </span>
                <a
                  href="tel:+15551234567"
                  className="relative w-fit mt-[-1.00px] font-normal text-blue-400 text-lg tracking-[0] leading-7 whitespace-nowrap"
                >
                  +1 (555) 123-4567
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};
