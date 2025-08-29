import Link from "next/link";
import { CircleUser, Search, ShoppingBag, Menu } from "lucide-react";
import { MobileMenuButton } from "./mobile-menu-button";
// import Logo from "./logo";

export const navLink =
  "relative text-text/80 hover:text-text transition-colors duration-200 ease-out transform-gpu \
   after:absolute after:inset-x-0 after:-bottom-1 after:mx-auto after:h-[2px] after:w-0 \
   after:rounded-full after:bg-primary after:transition-[width] after:duration-300 after:ease-out \
   hover:after:w-full";

export const iconStyles =
  "inline-flex items-center justify-center outline-none \
  text-text/70 hover:text-text focus-visible:ring-2 focus-visible:ring-ring \
  transition-colors transition-transform duration-200 ease-out transform-gpu \
  hover:-translate-y-0.5 active:translate-y-0 active:scale-95 cursor-pointer";

export default function SiteHeader() {
  return (
    <header className="border-b-primary text-text w-full border-b py-6 shadow-lg">
      {/*DESKTOPS */}
      <div className="hidden w-full flex-row items-center justify-between px-12 md:flex">
        <Link
          href="/"
          className="font-accent text-3xl font-semibold lg:text-4xl"
        >
          Violà
        </Link>
        <nav className="font-heading flex h-fit gap-10 pt-1 text-base lg:gap-20 lg:text-xl">
          <Link href="/new" className={navLink}>
            New
          </Link>
          <Link href="/hijabs" className={navLink}>
            Hijabs
          </Link>
          <Link href="/accessiores" className={navLink}>
            Accessiores
          </Link>
          <Link href="/signup" className={navLink}>
            Rewards
          </Link>
          <Link href="/contact" className={navLink}>
            Contact
          </Link>
        </nav>
        <div className="mt-1 flex justify-around">
          <div className="flex gap-5">
            <Search strokeWidth={1.3} size={25} className={iconStyles} />
            <CircleUser strokeWidth={1.3} className={iconStyles} />
            <ShoppingBag strokeWidth={1.3} className={iconStyles} />
          </div>
        </div>
      </div>
      {/* TABLET/MOBILE */}
      <div className="grid grid-cols-3 items-center px-4 md:hidden">
        {/* Left: menu + search */}
        <div className="flex items-center gap-4">
          <MobileMenuButton />
          <button aria-label="Search">
            <Search strokeWidth={1.3} size={22} />
          </button>
        </div>

        {/* Center: brand */}
        <div className="flex justify-center">
          <Link href="/" className="font-accent text-4xl font-semibold">
            Violà
          </Link>
        </div>

        {/* Right: user + cart */}
        <div className="flex items-center justify-end gap-4">
          <Link href="/account" aria-label="Account">
            <CircleUser strokeWidth={1.3} size={22} />
          </Link>
          <Link href="/cart" aria-label="Cart">
            <ShoppingBag strokeWidth={1.3} size={22} />
          </Link>
        </div>
      </div>
    </header>
  );
}
