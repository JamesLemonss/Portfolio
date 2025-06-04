import { FlipWords } from "./FlipWords"
import { motion } from "motion/react";

const HeroText = () => {
  const words=["Packet Pirate","Crypto Critter", "Phish Fighter", "RAM Rascal", "Data Dragon"];
  const variants = {
    hidden: { opacity:0 , x: -50 },
    visible: { opacity:1, x: 0 },
  };
  return (
    <div className="z-10 mt-20
    text-center md:mt-40 md:text-left
    rounded-3xl bg-clip-text">
        {/* Desktop View */}
        <div className="flex-col hidden md:flex c-space">
            <motion.h1 className="text-4xl font-light text-[#FBF7BA]"
            variants={variants} 
            initial="hidden"
            animate="visible"
            transition={{delay: 1}}
            >Hi, I'm James</motion.h1>
            <div className="flex flex-col items-start">
                <motion.p className="text-5xl font-light text-[#FBF7BA]" 
                variants={variants} 
                initial="hidden"
                animate="visible"
                transition={{delay: 1.2}}>Program pops,
                    <br /> Programmer panik
                </motion.p>
                <motion.div 
                variants={variants} 
                initial="hidden"
                animate="visible"
                transition={{delay: 1.5}}>
                    <FlipWords words={words} 
                className="font-black text-[#FAEBD7] text-7xl"
                />
                </motion.div>
                <motion.p className="text-4xl font-medium text-[#FBF7BA]" 
                variants={variants} 
                initial="hidden"
                animate="visible"
                transition={{delay: 1.8}}>
                    Web Solutions
                    </motion.p>
            </div>
        </div>
        {/* Mobile View */}
        <div className="flex- flex-col space-y-6 md:hidden">
            <motion.p className="text-4xl font-medium" 
            variants={variants} 
                initial="hidden"
                animate="visible"
                transition={{delay: 1}}>Hi, I'm James</motion.p>
            <div>
                <motion.p className="text-5xl font-black
                text-neutral-300" 
                variants={variants} 
                initial="hidden"
                animate="visible"
                transition={{delay: 1.2}}>Building</motion.p>
                <motion.div 
                variants={variants} 
                initial="hidden"
                animate="visible"
                transition={{delay: 1.5}}>
                    <FlipWords words={words} 
                className="font-bold text-white text-6xl"
                />
                </motion.div>
                <motion.p className="text-4xl font-black text-neutral-300" 
                variants={variants} 
                initial="hidden"
                animate="visible"
                transition={{delay: 1.8}}>Web Applications</motion.p>
            </div>
        </div>
        </div>
  )
}

export default HeroText