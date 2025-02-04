import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative w-full">
      <header className="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#007cda] via-[#785ae4] to-primary opacity-15 blur-[40px] left-10 top-0 hidden md:block"></header>
      <header className="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#007cda] via-[#785ae4] to-primary opacity-15 blur-[40px] right-10 bottom-0 hidden md:block"></header>
      <section className="w-full px-5 sm:px-8 md:px-12 lg:px-0 max-w-screen-lg lg:max-w-screen-xl mx-auto relative">
        <article className="grid lg:grid-cols-2 gap-10 xl:gap-6 relative pt-24 lg:max-w-none max-w-2xl md:max-w-3xl mx-auto">
          <section className="ml-0 md:ml-12">
            <header className="text-center lg:text-left">
              <h1 className="pt-4 text-white font-bold text-4xl md:text-5xl lg:text-6xl">
                Hi, I'm
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary">
                  Md. Rokonuzzaman Sayem
                </span>
              </h1>
            </header>
            <p className="text-gray-300 pt-8 text-center lg:text-left mx-auto max-w-[370px] md:max-w-xl">
              Frontend Developer
            </p>
            <section className="flex items-center gap-3 pt-9 flex-col sm:flex-row sm:mx-auto lg:mx-0">
              <figure className="w-56">
                <button className="text-white">Hire me</button>
              </figure>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="flex items-center px-4 py-2 bg-transparent text-primary border border-primary rounded-3xl"
              >
                <svg viewBox="0 0 24 24" width={40} height={40} fill="none">
                  <motion.path
                    d="M12 3V16M12 16L7 11M12 16L17 11M5 21H19"
                    stroke="#FFC107"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5 },
                    }}
                  />
                </svg>
                <span>Download Resume</span>
              </motion.button>
            </section>
          </section>
        </article>
      </section>
    </section>
  );
};

export default HeroSection;
