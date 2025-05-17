import TextSplit from "../shared/animations/TextSplit";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section
      className="contact-section bg w-full px-4 pt-[10vw] pb-[4vw]"
      id="contact-id"
    >
      <div className="title text-center">
        <h2 className="contact-title text-[10vw] max-lg:text-[14vw] max-sm:text-[16vw] leading-[.8] textt tracking-tighter font-extrabold">
          <span className="line block overflow-hidden">
            <TextSplit text="contact"></TextSplit>
          </span>
        </h2>
      </div>
      <div className="contact-para text-center text-4xl max-md:text-3xl max-sm:text-xl ll flex justify-center pt-[6vw]">
        <p className="w-[70%] max-xl:w-[80%] max-lg:w-[90%] max-md:w-full">
          {`Got a project that needs a cinematic touch? Let’s create something
          impactful together. Whether it’s high-quality edits, creative
          collaborations, or just a chat about visuals, music, and
          storytelling I'm in. Let’s connect!`}
        </p>
      </div>
      <div className="pt-[4vw] flex justify-center">
        <ContactForm></ContactForm>
      </div>
    </section>
  );
};

export default Contact;
