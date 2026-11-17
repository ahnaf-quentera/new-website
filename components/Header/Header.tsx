import { Button } from '../ui/button';
import { SidebarTrigger } from '../ui/sidebar';

const Header = () => {
  return (
    <header className="bg-background sticky top-0 z-20 shadow-[0_4px_6px_-1px_#0003,0_2px_4px_-1px_#0000001f]">
      <div className="mx-auto flex w-full h-15 items-center justify-between max-w-[calc(1200px+6vw)] px-[3vw]">
        <div className="flex items-center">
          <img
            src="/light-logo.png"
            alt="Logo"
            className="object-contain light-only cursor-pointer lg:w-40"
          />
        </div>
        <div className="flex items-center gap-2">
          <Button variant='secondary'>Sign In</Button>
          <Button>Register</Button>
        </div>
      </div>
    </header>
  )
}

export default Header;