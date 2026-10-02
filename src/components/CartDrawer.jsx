import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaShoppingCart,
  FaTimes,
  FaPlus,
  FaMinus,
  FaTrash,
  FaCheck,
} from "react-icons/fa";
import { useCart } from "../context/CartContext";
import MagneticButton from "./MagneticButton";

const CartDrawer = () => {
  const {
    items,
    isOpen,
    setIsOpen,
    removeItem,
    updateQty,
    clearCart,
    totalPrice,
    totalItems,
  } = useCart();

  const [orderDone, setOrderDone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleCheckout = () => {
    setOrderDone(true);
    setTimeout(() => {
      clearCart();
      setOrderDone(false);
      setIsOpen(false);
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="cart-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />

          <motion.aside
            className="cart-drawer"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 250 }}
          >
            <div className="cart-header">
              <h2>
                <FaShoppingCart /> سلة المشتريات
                {totalItems > 0 && (
                  <span className="cart-count">({totalItems})</span>
                )}
              </h2>
              <button className="cart-close" onClick={() => setIsOpen(false)}>
                <FaTimes />
              </button>
            </div>

            {orderDone ? (
              <motion.div
                className="cart-success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <motion.div
                  className="success-icon"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <FaCheck />
                </motion.div>
                <h3>تم إرسال طلبك! ☕</h3>
                <p>هيوصلك خلال 30 دقيقة</p>
              </motion.div>
            ) : items.length === 0 ? (
              <div className="cart-empty">
                <div className="empty-icon">🛒</div>
                <h3>السلة فاضية</h3>
                <p>ابدأ أضف منتجات من المنيو</p>
                <button
                  className="btn primary"
                  onClick={() => setIsOpen(false)}
                >
                  <span>تصفح المنيو</span>
                </button>
              </div>
            ) : (
              <>
                <div className="cart-items">
                  <AnimatePresence mode="popLayout">
                    {items.map((item) => (
                      <motion.div
                        key={item.id}
                        className="cart-item"
                        layout
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <img src={item.image} alt={item.name} />
                        <div className="cart-item-info">
                          <h4>{item.name}</h4>
                          <span className="cart-item-price">
                            {item.price} ج.م
                          </span>
                          <div className="qty-controls">
                            <motion.button
                              whileTap={{ scale: 0.85 }}
                              onClick={() => updateQty(item.id, item.qty - 1)}
                            >
                              <FaMinus />
                            </motion.button>
                            <motion.span
                              key={item.qty}
                              initial={{ scale: 1.4, color: "#d4a373" }}
                              animate={{ scale: 1, color: "#2c1810" }}
                              transition={{ duration: 0.25 }}
                            >
                              {item.qty}
                            </motion.span>
                            <motion.button
                              whileTap={{ scale: 0.85 }}
                              onClick={() => updateQty(item.id, item.qty + 1)}
                            >
                              <FaPlus />
                            </motion.button>
                          </div>
                        </div>
                        <div className="cart-item-right">
                          <span className="cart-item-total">
                            {item.price * item.qty} ج.م
                          </span>
                          <motion.button
                            className="cart-remove"
                            onClick={() => removeItem(item.id)}
                            whileHover={{ scale: 1.15, color: "#e74c3c" }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <FaTrash />
                          </motion.button>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                <div className="cart-footer">
                  <div className="cart-summary">
                    <span>الإجمالي:</span>
                    <motion.strong
                      key={totalPrice}
                      initial={{ scale: 1.3, color: "#d4a373" }}
                      animate={{ scale: 1, color: "#2c1810" }}
                    >
                      {totalPrice} ج.م
                    </motion.strong>
                  </div>

                  <MagneticButton
                    className="btn primary cart-checkout"
                    onClick={handleCheckout}
                  >
                    <span>إتمام الطلب</span>
                  </MagneticButton>

                  <button className="cart-clear" onClick={clearCart}>
                    <FaTrash /> تفريغ السلة
                  </button>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
