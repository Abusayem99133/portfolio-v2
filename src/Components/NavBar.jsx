import { stagger, transform, useAnimate } from "framer-motion";
import { useEffect, useState } from "react";

const path = (props) => {
  <path
    fill="transparent"
    strokeWidth="3"
    stroke="white"
    strokeLinecap="round"
    {...props}
  />;
};
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scope, animate] = useAnimate();
  useEffect(() => {
    const menuAnimations = isOpen
      ? [
          [
            "nav",
            {
              transform: "translatex(0%)",
            },
            { ease: [0.08, 0.65, 0.53, 0.96], duration: 0.6 },
          ],
          [
            "li",
            { transform: "scale()0.5", opacity: 0, filter: "blur(10px)" },
            { delay: stagger(0.05), at: "-0.1" },
          ],
        ]
      : [
          [
            "li",
            { transform: "scale(0.5)", opacity: 0, filter: "blur(10px)" },
            { delay: stagger(0.05, { from: "last" }), at: "<" },
          ],
          ["nav", { transform: "translateX(-100%)" }, { at: "-0.1" }],
        ];
    // animate path and menu
    animate([
      [
        "path.top",
        { d: isOpen ? "M 3 16.5 L 17 2.5" : "M 2 2.5 L 20 2.5" },
        { at: "<" },
      ],
      ["path.middle", { opacity: isOpen ? 0 : 1 }, { at: "<" }],
      [
        "path.bottom",
        { d: isOpen ? "M 3 2.5 L 17 16.346" : "M 2 16.346 L 20 16.346" },
        { at: "<" },
      ],
      ...menuAnimations,
    ]);
  }, [isOpen, animate]);
  const handleNavItemClick = (sectionId) => {
    setIsOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  const NavItems = [
    { id: "services", text: "what i offer?" },
    { id: "skills", text: "My Skills" },
    { id: "experience", text: "Education & Experience" },
    { id: "work", text: "My Work" },
    { id: "contact", text: "Contact" },
  ];
  return <div className="relative"></div>;
};

export default NavBar;
