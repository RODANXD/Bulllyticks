import { motion } from "framer-motion";
import { useState } from "react";
import { FiMail, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";

const ComingSoonPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-700 text-white overflow-hidden relative">
      <motion.div
        className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute rounded-full filter blur-xl"
          style={{
            background: "radial-gradient(circle, rgba(168,85,247,0.4) 0%, rgba(168,85,247,0) 70%)",
            width: "500px",
            height: "500px",
          }}
          initial={{
            x: -100,
            y: -100,
          }}
          animate={{
            x: [null, 100, -50, -100],
            y: [null, 150, 50, -100],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute rounded-full filter blur-xl"
          style={{
            background: "radial-gradient(circle, rgba(236,72,153,0.3) 0%, rgba(236,72,153,0) 70%)",
            width: "600px",
            height: "600px",
          }}
          initial={{
            x: "80%",
            y: "30%",
          }}
          animate={{
            x: ["80%", "70%", "85%", "80%"],
            y: ["30%", "40%", "20%", "30%"],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        />

        <motion.div
          className="absolute rounded-full filter blur-xl"
          style={{
            background: "radial-gradient(circle, rgba(139,92,246,0.3) 0%, rgba(139,92,246,0) 70%)",
            width: "400px",
            height: "400px",
          }}
          initial={{
            x: "20%",
            y: "70%",
          }}
          animate={{
            x: ["20%", "30%", "10%", "20%"],
            y: ["70%", "60%", "80%", "70%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        />
      </motion.div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.header
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center mb-12"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-5xl font-bold tracking-tight mb-4"
          >
            Welcome To <span className="text-purple-400">BULLLYTICS</span>
          </motion.div>
          <motion.p
            className="text-lg text-white text-opacity-80"
          >
            The future of analytics is coming soon
          </motion.p>
        </motion.header>
        <main className="flex flex-col items-center text-center">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-7xl font-bold mb-6 max-w-3xl leading-tight"
          >
            Revolutionizing{" "}
            <motion.span
              animate={{ color: ["#a855f7", "#ec4899", "#8b5cf6"] }}
              transition={{
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              className="font-extrabold"
            >
              Analytics
            </motion.span>{" "}
            Forever
          </motion.h1>

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-white text-opacity-80 mb-12 max-w-2xl"
          >
            We're building the most powerful analytics platform you've ever seen.
            Get ready for a game-changing experience.
          </motion.p>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full max-w-md"
          >
          </motion.div>
        </main>

        <motion.footer
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-32 flex flex-col items-center"
        >
          <div className="flex gap-4 mb-6">
            <motion.a
              whileHover={{ y: -3, scale: 1.1 }}
              href="#"
              className="p-3 bg-white bg-opacity-10 backdrop-blur-md rounded-full hover:bg-opacity-20 transition-all"
            >
              <FiTwitter />
            </motion.a>
            <motion.a
              whileHover={{ y: -3, scale: 1.1 }}
              href="#"
              className="p-3 bg-white bg-opacity-10 backdrop-blur-md rounded-full hover:bg-opacity-20 transition-all"
            >
              <FiInstagram />
            </motion.a>
            <motion.a
              whileHover={{ y: -3, scale: 1.1 }}
              href="#"
              className="p-3 bg-white bg-opacity-10 backdrop-blur-md rounded-full hover:bg-opacity-20 transition-all"
            >
              <FiLinkedin />
            </motion.a>
          </div>
          <p className="text-white text-opacity-60 text-sm">
            © 2025 BULLLYTICS. All rights reserved.
          </p>
        </motion.footer>
      </div>
    </div>
  );
};

export default ComingSoonPage;