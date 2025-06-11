import { FC } from "react";
import BannerImage from "../../assets/banner.jpg"
import style from "./style.module.scss"


const FirstSection:FC=()=>{
    return (
        <div className={style.firstSection}>
            <img src={BannerImage} alt="BannerImage"  />
        </div>
    )
}

export default FirstSection;