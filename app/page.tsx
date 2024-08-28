"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { Palette, Laptop, Brush, Layers } from "lucide-react";
import confetti from "canvas-confetti";

import elisha from "@/public/him.jpeg";

const TerminalBirthdayAnimation = () => {
  const [text, setText] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);
  const controls = useAnimation();

  const command = "sudo apt-get install wish-from-bossadizenith".split("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < command.length) {
        setText((prev) => prev + command[i]);
        i++;
      } else {
        clearInterval(interval);
        controls.start({ width: "100%" });
        setTimeout(() => {
          setShowConfetti(true);
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (showConfetti) {
      confetti({
        particleCount: 1000,
        spread: 100,
        origin: { y: 0.6 },
      });
    }
  }, [showConfetti]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
        <div className="bg-gray-800 px-4 py-2 flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="p-4 font-mono text-green-400">
          <p className="mb-2">root@birthday-machine:~#</p>
          <div className="flex items-center">
            <span>{text}</span>
            <motion.span
              className="inline-block w-2 h-5 bg-green-400 ml-1"
              animate={{ opacity: [1, 0] }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </div>
          {text === command.join("") && (
            <div className="mt-4">
              <p>Loading birthday wish...</p>
              <motion.div
                className="h-2 bg-purple-500 mt-2"
                initial={{ width: 0 }}
                animate={controls}
                transition={{ duration: 1 }}
              />
            </div>
          )}
        </div>
      </div>
      <AnimatePresence>
        {showConfetti && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-white/10 backdrop-blur-3xl text-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="size-[95%] lg:size-[600px] bg-black/50 rounded-3xl p-10">
              <div className="flex items-center justify-center flex-col gap-10">
                <div className="relative">
                  <Image
                    className="object-cover rounded-full size-[150px] "
                    src={elisha}
                    width={200}
                    height={200}
                    placeholder="blur"
                    alt="Tata ghany"
                  />
                  <Image
                    className="object-cover rounded-full lg:size-[150px] size-32 -top-[45%] absolute lg:-top-[70%] right-[-50%] rotate-45"
                    src="/hat.svg"
                    width={200}
                    height={200}
                    alt="hat"
                  />
                  <Image
                    className="object-cover rounded-full lg:size-[150px] size-32 absolute -top-[45%] lg:-top-[70%] left-[-50%] -rotate-45"
                    src="/hat.svg"
                    width={200}
                    height={200}
                    alt="hat"
                  />
                </div>
                <div>
                  <motion.h1
                    className="text-3xl font-bold mb-4 text-white/80 text-center"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{
                      delay: 0.2,
                      duration: 0.5,
                      type: "spring",
                      stiffness: 200,
                    }}
                  >
                    Happy Birthday, Elisha!
                  </motion.h1>

                  <motion.h2
                    className="text-base font-semibold mb-6 text-white/90 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                  >
                    or should I say Design Preacher?
                  </motion.h2>
                </div>
                <motion.p
                  className="text-xl mb-8 text-white/60"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  May your sermons of creativity inspire and your designs
                  continue to bless the world!
                </motion.p>

                <motion.button
                  className="mt-4 bg-gradient-to-r from-neutral-500 to-zinc-600 text-white px-8 py-3 rounded-full font-bold lg:text-lg text-base transition duration-300 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Spread the Design Gospel!
                </motion.button>
              </div>
            </div>

            <div className="absolute bottom-10 text-white">
              from{" "}
              <Link
                href="https://bossadizenith.vercel.app"
                target="_blank"
                className="hover:underline"
              >
                @bossadizenith
              </Link>
            </div>
            <div className="absolute hidden lg:block right-10 text-white">
              <Brush size={32} />
            </div>
            <div className="absolute hidden lg:block top-10 text-white">
              <Layers size={32} />
            </div>
            <div className="absolute hidden lg:block bottom-20 text-white">
              <Palette size={32} />
            </div>
            <div className="absolute hidden lg:block left-10 text-white">
              <Laptop size={32} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TerminalBirthdayAnimation;
