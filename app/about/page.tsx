import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { siteConfig } from '@/config/site';

export default async function AboutPage() {
  return (
    <div className="container max-w-6xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-x-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">
            About Me
          </h1>
        </div>
      </div>
      <hr className="my-8"></hr>
      <div className="min-w-48 max-w-48 flex flex-col gap-2">
        <Avatar className="h-48 w-48 ">
          <AvatarImage src="/avatar.png"></AvatarImage>
          <AvatarFallback>BG</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
