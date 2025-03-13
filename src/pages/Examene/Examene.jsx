import { useNavigate } from "react-router-dom";
import "./Examene.css";
import { useState } from "react";

const examene = {
  2024: ["Bac 2024", "Simulare 2024", "Test"],
  2025: ["Bac 2024", "Simulare 2024", "Test"],
};

const document = {
  examene: {
    2024: [
      {
        id: 0,
        nume: "Bac 2024",
        puncte: {
          A: {
            1: {
              intrebare: "Incercuiti tara cu litera",
              raspunsuri: ["Romania"],
            },
          },
        },
      },
      { id: 1, nume: "Simulare 2024" },
      { id: 2, nume: "Test" },
    ],
  },
};

// GET /examene/2024/0

const Examene = () => {
  const navigate = useNavigate();
  const ani = [2020, 2021, 2022];
  const [anSelectat, setAnSelectat] = useState(null);

  return (
    <div>
      <div className="container-top">Examene anterioare</div>
      <div className="container-examene">
        {Object.entries(examene).map(([an, lista], index) => {
          return (
            <div
              className="container-exam"
              onMouseEnter={() => {
                setAnSelectat(index);
              }}
            >
              <span>An {an}</span>
              <div>
                {index == anSelectat &&
                  lista.map((element, idx) => {
                    return (
                      <button onClick={() => navigate(`/examen/${an}/${idx}`)}>
                        {element}
                      </button>
                    );
                  })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
//<button onClick={() => navigate("/")}>Inapoi la home</button>
export default Examene;
