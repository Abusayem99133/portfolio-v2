import { motion } from "framer-motion";
import CustomTitle from "./CustomTitle";
import InteractiveButton from "./InteractiveButton";
import { contactData } from "./data/config";
const ContactUs = () => {
  return (
    <article
      className="relative font-sans text-white rounded-lg p-16 "
      id="contact"
    >
      <header className="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#007cda] via-[#785ae4] to-primary opacity-15 blur-[40px] left-10 top-0 hidden md:block"></header>
      <header className="absolute w-1/2 aspect-[16/5] -skew-x-12 rounded-full bg-gradient-to-r from-[#007cda] via-[#785ae4] to-primary opacity-15 blur-[40px] right-10 bottom-0 hidden md:block"></header>

      <header>
        <CustomTitle title={"Get in Touch"} />
      </header>
      <section className="grid grid-cols-1 md:grid-cols-2 mt-32 ">
        <section>
          {contactData?.map((data) => (
            <motion.article
              key={data?.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <div className="bg-black z-20 md:w-11/12 w-full text-white rounded-xl">
                <div className="border border-primary bg-[#ffffff29] rounded-xl p-3 flex items-center">
                  <img
                    src={data?.icon}
                    alt={data?.title}
                    width={64}
                    height={64}
                  />
                  <div>
                    <h3 className="text-xl font-semibold "> {data?.title}</h3>
                    <p className="text-sm"> {data?.description}</p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </section>
      </section>
    </article>
  );
};

export default ContactUs;
