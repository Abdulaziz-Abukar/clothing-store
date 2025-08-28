import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/logo.png"
      alt="Clothing Store Logo"
      width={100}
      height={10}
      priority
    />
  );
}
