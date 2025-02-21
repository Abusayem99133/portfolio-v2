import { motion } from "framer-motion";
import { experience, education } from "./data/config";
import CustomTitle from "./CustomTitle";

const SectionItem = ({ title, subtitle, year, details, icon }) => (
  <motion.article
    className="relative flex flex-col justify-end px-2 gap-3 rounded-lg cursor-pointer 
             before:absolute before:inset-0 before:rounded-[10px] before:bg-gradient-to-br 
             before:from-primary before:to-secondary before:z-[-10] before:h-full 
             after:absolute after:inset-0 after:bg-gradient-to-br after:from-secondary 
             after:to-primary after:scale-[0.95] after:blur-[20px] hover:after:blur-[30px] 
             after:h-full mt-10"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <section className="bg-black z-20 text-white rounded-xl h-full flex flex-col">
      <section className="border border-primary bg-[#ffffff29] rounded-xl p-3 flex items-center gap-5 h-full">
        <img src={icon} alt="icon" width={64} height={64} />
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-1">{title}</h3>
          <p className="text-sm mb-1">{subtitle}</p>
          <p className="text-sm italic">{year}</p>
          {details && <p className="text-sm">{details}</p>}
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
      <CustomTitle title={"Education & Experience"} />

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-32">
        {education?.map((edu) => (
          <SectionItem
            key={edu?.id}
            title={edu?.degree} // ✅ `title` হিসেবে `degree` পাঠানো হচ্ছে
            subtitle={edu?.institution} // ✅ `subtitle` হিসেবে `institution` পাঠানো হচ্ছে
            year={edu?.year}
            details={edu?.details}
            icon={edu?.icon}
          />
        ))}
        {experience?.map((exp) => (
          <SectionItem
            key={exp?.id}
            title={exp?.title} // ✅ `title` হিসেবে `degree` পাঠানো হচ্ছে
            subtitle={exp?.company} // ✅ `subtitle` হিসেবে `company` পাঠানো হচ্ছে
            year={exp?.year}
            details={exp?.description} // ✅ `details` হিসেবে `description` পাঠানো হচ্ছে
            icon={exp?.icon}
          />
        ))}
      </section>
    </section>
  );
};

export default EducationAndExperience;
