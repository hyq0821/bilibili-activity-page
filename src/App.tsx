import FirstSection from "./sections/FirstSection";
import SecondSection from "./sections/SecondSection";
import ThirdSection from "./sections/ThirdSection";
import style from "./style.module.scss"


function App() {
  return (
    <div className={style.app}>
      <FirstSection></FirstSection>
      <SecondSection></SecondSection>
      <ThirdSection></ThirdSection>
    </div>
  );
}

export default App;
