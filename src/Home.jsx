import "./Home.css";
import meniuSvg from "./assets/meniu.svg";
import setariSvg from "./assets/setari.svg";
import instaSvg from "./assets/insta.svg";
import gmailSvg from "./assets/gmail.svg";
import logoSvg from "./assets/logo.svg";
import userSvg from "./assets/user.svg";
import { useState } from "react";

function Home() {
  const [meniuAscuns, setMeniuAscuns] = useState(false);
  const [setariAscunse, setSetariAscunse] = useState(false);

  return (
    <div>
      <div id="navbar" className="container">
        <img
          src={meniuSvg}
          className="navbar-img"
          onClick={() => setMeniuAscuns(false)}
        />
        <img
          src={setariSvg}
          className="navbar-img"
          onClick={() => setSetariAscunse(false)}
        />
      </div>
      <div id="hero" className="container">
        <div className="nume-aplicatie">Geoway</div>
        <img src={logoSvg} className="logo" />
        <div className="mesaj-aplicatie">Welcome!</div>
      </div>
      <div id="options" className="container">
        <button className="buton-optiuni">Harti</button>
        <button className="buton-optiuni">Quizzuri</button>
        <button className="buton-optiuni">Examene</button>
        <button className="buton-optiuni">Lectii</button>
        <button className="buton-optiuni">Chat</button>
      </div>
      <div id="contact" className="container">
        <img src={instaSvg} className="navbar-img" />
        <img src={gmailSvg} className="navbar-img" />
      </div>

      <div id="meniu" className={`${meniuAscuns ? "ascuns" : ""}`}>
        <button onClick={() => setMeniuAscuns(true)}>Ascunde</button>
        <div
          style={{ display: "flex", alignItems: "center" }}
          className="buton-meniu"
        >
          <img src={userSvg} className="navbar-img " />
          <div>
            <div className="text-profil">Ion Popescu</div>
            <div className="text-profil">65%</div>
          </div>
        </div>
        <div className="buton-meniu">Lectii</div>
        <div className="buton-meniu">Harti</div>
        <div className="buton-meniu">Quizzuri</div>
        <div className="buton-meniu">Lectii</div>
        <div className="buton-meniu">Exam anterioare</div>
        <div className="buton-meniu">Chat cu mentorul</div>
        <div className="buton-meniu">Joc</div>
        <div className="buton-meniu">Evolutia mea</div>
      </div>

      <div id="setari" className={`${setariAscunse ? "ascuns" : ""}`}>
        <button className="buton-meniu ">Actualizare nume</button>
        <button className="buton-meniu ">Schimbare poza</button>
        <button className="buton-meniu " onClick={() => setSetariAscunse(true)}>
          Ascunde setari
        </button>
      </div>
    </div>
  );
}

export default Home;
