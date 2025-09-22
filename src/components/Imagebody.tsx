import { motion } from "framer-motion"

export default function Imagebody() {
  return (
    <section className="w-full h-screen bg-black flex justify-center items-start relative">
      <motion.img
        src="/Group 6.jpg" // replace with your image path
        alt="Custom Image"
        className="absolute object-cover"
        style={{
          width: "1300px",
          height: "750px",
          top: "0px",
          bottom: "100px",
          left: "100px",
          borderTopRightRadius: "20px",
          borderBottomRightRadius: "20px",
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        whileHover={{
          scale: 1.1,
          transition: {
            duration: 1, // 1000ms
            ease: "easeOut",
          },
        }}
      />
    </section>
  )
}
