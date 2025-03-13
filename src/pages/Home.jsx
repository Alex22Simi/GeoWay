import "./Home.css";
import profileImg from "../assets/progile.jpg";
import meniuSvg from "../assets/meniu.svg";
import setariSvg from "../assets/setari.svg";
import loginSvg from "../assets/login.svg";
import instaSvg from "../assets/insta.svg";
import gmailSvg from "../assets/gmail.svg";
import logoSvg from "../assets/logo.svg";
import userSvg from "../assets/user.svg";
import cancelSvg from "../assets/cancel.svg";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [meniuAscuns, setMeniuAscuns] = useState(false);
  const [setariAscunse, setSetariAscunse] = useState(false);
  const meniuRef = useRef(null);
  const setariRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    function handleClickOutside(event) {
      if (meniuRef.current && !meniuRef.current.contains(event.target)) {
        setMeniuAscuns(false);
      }
      if (setariRef.current && !setariRef.current.contains(event.target)) {
        setSetariAscunse(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [meniuRef, setariRef]);

  return (
    <div>
      {/* Secțiunea Navbar */}
      <div id="navbar" className="container">
        <img
          src={meniuSvg}
          className="navbar-img"
          onClick={() => setMeniuAscuns(!meniuAscuns)}
          alt="Meniu"
        />
        <div style={{ display: "flex", gap: "1rem" }}>
          <img
            src={loginSvg}
            className="navbar-img"
            onClick={() => console.log("Login clicked")}
            alt="Login"
          />
          <img
            src={setariSvg}
            className="navbar-img"
            onClick={() => setSetariAscunse(!setariAscunse)}
            alt="Setări"
          />
        </div>
      </div>

      {/* Secțiunea Hero */}
      <div id="hero" className="container">
        <div className="nume-aplicatie">GeoWay</div>
        <img src={logoSvg} className="logo" alt="Logo" />
        <div className="mesaj-aplicatie">Bine ați venit!</div>
      </div>

      {/* Secțiunea Opțiuni */}
      <div id="options" className="container">
        <button className="buton-optiuni">Hartă capitale Europa</button>
        <button className="buton-optiuni">Hartă râuri Europa</button>
        <button className="buton-optiuni">Hartă județe România</button>
        <button className="buton-optiuni">Hartă forme de relief România</button>
        <button className="buton-optiuni">Hartă râuri România</button>
      </div>

      {/* Secțiunea Despre Mine */}
      <div id="despre-mine" className="container">
        <div className="sectiune-despre">
          <div className="despre-container">
            {/* 🔹 Imaginea de profil */}
            <img
              src={profileImg}
              className="despre-poza"
              alt="Profil Simionescu Alexandru"
            />

            {/* 🔹 Textul despre tine */}
            <div className="text-despre">
              <h2>Despre Mine</h2>
              <p>
                Salut! Mă numesc Simionescu Alexandru și, la fel ca tine, am
                trecut prin emoțiile examenului de Bacalaureat. Am absolvit
                recent Facultatea de Cibernetică, Statistică și Informatică
                Economică, specializarea Informatică Economică, iar în clasa a
                XII-a am susținut și eu proba la Geografie, obținând nota 9,70.
              </p>
              <p>
                Pentru că știu cât de important este să ai materiale bine
                structurate și ușor de înțeles, am creat GeoWay – o platformă
                menită să te ajute să înveți mai eficient și să îți atingi
                obiectivele la acest examen. Aici vei găsi toate resursele care
                m-au ajutat și pe mine, hărți interactive și joculețe, toate
                acestea prezentate într-un mod clar și prietenos.
              </p>
              <p>
                Dacă ai întrebări sau nelămuriri despre o anumită lecție, nu
                ezita să scrii, fie pe{" "}
                <a href="mailto:geoway2025@gmail.com">E-mail</a>,{" "}
                <a href="https://www.instagram.com/geowayplatform/">
                  Instagram
                </a>{" "}
                sau direct în secțiunea de <strong>chat cu mentorul</strong>.
              </p>
              <p className="urare">Mult succes! 🚀</p>
            </div>
          </div>
        </div>
      </div>

      {/* Secțiunea Contact */}
      <div id="contact" className="container">
        <a
          href="https://www.instagram.com/geowayplatform/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instaSvg} className="navbar-img" alt="Instagram" />
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=geoway2025@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={gmailSvg} className="navbar-img" alt="Gmail" />
        </a>
      </div>

      {/* Meniuri laterale */}
      <div
        id="meniu"
        className={`meniu ${meniuAscuns ? "deschis" : "ascuns"}`}
        ref={meniuRef}
      >
        <button
          className="buton-inchidere"
          onClick={() => setMeniuAscuns(false)}
        >
          <img src={cancelSvg} alt="Închide" className="icon-inchidere" />
        </button>
        <div className="profil-meniu">
          <img src={userSvg} width={60} className="user-icon" alt="Profil" />
          <div className="profil-info">
            <div className="text-profil">Ion Popescu</div>
            <div className="text-profil">65% completat</div>
          </div>
        </div>
        <div className="buton-meniu">Lecții</div>
        <div className="buton-meniu">Hărți</div>
        <div className="buton-meniu">Quizzuri</div>
        <div className="buton-meniu" onClick={() => navigate("/examene")}>
          Examene anterioare
        </div>
        <div className="buton-meniu">Chat cu mentorul</div>
        <div className="buton-meniu">Jocuri</div>
        <div className="buton-meniu">Evoluția mea</div>
      </div>

      <div
        id="setari"
        className={`setari ${setariAscunse ? "deschis" : "ascuns"}`}
        ref={setariRef}
      >
        <button
          className="buton-inchidere"
          onClick={() => setSetariAscunse(false)}
        >
          <img src={cancelSvg} alt="Închide" className="icon-inchidere" />
        </button>
        <button className="buton-meniu">Actualizare nume</button>
        <button className="buton-meniu">Actualizare poză profil</button>
        <button className="buton-meniu">Schimbare parolă</button>
      </div>
    </div>
  );
}

export default Home;
