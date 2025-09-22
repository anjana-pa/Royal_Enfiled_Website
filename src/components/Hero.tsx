import React from "react";
import { motion } from "framer-motion";
import { FaAngleRight } from "react-icons/fa";

// Types
type Accessory = {
  id: string;
  title: string;
  subtitle?: string;
  image: string;      // Foreground image
  bgImage?: string;   // Background image
};

const playSound = () => {
  const audio = new Audio('/bike_rev.mp3'); 
  audio.play();
};

// Accessories array
const accessories: Accessory[] = [
  {
    id: "helmet",
    title: "Scorpion EXO R320 Helmet",
    subtitle: "Helmet",
    bgImage: "/G.png",
    image: "/helmet.png",
  },
  {
    id: "gloves",
    title: "Bogotto F-ST Gloves",
    subtitle: "Gloves",
    bgImage: "/u.png",
    image: "/glouse.png",
  },
  {
    id: "jacket",
    title: "Icon Motorcycle Jacket",
    subtitle: "Jacket",
    bgImage: "/n.png",
    image: "/jacket.png",
  },
];

// Motion presets
const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Hero() {
  const links = ["Motorcycles", "Locate Us", "Events", "Accessories", "Apparel", "Supports"];

  return (
    <div className="bg-black text-white">

     

      <section className="relative w-full h-[750px] pt-[120px] lg:pt-[150px]"> 
        <motion.h2
          className="absolute text-white whitespace-nowrap"
          style={{
            width: "auto",
            height: "65px",
            top: "50px",
            left: "50px",
            fontFamily: "Bebas Neue",
            fontWeight: 400,
            fontSize: "35px",
          }}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Hunter 350
        </motion.h2>

        {/* Paragraph */}
        <div className="absolute top-[100px] left-[40px] w-[236px]"> 
          <motion.p
            className="relative text-gray-300"
            style={{
              fontFamily: "Quicksand",
              fontWeight: 400,
              fontSize: "18px",
              padding: "10px",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            The Hunter 350 fills a space in the Royal Enfield lineup. It has the sound, feel, and character you expect from a Royal Enfield single, and the lighter, more nimble chassis design feels more modern and refined.
          </motion.p>

          <div className="flex items-center mt-2 gap-1"> 
            <svg width="19" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            <span style={{ color: "orange", fontSize: "16px" }}>Learn More</span>
          </div>
        </div>

        {/* Logo Image */}
          <div style={{
            position: "relative",
            width: "250px",
             margin: "auto",
             top: "-30px",
             left: "-50px"
          }}>
        <img 
          src="/Group.png" 
          alt="Logo"
          style={{ 
            width: "100%", 
            height: "auto",
            
           
          }} 
        />
        </div>

        <motion.div
          className="absolute w-[1170px] h-[548px] top-[250px] left-[100px] rounded-xl overflow-visible"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          whileHover={{ scale: 1.5, zIndex: 50, transition: { duration: 1, ease: "easeOut" } }}
          onMouseEnter={playSound}
        >
          {/* Bike Image */}
          <img
            src="/Bike.jpg"
            alt="Hunter 350"
            className="absolute top-0 left-0"
            style={{
              width: "1170px",
              height: "548px",
              objectFit: "contain",
              zIndex: 1,
            }}
          />
          {/* Optional overlays or mag highlights */}
          <div
            className="absolute"
            style={{
              top: "360px", 
              left: "220px",
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              zIndex: 2,
            }}
          />
          <div
            className="absolute"
            style={{
              top: "360px", 
              left: "820px",
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              zIndex: 2,
            }}
          />
        </motion.div>
      </section>

      {/* Accessories Row  */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        whileHover={{ scale: 1.05, y: -8 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="max-w-[1400px] mx-auto mt-12 px-6 grid grid-cols-1 sm:grid-cols-3 gap-6"
      >
        {accessories.map((a) => (
          <motion.div key={a.id} variants={fadeUp}
          whileHover={{ scale: 1.05, rotate: 2 }}   
  transition={{ type: "spring", stiffness: 150 }}

          >

            
            <AccessoryCard accessory={a} />
            
          </motion.div>
        ))}
      </motion.div>

      {/* Right Panel */}
      <div className="max-w-[1400px] mx-auto mt-12 px-6 flex flex-col lg:flex-row gap-6">
        <aside
          className="flex-1 relative rounded-xl overflow-hidden group"
          style={{
            height: "550px",
            backgroundImage: "url('/Rectangle 15.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="absolute"
            style={{
              width: "300px",
              height: "600px",
              top: "0px",
              right: "0px",
              background: "rgba(0,0,0,0.6)",
              borderRadius: "12px",
              padding: "15px",
            }}
          >
            <p
              className="text-white"
              style={{
                fontFamily: "Quicksand, sans-serif",
                fontWeight: 400,
                fontStyle: "normal",
                fontSize: "16px",
                lineHeight: "25px",
                letterSpacing: "0%",
                margin: 0,
                padding: "35px",
              }}
            >
              At the heart of the Hunter beats a fuel-injected, long-stroke 350cc engine that delivers a smoother ride, higher RPM and dollops of torque. Paired with a steady downtube spine frame and grounded suspension, the Hunter 350 gives the right amount of power and precision, whether you’re revving up the city streets or gunning down the motorway.
            </p>
          </div>
          {/* The Hover Button */}
          <div
            className="absolute bottom-6 right-6 z-20 flex items-center gap-2 px-6 py-3
                       bg-red-500 text-white font-bold rounded-full cursor-pointer
                       opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          >
            <span>Book a Test Ride</span>
            <FaAngleRight />
          </div>
        </aside>
      </div>

      {/* Gallery  */}
      <div className="max-w-[1400px] mx-auto mt-6 px-6 flex gap-6">
        {["/bike1.svg", "/bike2.svg", "/bike3.svg"].map((src, index) => (
          <div
            key={index}
            
            style={{
              flex: "1 1 0",
              height: "350px",
              position: "relative",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
              
            }}
            
          >
            <img
              src={src}
              alt={`gallery-${index}`}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 0,
                width: "100%",
                background: "rgba(0,0,0,0.4)",
                color: "#fff",
                padding: "6px",
                fontSize: "14px",
                textAlign: "center",
              }}
            >
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// AccessoryCard 
function AccessoryCard({ accessory }: { accessory: Accessory }) {
  const darkOrange = "#ff8c00";
  let imageStyle = {
    position: "absolute" as "absolute",
    objectFit: "contain" as "contain",
    top: "auto",
    left: "auto",
    width: "auto",
    height: "auto",
    
  };

  switch (accessory.id) {
    case "helmet":
      imageStyle = {
        ...imageStyle,
        top: "-30px",
        left: "50px",
        width: "650px",
        height: "550px",
      };
      break;
    case "gloves":
      imageStyle = {
        ...imageStyle,
        top: "20px",
        left: "20px",
        width: "300px",
        height: "220px",
      };
      break;
    case "jacket":
      imageStyle = {
        ...imageStyle,
        top: "20px",
        left: "40px",
        width: "250px",
        height: "220px",
      };
      break;
    default:
      imageStyle = {
        ...imageStyle,
        width: "240px",
        height: "200px",
        top: "30px",
        left: "20px",
      };
      break;
  }

  return (
    <div
      className="relative border border-zinc-800 rounded-xl shadow-lg gap-1"
      style={{
        width: "350px",
        height: "450px",
        background: "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(128,128,128,0.3) 100%)",
      }}
    >
      <div
        className="absolute uppercase"
        style={{ top: "10px", left: "20px", fontSize: "14px", fontWeight: 500, color: darkOrange }}
      >
        {accessory.subtitle}
      </div>
      <div
        className="absolute font-semibold"
        style={{ top: "35px", left: "20px", fontSize: "18px", color: "white" }}
      >
        {accessory.title}
      </div>
      <div className="absolute" style={{ top: "70px", left: "10px", width: "280px", height: "240px" }}>
        {accessory.bgImage && (
          <img
            src={accessory.bgImage}
            alt="background"
            style={{ position: "absolute", top: 40, left: 20, width: "50%", height: "100%", objectFit: "cover", borderRadius: "12px", opacity: 0.5 }}
          />
        )}
        <img
          src={accessory.image}
          alt={accessory.title}
          style={imageStyle}
        />
      </div>
      <div className="absolute flex justify-between items-center w-[90%]" style={{ bottom: "15px", left: "8%" }}>
        <a className="hover:underline flex items-center gap-1" style={{ color: darkOrange }}>
          <span style={{ color: "#fff", fontSize: "14px" }}>→</span>
          Learn more
        </a>
        <span className="text-xs text-zinc-500">Exclusive</span>
      </div>
    </div>
  );
}