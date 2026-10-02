import MenuCard from "../components/MenuCard";
import Reveal from "../components/Reveal";
import { menuData } from "../data/menuData";

const MenuPage = () => (
  <>
    <div className="page-header">
      <Reveal variant="up">
        <h1>المنيو</h1>
      </Reveal>
    </div>
    <section className="page-content">
      <div className="container">
        <div className="menu-grid">
          {menuData.map((item, i) => (
            <MenuCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  </>
);

export default MenuPage;
