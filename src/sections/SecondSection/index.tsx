import { FC, useState } from "react";
import CartoonImage from "../../assets/cartoon.jpg";
import MovieImage from "../../assets/movie.png";
import LifeImage from "../../assets/life.jpg";
import FoodImage from "../../assets/food.jpg";
import style from "./style.module.scss";
import { title } from "process";
import classNames from "classnames";

const tabs = [
  {
    key: "cartoon",
    title: "动画",
  },
  {
    key: "food",
    title: "美食",
  },
  {
    key: "movie",
    title: "电影",
  },
  {
    key: "life",
    title: "生活",
  },
];

const SecondSection: FC = () => {
  // 当前高亮值
  const [activeTab, setActiveTab] = useState<string>("cartoon");

  return (
    <div className={style.secondSection}>
      {/* tabs内容 */}
      <ul>
        {tabs.map((tab) => (
          <li key={tab.key} onClick={() => setActiveTab(tab.key)}>
            <span>{tab.title}</span>
            <span className={classNames(style.line ,{[style.visible]:activeTab===tab.key,})}></span>
          </li>
        ))}
      </ul>
      {/* tab对应的content */}
      <div>
        <section>
          <h2>动画</h2>
          <img src={CartoonImage} alt="CartoonImage" />
        </section>
        <section>
          <h2>美食</h2>
          <img src={FoodImage} alt="FoodImage" />
        </section>
        <section>
          <h2>电影</h2>
          <img src={MovieImage} alt="MovieImage" />
        </section>
        <section>
          <h2>生活</h2>
          <img src={LifeImage} alt="LifeImage" />
        </section>
      </div>
    </div>
  );
};

export default SecondSection;
