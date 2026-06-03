import { useEffect, useState } from "react";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    "HOME",
    "ABOUT US",
    "SERVICES",
    "GALLERY",
    "CONTACT",
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#062B3D]/95 backdrop-blur-md shadow-xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="h-24 flex items-center justify-between">

          {/* Logo */}
          <a href="#">
            <h2 className="text-white text-3xl font-bold tracking-wider">
              PRASHANT
              <span className="text-[#1687B9]">
                TELECOM
              </span>
            </h2>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-10">

            {navLinks.map((item) => (
              <a
                key={item}
                href="#"
                className="
                text-white
                text-sm
                tracking-[2px]
                uppercase
                relative
                group
                "
              >
                {item}

                <span
                  className="
                  absolute
                  left-0
                  -bottom-2
                  h-0.5
                  w-0
                  bg-[#1687B9]
                  transition-all
                  duration-500
                  group-hover:w-full
                  "
                />
              </a>
            ))}

          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;