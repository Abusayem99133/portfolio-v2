import { motion } from "framer-motion";
import CustomTitle from "./CustomTitle";
import { experience, education } from "./data/config";
const sectionItem = ({ title, subtitle, year, details, icon }) => (
  <motion.article
    className="relative flex flex-col justify-end px-2 gap-3 rounded-lg cursor-pointer before:absolute before:inset-[10px] before:rounded-[10px] before:bg-gradient-to-br before:from-primary before:to-secondary before:z-[-10] after:absolute after:indent-0 after:bg-gradient-to-br after:from-secondary after:to-primary after:scale-[0.95] after:blur-[20px] hover:after:blur-[30px] mt-10"
    initial={{
      opacity: 0,
      y: 50,
    }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: false }}
  >
    <section className="bg-black z-20 text-white rounded-xl">
      <section className="border border-primary bg-[#ffffff29] rounded-xl p-3 flex items-center ">
        <img src={icon} alt="icon" width={64} height={64} />
        <div className="mt-10">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-sm "> {subtitle}</p>
          <p className=" text-sm italic">{year}</p>
          {details && <p className="mt-2"> {details}</p>}
        </div>
      </section>
    </section>
  </motion.article>
);
const EducationAndExperience = () => {
  return (
    <section
      className="relative container mx-auto px-4 py-12 lg:p-16"
      id="experience"
    >
      <CustomTitle text="Education & Experience " />
    </section>
  );
};

export default EducationAndExperience;
