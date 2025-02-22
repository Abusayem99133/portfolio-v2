import { motion } from "framer-motion";

const Footer = () => {
  const sentence = "All rights reserved";
  const letters = sentence.split("");
  const variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="relative z-10 text-white border-t-2 border-t-white mt-20">
      <div className="container p-8 flex justify-between">
        <div className="flex">
          {" "}
          <h1 className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary">
            MRS
          </h1>
        </div>
        <nav className="flex ml-2">
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              variants={variants}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`inline-block ${letter === " " ? "mr-4" : "mr-1"}`}
            >
              {letter}
            </motion.span>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
