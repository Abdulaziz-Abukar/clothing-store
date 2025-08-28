import Link from "next/link";
import { CircleUser, Search, ShoppingBag, Menu } from "lucide-react";
// import Logo from "./logo";

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
          <Link href="/new">New</Link>
          <Link href="/hijabs">Hijabs</Link>
          <Link href="/accessiores">Accessiores</Link>
          <Link href="/signup">Rewards</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div className="mt-1 flex justify-around">
          <div className="flex gap-5">
            <Search strokeWidth={1.3} size={25} />
            <CircleUser strokeWidth={1.3} />
            <ShoppingBag strokeWidth={1.3} />
          </div>
        </div>
      </div>
      {/* TABLET/MOBILE */}
      <div className="grid grid-cols-3 items-center px-4 md:hidden">
        {/* Left: menu + search */}
        <div className="flex items-center gap-4">
          <button aria-label="Open menu">
            <Menu strokeWidth={1.3} size={24} />
          </button>
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
