import { FC } from "react";
import Title1Image from "../../assets/title1.jpg"
import Title2Image from "../../assets/title2.jpg"
import CommentImage from "../../assets/comment.jpg"
import style from "./style.module.scss"


const ThirdSection:FC=()=>{
    return (
        <div className={style.thirdSection}>
            <img src={Title1Image} alt="Title1Image" />
            <img src={CommentImage} alt="CommentImage" className={style.comment}/>
            <img src={Title2Image} alt="Title2Image" />
            <img src={CommentImage} alt="CommentImage" className={style.comment}/>

        </div>
    )
}


export default ThirdSection;