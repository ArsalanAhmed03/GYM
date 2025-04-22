import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Checkbox } from "../components/ui/checkbox";
import { Separator } from "../components/ui/separator";



export const SignUpSection = () => (
    <section className="flex h-[1080px] gap-32 pt-8 pb-16 px-8 self-stretch w-full bg-black flex-col items-center relative">
      <div className="flex flex-col gap-8 self-stretch w-full items-center relative">
        <Card className="inline-flex gap-8 p-8 bg-[#00000099] rounded-2xl flex-col items-center border-none">
          <CardContent className="flex w-[263px] items-center justify-center gap-2 p-0">
            <p className="relative w-fit mt-[-1.00px] ml-[-28.50px] mr-[-28.50px] [font-family:'Roboto',Helvetica] font-bold text-white text-[32px] leading-10">
              SIGN UP FOR ACCESS
            </p>
          </CardContent>
  
          <CardContent className="inline-flex flex-col items-center justify-center gap-2 p-0">
            <p className="relative w-fit mt-[-1.00px] font-m3-headline-small font-[number:var(--m3-headline-small-font-weight)] text-white text-[length:var(--m3-headline-small-font-size)] tracking-[var(--m3-headline-small-letter-spacing)] leading-[var(--m3-headline-small-line-height)] whitespace-nowrap [font-style:var(--m3-headline-small-font-style)]">
              GET THE LATEST HEALTH UPDATES
            </p>
          </CardContent>
        </Card>
      </div>
  
      <div className="flex w-[1276px] items-start justify-center gap-8 relative">
        <Card className="flex flex-col items-start gap-4 p-8 relative flex-1 bg-[#00000099] rounded-2xl border-none">
          <CardContent className="flex w-[263px] items-center gap-2 p-0">
            <label className="relative w-fit mt-[-1.00px] font-m3-headline-small font-[number:var(--m3-headline-small-font-weight)] text-white text-[length:var(--m3-headline-small-font-size)] tracking-[var(--m3-headline-small-letter-spacing)] leading-[var(--m3-headline-small-line-height)] whitespace-nowrap [font-style:var(--m3-headline-small-font-style)]">
              First name
            </label>
          </CardContent>
          <Separator className="w-full h-px" />
        </Card>
  
        <Card className="flex flex-col items-start gap-4 p-8 relative flex-1 bg-[#00000099] rounded-2xl border-none">
          <CardContent className="flex w-[263px] items-center gap-2 p-0">
            <label className="relative w-fit mt-[-1.00px] font-m3-headline-small font-[number:var(--m3-headline-small-font-weight)] text-white text-[length:var(--m3-headline-small-font-size)] tracking-[var(--m3-headline-small-letter-spacing)] leading-[var(--m3-headline-small-line-height)] whitespace-nowrap [font-style:var(--m3-headline-small-font-style)]">
              Last name
            </label>
          </CardContent>
          <Separator className="w-full h-px" />
        </Card>
      </div>
  
      <div className="flex w-[1276px] items-start justify-center gap-8 relative">
        <Card className="flex flex-col items-start gap-4 p-8 relative flex-1 bg-[#00000099] rounded-2xl border-none">
          <CardContent className="flex w-[263px] items-center gap-2 p-0">
            <label className="relative w-fit mt-[-1.00px] font-m3-headline-small font-[number:var(--m3-headline-small-font-weight)] text-white text-[length:var(--m3-headline-small-font-size)] tracking-[var(--m3-headline-small-letter-spacing)] leading-[var(--m3-headline-small-line-height)] whitespace-nowrap [font-style:var(--m3-headline-small-font-style)]">
              Email address
            </label>
          </CardContent>
          <Separator className="w-full h-px" />
        </Card>
  
        <Card className="flex flex-col items-start gap-4 p-8 relative flex-1 bg-[#00000099] rounded-2xl border-none">
          <CardContent className="flex w-[263px] items-center gap-2 p-0">
            <label className="relative w-fit mt-[-1.00px] font-m3-headline-small font-[number:var(--m3-headline-small-font-weight)] text-white text-[length:var(--m3-headline-small-font-size)] tracking-[var(--m3-headline-small-letter-spacing)] leading-[var(--m3-headline-small-line-height)] whitespace-nowrap [font-style:var(--m3-headline-small-font-style)]">
              Phone Number
            </label>
          </CardContent>
          <Separator className="w-full h-px" />
        </Card>
      </div>
  
      <div className="w-[1276px] px-8 py-0 flex items-center gap-2 relative">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="terms"
            className="w-[23px] h-[23px] rounded-sm border border-solid border-white"
          />
          <label
            htmlFor="terms"
            className="relative w-fit mt-[-1.00px] font-m3-title-large font-[number:var(--m3-title-large-font-weight)] text-white text-[length:var(--m3-title-large-font-size)] tracking-[var(--m3-title-large-letter-spacing)] leading-[var(--m3-title-large-line-height)] whitespace-nowrap [font-style:var(--m3-title-large-font-style)]"
          >
            By submitting this form, you accept the Terms &amp; Conditions
          </label>
        </div>
      </div>
  
      <Button className="flex w-56 items-center justify-center gap-2 py-[21px] relative mb-[-24.00px] bg-white text-black">
        <span className="relative w-fit mt-[-1.00px] font-m3-title-small font-[number:var(--m3-title-small-font-weight)] text-[length:var(--m3-title-small-font-size)] tracking-[var(--m3-title-small-letter-spacing)] leading-[var(--m3-title-small-line-height)] whitespace-nowrap [font-style:var(--m3-title-small-font-style)]">
          SIGN UP
        </span>
      </Button>
    </section>
  );
  