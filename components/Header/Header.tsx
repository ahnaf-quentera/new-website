import Image from "next/image";
import AuthButtons from "../Auth/AuthButtons";
import { ModeToggle } from "./ThemeToggle";

const Header = () => {
  return (
    <header className="bg-header-background sticky top-0 z-10 shadow-[0_4px_6px_-1px_#0003,0_2px_4px_-1px_#0000001f]">
      <div className="mx-auto flex w-full h-15 items-center justify-between max-w-[calc(1200px+6vw)] px-[3vw]">
        <Image
          src="/light-logo.png"
          alt="Logo"
          width={163}
          height={24}
          priority
          className="light-only cursor-pointer h-auto w-32 shrink-0 lg:w-40"
        />

        <div className="flex items-center gap-2">
          <ModeToggle />
          <AuthButtons />
        </div>
      </div>
    </header>
  );
};

export default Header;
