import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/CartContext";

const CartButton = () => {
  const { totalItems, setIsOpen } = useCart();
  const [bump, setBump] = useState(false);
  const prevCount = useRef(0);

  useEffect(() => {
    if (totalItems > prevCount.current && totalItems > 0) {
      setBump(true);
      setTimeout(() => setBump(false), 400);
    }
    prevCount.current = totalItems;
  }, [totalItems]);

  return (
    <motion.button
      className={`cart-btn ${bump ? "bump" : ""}`}
      onClick={() => setIsOpen(true)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="السلة"
    >
      <FaShoppingCart />
      <AnimatePresence>
        {totalItems > 0 && (
          <motion.span
            className="cart-badge"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 20 }}
          >
            {totalItems}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default CartButton;
