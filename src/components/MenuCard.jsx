import { useState } from "react";
import { motion } from "framer-motion";
import { FaPlus, FaCheck } from "react-icons/fa";
import { useCart } from "../context/CartContext";

const MenuCard = ({ item, index }) => {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem(item);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <motion.div
      className="menu-card"
      initial={{ opacity: 0, y: 80, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -12, transition: { duration: 0.3 } }}
    >
      <div className="card-image">
        <img src={item.image} alt={item.name} loading="lazy" />
        <motion.span
          className="price"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{
            delay: index * 0.12 + 0.3,
            type: "spring",
            stiffness: 200,
          }}
        >
          {item.price} ج.م
        </motion.span>
      </div>
      <div className="card-body">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <motion.button
          className={`add-btn ${added ? "added" : ""}`}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={handleAdd}
        >
          {added ? (
            <>
              <FaCheck /> تمت الإضافة
            </>
          ) : (
            <>
              <FaPlus /> أضف للسلة
            </>
          )}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default MenuCard;
