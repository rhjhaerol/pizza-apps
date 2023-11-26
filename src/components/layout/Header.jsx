import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <Link className="text-primary text-2xl font-semibold" href={""}>
        ST PIZZA
      </Link>

      <nav className="flex items-center gap-6 text-gray-500 font-semibold">
        <Link href={""}>Home</Link>
        <Link href={""}>Menu</Link>
        <Link href={""}>About</Link>
        <Link href={""}>Contact</Link>
        <Link
          href={""}
          className="bg-primary text-white rounded-full px-8 py-1"
        >
          Login
        </Link>
      </nav>
    </header>
  );
};

export default Header;
