import { motion } from "framer-motion";

export function Navbar() {
  const links = ["Motorcycles", "Locate Us", "Events", "Accessories", "Apparel", "Supports"];

  return (
    <motion.nav
      className="flex justify-between items-center bg-black text-white uppercase font-bold shadow-lg"
      style={{
        position: "absolute", 
        top: "70px",           
        left: "65px",   
        height: "100px",       
        right: "65px",         
        padding: "10px 34px", 
        zIndex: 50, 
        margin: "10px 10px",    
           
        
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Logo */}
      <img
        src="/Logo.png" 
        alt="Royal Enfield Logo"
        style={{
          height: "150px",       
          width: "auto",
          objectFit: "contain",
        }}
      />

      {/* Navbar Links */}
      <ul style={{ display: "flex", gap: "32px", fontSize: "18px" }}>
        {links.map((link, i) => (
          <motion.li
            key={i}
            whileHover={{
              scale: 1.1,
              color: "#ff8c00",
              transition: { type: "spring", stiffness: 300 },
            }}
            style={{ cursor: "pointer", fontWeight: 600 }}
          >
            {link}
          </motion.li>
        ))}
        <motion.li
          whileHover={{ scale: 1.1, color: "#ac0e0eff" }}
          transition={{ type: "spring", stiffness: 300 }}
          style={{ cursor: "pointer", fontWeight: 700 }}
        >
          Login
        </motion.li>
      </ul>
    </motion.nav>
  );
}
