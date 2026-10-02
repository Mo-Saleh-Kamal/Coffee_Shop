export const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&display=swap');

  * { margin: 0; padding: 0; box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  body {
    font-family: 'Cairo', sans-serif;
    direction: rtl;
    background: #fff;
    color: #333;
    overflow-x: hidden;
  }
  img { max-width: 100%; display: block; }
  button { font-family: inherit; cursor: pointer; }

  ::-webkit-scrollbar { width: 8px; }
  ::-webkit-scrollbar-track { background: #f1f1f1; }
  ::-webkit-scrollbar-thumb { background: #d4a373; border-radius: 4px; }

  .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }

  /* ===== Loader ===== */
  .loader { position: fixed; inset: 0; background: #2c1810; display: flex; align-items: center; justify-content: center; z-index: 9999; color: #d4a373; }
  .loader-content { text-align: center; }
  .coffee-cup { font-size: 5rem; margin-bottom: 20px; display: inline-block; }
  .loader h1 { font-size: 2.5rem; letter-spacing: 8px; margin-bottom: 40px; font-weight: 900; }
  .progress-bar { width: 300px; height: 3px; background: rgba(212,163,115,0.2); border-radius: 10px; overflow: hidden; margin: 0 auto 15px; }
  .progress-fill { height: 100%; background: #d4a373; border-radius: 10px; }
  .progress-text { font-size: 0.9rem; letter-spacing: 3px; }

  /* ===== Navbar ===== */
  .navbar { position: fixed; top: 0; width: 100%; padding: 20px 0; transition: all 0.3s ease; z-index: 1000; }
  .navbar.scrolled { background: rgba(44, 24, 16, 0.95); padding: 12px 0; backdrop-filter: blur(10px); box-shadow: 0 2px 20px rgba(0,0,0,0.2); }
  .nav-container { max-width: 1200px; margin: 0 auto; padding: 0 20px; display: flex; justify-content: space-between; align-items: center; }
  .logo { display: flex; align-items: center; gap: 10px; font-size: 1.5rem; font-weight: 700; color: #d4a373; text-decoration: none; cursor: pointer; background: none; border: none; }
  .nav-links { display: flex; gap: 40px; list-style: none; }
  .nav-links button { color: #fff; background: none; border: none; font-weight: 500; font-size: 1rem; font-family: inherit; position: relative; padding: 8px 0; transition: color 0.3s; cursor: pointer; }
  .nav-links button:hover { color: #d4a373; }
  .nav-links button.active { color: #d4a373; }
  .active-line { position: absolute; bottom: -4px; right: 0; left: 0; height: 2px; background: #d4a373; border-radius: 2px; }
  .menu-icon { display: none; color: #fff; font-size: 1.5rem; cursor: pointer; z-index: 1001; position: relative; background: none; border: none; }
  .mobile-menu { position: fixed; inset: 0; background: #2c1810; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 30px; z-index: 999; }
  .mobile-menu button { color: #fff; font-size: 2rem; background: none; border: none; font-weight: 700; font-family: inherit; transition: color 0.3s; cursor: pointer; }
  .mobile-menu button:hover { color: #d4a373; }

  /* ===== Cursor ===== */
  .cursor-dot, .cursor-follower { position: fixed; top: 0; left: 0; pointer-events: none; z-index: 10000; border-radius: 50%; transition: width 0.3s, height 0.3s, background 0.3s; will-change: transform; }
  .cursor-dot { width: 8px; height: 8px; background: #d4a373; margin: -4px 0 0 -4px; }
  .cursor-follower { width: 40px; height: 40px; border: 2px solid #d4a373; margin: -20px 0 0 -20px; }
  .cursor-dot.hover { width: 12px; height: 12px; margin: -6px 0 0 -6px; }
  .cursor-follower.hover { width: 70px; height: 70px; margin: -35px 0 0 -35px; background: rgba(212,163,115,0.15); border-color: transparent; }

  /* ===== Scroll Progress ===== */
  .scroll-progress { position: fixed; top: 0; left: 0; right: 0; height: 4px; transform-origin: 0%; background: linear-gradient(90deg, #d4a373, #c08d5a); z-index: 9998; }

  /* ===== Hero ===== */
  .hero { height: 100vh; position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center; text-align: center; }
  .hero-bg { position: absolute; inset: -10%; background: url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1600') center/cover; will-change: transform; }
  .hero-overlay { position: absolute; inset: 0; background: linear-gradient(135deg, rgba(44,24,16,0.85), rgba(0,0,0,0.6)); z-index: 1; }
  .hero-content { position: relative; z-index: 2; max-width: 900px; padding: 0 20px; color: #fff; }
  .hero-content h1 { font-size: clamp(2rem, 5.5vw, 4rem); font-weight: 900; margin-bottom: 25px; line-height: 1.3; perspective: 1000px; }
  .hero-content h1 .highlight { color: #d4a373; }
  .hero-content p { font-size: 1.15rem; margin-bottom: 40px; opacity: 0.9; }
  .hero-buttons { display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; }
  .btn { position: relative; padding: 16px 40px; border-radius: 50px; font-weight: 700; text-decoration: none; overflow: hidden; transition: all 0.4s cubic-bezier(0.76, 0, 0.24, 1); display: inline-block; border: none; font-size: 1rem; font-family: inherit; cursor: pointer; }
  .btn span { position: relative; z-index: 2; }
  .btn.primary { background: #d4a373; color: #2c1810; }
  .btn.primary::before { content: ''; position: absolute; inset: 0; background: #2c1810; transform: translateY(100%); transition: transform 0.4s cubic-bezier(0.76, 0, 0.24, 1); }
  .btn.primary:hover::before { transform: translateY(0); }
  .btn.primary:hover { color: #d4a373; }
  .btn.secondary { border: 2px solid #fff; color: #fff; background: transparent; }
  .btn.secondary:hover { background: #fff; color: #2c1810; }
  .scroll-indicator { position: absolute; bottom: 30px; left: 50%; transform: translateX(-50%); width: 26px; height: 42px; border: 2px solid #d4a373; border-radius: 20px; z-index: 3; display: flex; justify-content: center; padding-top: 8px; }
  .scroll-indicator span { width: 4px; height: 8px; background: #d4a373; border-radius: 2px; }

  /* ===== Marquee ===== */
  .marquee { overflow: hidden; background: #d4a373; padding: 20px 0; transform: rotate(-2deg); margin: 60px 0; }
  .marquee-track { display: flex; white-space: nowrap; animation: marquee 30s linear infinite; }
  .marquee-track span { font-size: 1.8rem; font-weight: 900; color: #2c1810; padding: 0 30px; letter-spacing: 2px; }
  @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }

  /* ===== Menu Cards ===== */
  .featured { padding: 100px 0; background: #faf6f1; }
  .section-header { text-align: center; margin-bottom: 60px; }
  .subtitle { color: #d4a373; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; font-size: 0.9rem; }
  .section-header h2 { font-size: 2.5rem; color: #2c1810; margin-top: 10px; }
  .menu-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 30px; margin-bottom: 50px; }
  .menu-card { background: #fff; border-radius: 20px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.08); transition: box-shadow 0.3s; }
  .menu-card:hover { box-shadow: 0 20px 40px rgba(0,0,0,0.15); }
  .card-image { position: relative; height: 220px; overflow: hidden; }
  .card-image img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s; }
  .menu-card:hover .card-image img { transform: scale(1.15); }
  .price { position: absolute; top: 15px; left: 15px; background: #d4a373; color: #2c1810; padding: 8px 16px; border-radius: 30px; font-weight: 700; }
  .card-body { padding: 25px; }
  .card-body h3 { font-size: 1.3rem; margin-bottom: 10px; color: #2c1810; }
  .card-body p { color: #777; margin-bottom: 20px; line-height: 1.6; }
  .add-btn { width: 100%; padding: 12px; background: #2c1810; color: #d4a373; border: none; border-radius: 10px; font-weight: 600; display: flex; align-items: center; justify-content: center; gap: 8px; transition: all 0.3s; font-family: inherit; font-size: 1rem; }
  .add-btn:hover { background: #d4a373; color: #2c1810; }
  .add-btn.added { background: #27ae60 !important; color: #fff !important; }
  .center-btn { display: flex; justify-content: center; margin-top: 30px; }

  /* ===== About ===== */
  .about-section { padding: 100px 0; background: #fff; }
  .about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
  .about-image { border-radius: 20px; overflow: hidden; box-shadow: 0 20px 50px rgba(0,0,0,0.15); }
  .about-image img { width: 100%; height: 500px; object-fit: cover; }
  .about-text h2 { font-size: 2.3rem; color: #2c1810; margin: 15px 0 25px; line-height: 1.3; }
  .about-text p { color: #666; line-height: 1.9; margin-bottom: 30px; font-size: 1.05rem; }

  /* ===== Stats ===== */
  .stats { padding: 80px 0; background: #2c1810; }
  .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 40px; text-align: center; }
  .stat-box h3 { font-size: 3rem; color: #d4a373; margin-bottom: 10px; font-weight: 900; }
  .stat-box p { color: #fff; opacity: 0.8; font-size: 1.1rem; }

  /* ===== Features ===== */
  .features { padding: 80px 0; background: #faf6f1; }
  .features-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 40px; }
  .feature-box { text-align: center; padding: 30px; }
  .feature-icon { font-size: 3.5rem; display: block; margin-bottom: 20px; }
  .feature-box h3 { font-size: 1.4rem; margin-bottom: 15px; color: #2c1810; }
  .feature-box p { color: #666; line-height: 1.7; }

  /* ===== Footer ===== */
  .footer { background: #1a0f08; color: #fff; padding: 60px 0 20px; }
  .footer-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 40px; margin-bottom: 40px; }
  .footer h3 { color: #d4a373; margin-bottom: 20px; font-size: 1.3rem; }
  .footer p, .footer button { color: #bbb; text-decoration: none; background: none; border: none; font-family: inherit; font-size: 1rem; line-height: 2; display: block; transition: color 0.3s; text-align: right; padding: 0; cursor: pointer; }
  .footer button:hover { color: #d4a373; }
  .social-icons { display: flex; gap: 15px; margin-top: 20px; }
  .social-icons a { width: 40px; height: 40px; border-radius: 50%; background: rgba(212,163,115,0.15); display: flex; align-items: center; justify-content: center; color: #d4a373; transition: all 0.3s; }
  .social-icons a:hover { background: #d4a373; color: #1a0f08; transform: translateY(-3px); }
  .footer-bottom { text-align: center; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1); color: #777; font-size: 0.9rem; }

  /* ===== Page Common ===== */
  .page-header { height: 40vh; background: #2c1810; display: flex; align-items: center; justify-content: center; padding-top: 80px; text-align: center; }
  .page-header h1 { color: #d4a373; font-size: 3rem; }
  .page-content { padding: 80px 0; }

  /* ===== Contact ===== */
  .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; }
  .contact-form input, .contact-form textarea { width: 100%; padding: 15px 20px; border: 2px solid #eee; border-radius: 12px; margin-bottom: 20px; font-family: inherit; font-size: 1rem; transition: border 0.3s; }
  .contact-form input:focus, .contact-form textarea:focus { outline: none; border-color: #d4a373; }
  .contact-form textarea { min-height: 150px; resize: vertical; }
  .contact-item { display: flex; gap: 15px; margin-bottom: 25px; align-items: flex-start; }
  .contact-item-icon { width: 50px; height: 50px; border-radius: 12px; background: rgba(212,163,115,0.15); color: #d4a373; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; flex-shrink: 0; }
  .contact-item h4 { color: #2c1810; margin-bottom: 5px; }
  .contact-item p { color: #777; }

  /* ===== Cart Button (Navbar) ===== */
  .nav-actions { display: flex; align-items: center; gap: 15px; }
  .cart-btn { position: relative; width: 44px; height: 44px; border-radius: 50%; background: rgba(212,163,115,0.2); border: none; color: #d4a373; font-size: 1.1rem; display: flex; align-items: center; justify-content: center; transition: background 0.3s; }
  .cart-btn:hover { background: rgba(212,163,115,0.35); }
  .cart-btn.bump { animation: cartBump 0.4s ease; }
  @keyframes cartBump { 0%, 100% { transform: scale(1); } 30% { transform: scale(1.35); } 60% { transform: scale(0.9); } }
  .cart-badge { position: absolute; top: -4px; right: -4px; min-width: 22px; height: 22px; padding: 0 6px; background: #e74c3c; color: #fff; font-size: 0.75rem; font-weight: 700; border-radius: 20px; display: flex; align-items: center; justify-content: center; font-family: 'Cairo', sans-serif; }

  /* ===== Cart Drawer ===== */
  .cart-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.6); z-index: 1999; backdrop-filter: blur(4px); }
  .cart-drawer { position: fixed; top: 0; right: 0; width: 420px; max-width: 100%; height: 100vh; background: #fff; z-index: 2000; display: flex; flex-direction: column; box-shadow: -10px 0 40px rgba(0,0,0,0.2); }
  .cart-header { padding: 25px; border-bottom: 1px solid #eee; display: flex; justify-content: space-between; align-items: center; }
  .cart-header h2 { font-size: 1.3rem; color: #2c1810; display: flex; align-items: center; gap: 10px; }
  .cart-count { color: #d4a373; font-size: 1rem; }
  .cart-close { width: 36px; height: 36px; border-radius: 50%; background: #f5f5f5; border: none; color: #2c1810; font-size: 1rem; display: flex; align-items: center; justify-content: center; transition: all 0.3s; }
  .cart-close:hover { background: #2c1810; color: #fff; transform: rotate(90deg); }
  .cart-empty { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 40px; text-align: center; gap: 15px; }
  .empty-icon { font-size: 4rem; opacity: 0.4; }
  .cart-empty h3 { color: #2c1810; font-size: 1.3rem; }
  .cart-empty p { color: #999; margin-bottom: 10px; }
  .cart-items { flex: 1; overflow-y: auto; padding: 20px; display: flex; flex-direction: column; gap: 15px; }
  .cart-items::-webkit-scrollbar { width: 6px; }
  .cart-items::-webkit-scrollbar-thumb { background: #d4a373; border-radius: 3px; }
  .cart-item { display: flex; gap: 15px; padding: 12px; background: #faf6f1; border-radius: 14px; align-items: center; }
  .cart-item img { width: 70px; height: 70px; border-radius: 10px; object-fit: cover; flex-shrink: 0; }
  .cart-item-info { flex: 1; display: flex; flex-direction: column; gap: 6px; }
  .cart-item-info h4 { color: #2c1810; font-size: 1rem; margin: 0; }
  .cart-item-price { color: #999; font-size: 0.85rem; }
  .qty-controls { display: flex; align-items: center; gap: 10px; background: #fff; border-radius: 20px; padding: 4px 8px; width: fit-content; margin-top: 4px; }
  .qty-controls button { width: 26px; height: 26px; border-radius: 50%; border: none; background: #2c1810; color: #d4a373; font-size: 0.7rem; display: flex; align-items: center; justify-content: center; transition: all 0.2s; }
  .qty-controls button:hover { background: #d4a373; color: #2c1810; }
  .qty-controls span { min-width: 22px; text-align: center; font-weight: 700; color: #2c1810; font-size: 0.95rem; }
  .cart-item-right { display: flex; flex-direction: column; align-items: flex-end; gap: 10px; }
  .cart-item-total { font-weight: 700; color: #2c1810; font-size: 0.95rem; white-space: nowrap; }
  .cart-remove { background: none; border: none; color: #ccc; font-size: 0.9rem; transition: color 0.3s; }
  .cart-footer { padding: 20px; border-top: 1px solid #eee; background: #fff; }
  .cart-summary { display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; font-size: 1.1rem; }
  .cart-summary span { color: #666; }
  .cart-summary strong { font-size: 1.5rem; color: #2c1810; }
  .cart-checkout { width: 100%; padding: 16px; font-size: 1.05rem; }
  .cart-clear { display: flex; align-items: center; justify-content: center; gap: 8px; width: 100%; background: none; border: none; color: #999; font-size: 0.85rem; padding: 12px; margin-top: 8px; transition: color 0.3s; font-family: inherit; }
  .cart-clear:hover { color: #e74c3c; }
  .cart-success { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 40px; text-align: center; gap: 20px; }
  .success-icon { width: 100px; height: 100px; border-radius: 50%; background: #d4a373; color: #2c1810; display: flex; align-items: center; justify-content: center; font-size: 2.5rem; }
  .cart-success h3 { color: #2c1810; font-size: 1.5rem; }
  .cart-success p { color: #666; }

  /* ===== Responsive ===== */
  @media (max-width: 768px) {
    .nav-links { display: none; }
    .menu-icon { display: block; }
    .cursor-dot, .cursor-follower { display: none; }
    .about-grid, .contact-grid { grid-template-columns: 1fr; }
    .about-image img { height: 350px; }
    .section-header h2 { font-size: 1.8rem; }
    .hero-content h1 { font-size: 2rem; }
    .marquee-track span { font-size: 1.2rem; }
    .stat-box h3 { font-size: 2.2rem; }
  }
  @media (max-width: 500px) {
    .cart-drawer { width: 100%; }
  }
`;
