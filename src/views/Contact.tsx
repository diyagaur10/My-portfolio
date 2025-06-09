// assets
import { useState, ChangeEvent } from "react";
import contactPageImg from "../assets/contact-page.svg";
import contactIllustration from "../assets/contact-illustration.svg";

// components
import { Button, LabelInput, Reveal } from "../components";

// framer-motion
import { motion } from "framer-motion";

// utils
import { fadeIn, scale } from "../utils/variants";
import { transition } from "../utils/transition";

const Contact = () => {
  const [name, setName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");

  const recipientEmail = "diyagaur59@gmail.com";

  const handleSendMessage = () => {
    if (!name.trim() || !senderEmail.trim() || !message.trim()) {
      alert("Please fill in all fields.");
      return;
    }
    // Basic email validation
    if (!/^\S+@\S+\.\S+$/.test(senderEmail)) {
      alert("Please enter a valid email address.");
      return;
    }
    const subject = encodeURIComponent(`Project Inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${senderEmail}\n\nMessage:\n${message}`);
    window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
  };
  return (
    <div
      id="contact"
      className="min-h-screen flex items-center justify-center relative"
      style={{
        background: `url(${contactPageImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        className="max-w-screen-2xl flex flex-col xl:flex-row xl:justify-between
      items-center xl:items-start gap-12 w-full pt-20 pb-20 sm:pb-16 px-12"
      >
        <div className="flex-1 flex flex-col gap-4">
          <Reveal>
            <h2
              className="text-center xl:text-start text-4xl sm:text-5xl lg:text-[64px] 
              font-bold text-textPrimary"
            >
              Got a project in<span className="text-secondary"> mind?</span>
            </h2>
          </Reveal>

          <motion.img
            variants={scale()}
            transition={transition()}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            src={contactIllustration}
            alt=""
            className="max-h-[348px]"
          />
        </div>

        <motion.div
          variants={fadeIn("up")}
          transition={transition()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="flex-1 flex flex-col gap-6 w-full max-w-[696px]"
        >
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <LabelInput
              labelText="Your name"
              placeholderText="Name"
              value={name}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
            />
            <LabelInput
              labelText="Your email"
              placeholderText="Email"
              value={senderEmail}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setSenderEmail(e.target.value)}
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <LabelInput
              labelText="Your message"
              placeholderText="Message"
              value={message}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setMessage(e.target.value)}
              textarea
            />
          </div>

          <Button secondary onClick={handleSendMessage}>
            Send Message
          </Button>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-divider" />
    </div>
  );
};

export default Contact;
