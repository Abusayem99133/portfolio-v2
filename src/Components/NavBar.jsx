import { stagger, useAnimate } from "framer-motion";
import { useEffect, useState } from "react";

const Path = (props) => (
  <path
    fill="transparent"
    strokeWidth="3"
    stroke="white"
    strokeLinecap="round"
    {...props}
  />
);

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (!isOpen) return;
    animate([
      ["path.top", { d: "M 3 16.5 L 17 2.5" }, { at: "<" }],
      ["path.middle", { opacity: 0 }, { at: "<" }],
      ["path.bottom", { d: "M 3 2.5 L 17 16.346" }, { at: "<" }],
      ["nav", { transform: "translateX(0%)" }, { duration: 0.6 }],
      [
        "li",
        { transform: "scale(1)", opacity: 1, filter: "blur(0px)" },
        { delay: stagger(0.05), at: "-0.1" },
      ],
    ]);
  }, [animate]);

  const handleNavItemClick = (sectionId) => {
    setIsOpen(false);

    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 300); // 300ms wait দাও যেন animation শেষ হয়
  };

  // Close menu when scrolling is done
  useEffect(() => {
    const handleScroll = () => {
      setIsOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const NavItems = [
    { id: "services", text: "What I Offer?" },
    { id: "skills", text: "My Skills" },
    { id: "experience", text: "Education & Experience" },
    { id: "work", text: "My Work" },
    { id: "contact", text: "Contact" },
  ];

  return (
    <div className="relative flex justify-between px-12 py-2">
      <div ref={scope} className="relative">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="absolute top-4 z-40 left-4 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center"
        >
          <svg width={23} height={18} viewBox="0 0 23 18">
            <Path d="M 2 2.5 L 20 2.5" className="top" />
            <Path d="M 2 9.423 L 20 9.423" className="middle" opacity="1" />
            <Path d="M 2 16.346 L 20 16.346" className="bottom" />
          </svg>
        </button>
        <nav
          className={`fixed top-0 left-0 h-full w-72 z-30 flex items-center bg-gradient-to-br from-primary to-secondary transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-500`}
        >
          <ul className="flex flex-col p-6">
            {NavItems.map((item) => (
              <li key={item.id} className="text-white text-4xl font-bold mt-10">
                <a
                  href={`#${item.id}`}
                  onClick={() => handleNavItemClick(item.id)}
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <h1 className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary top-8 right-8 p-8 lg:top-12 lg:pr-16">
        MRS
      </h1>
    </div>
  );
};

export default NavBar;
