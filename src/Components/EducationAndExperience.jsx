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
  ></motion.article>
);
const EducationAndExperience = () => {
  return (
    <div>
      <h1>Education And Experience</h1>
    </div>
  );
};

export default EducationAndExperience;
