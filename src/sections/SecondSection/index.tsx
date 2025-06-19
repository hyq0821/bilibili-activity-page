import { FC, useEffect, useRef, useState } from "react";
import CartoonImage from "../../assets/cartoon.jpg";
import MovieImage from "../../assets/movie.png";
import LifeImage from "../../assets/life.jpg";
import FoodImage from "../../assets/food.jpg";
import LogoImage from "../../assets/logo.png";
import style from "./style.module.scss";
import classNames from "classnames";

const tabs = [
  {
    key: "cartoon",
    title: "动画",
    src: CartoonImage,
  },
  {
    key: "food",
    title: "美食",
    src: FoodImage,
  },
  {
    key: "movie",
    title: "电影",
    src: MovieImage,
  },
  {
    key: "life",
    title: "生活",
    src: LifeImage,
  },
];

const SecondSection: FC = () => {
  // 当前高亮值
  const [activeTab, setActiveTab] = useState<string>("cartoon");
  // 获取整体盒子dom
  const secondSectionRef = useRef<HTMLDivElement>(null);
  // 是否固定在顶部
  const [isFixed, setIsfixed] = useState<boolean>(false);

  // 点击tab切换跳转到对应的content
  const activate = (key: string) => {
    setActiveTab(key);
    // 拿到当前key对应的dom元素
    const tabContent = document.querySelector(`[data-id=${key}]`);
    if (tabContent) {
      tabContent.scrollIntoView({ behavior: "smooth" });
    }
  };

  const onScroll = () => {
    if (secondSectionRef.current) {
      //获取当前元素距离顶部的高度
      const { top } = secondSectionRef.current.getBoundingClientRect();
      // 小于等于0时，固定在顶部(吸顶)
      setIsfixed(top <= 0);
      // 获取所有section(内容模块)
      const sectionNodes=document.querySelectorAll("section")
      //将伪数组转为数组
        Array.from(sectionNodes).forEach(section=>{
          // 获取当前section距离顶部的高度
        const {top}=section.getBoundingClientRect()
        // 获取当前section的key
        const key=section.getAttribute("data-id") || ''
        if (top<= 56) {
          setActiveTab(key)
        }
      })
    }
    
  };



  useEffect(() => {
    //全局去监听滚动
    window.addEventListener("scroll", onScroll);
    return ()=>{
      window.removeEventListener("scroll",onScroll)
    }
  }, []);




  return (
    <div className={style.secondSection} ref={secondSectionRef}>
      {/* tabs内容 (tab吸顶)*/}
      <ul className={classNames({ [style.isFixed]: isFixed })}>
        {tabs.map((tab) => (
          <li key={tab.key} onClick={() => activate(tab.key)}>
            <span>{tab.title}</span>
            <span
              className={classNames(style.line, {
                [style.visible]: activeTab === tab.key,
              })}
            ></span>
          </li>
        ))}
      </ul>
      {/* tab对应的content */}
      <div>
        {tabs.map((tab) => (
          <section data-id={tab.key}>
            <h2>{tab.title}</h2>
            <img src={tab.src} alt={tab.key} />
          </section>
        ))}
      </div>

      {/* 按钮的吸底 */}
      <div className={classNames(style.btnWrapper,{[style.visible]:isFixed})}>
        <img src={LogoImage} alt="LOGO" />
        <a href="https://www.bilibili.com/">
          <button>APP内打开</button>
        </a>
      </div>
    </div>
  );


};

export default SecondSection;
