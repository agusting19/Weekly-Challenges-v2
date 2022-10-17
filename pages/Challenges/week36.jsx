import { useState } from "react";
import {
  Layout,
  ButtonSolution,
  ButtonNextReturn,
  Modal,
} from "../../components";
import styles from "../../styles/challenges.module.css";

const kindRaces = {
  furry: "furry",
  goodsouthlanders: "goodsouthlanders",
  dwarves: "dwarves",
  numenoreans: "numenoreans",
  elves: "elves",
};

const evilRaces = {
  evilsouthlanders: "evilsouthlanders",
  orcs: "orcs",
  goblins: "goblins",
  wargs: "wargs",
  trolls: "trolls",
};

const winnerCalculation = (kind, kindTotal, evil, evilTotal) => {
  let kindPoints = 0;
  let evilPoints = 0;

  switch (kind) {
    case kindRaces.furry:
      kindPoints = kindTotal * 1;
      break;
    case kindRaces.goodsouthlanders:
      kindPoints = kindTotal * 2;
      break;
    case kindRaces.dwarves:
      kindPoints = kindTotal * 3;
      break;
    case kindRaces.numenoreans:
      kindPoints = kindTotal * 4;
      break;
    case kindRaces.elves:
      kindPoints = kindTotal * 5;
      break;
  }

  switch (evil) {
    case evilRaces.evilsouthlanders:
      evilPoints = evilTotal * 2;
      break;
    case evilRaces.orcs:
      evilPoints = evilTotal * 2;
      break;
    case evilRaces.goblins:
      evilPoints = evilTotal * 2;
      break;
    case evilRaces.wargs:
      evilPoints = evilTotal * 3;
      break;
    case evilRaces.trolls:
      evilPoints = evilTotal * 5;
      break;
  }

  if (kindPoints > evilPoints) {
    return `${kindTotal} ${kind} wins against ${evilTotal} ${evil}`;
  }

  return `${kindTotal} ${kind} loses against ${evilTotal} ${evil}`;
};

const Week36 = () => {
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");
  const [input, setInput] = useState({
    kindRace: "",
    evilRace: "",
  });

  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!input.kindRace || !input.evilRace) {
      return setMessage("Please fill all inputs");
    }

    const kindRace = input.kindRace.split(" ")[0];
    const kindNumber = input.kindRace.split(" ")[1];
    const evilRace = input.evilRace.split(" ")[0];
    const evilNumber = input.evilRace.split(" ")[1];

    if (
      kindRace != kindRaces[kindRace] ||
      isNaN(kindNumber) ||
      evilRace != evilRaces[evilRace] ||
      isNaN(evilNumber)
    ) {
      return setMessage("Please fill input as the example");
    }

    const result = winnerCalculation(
      kindRace,
      kindNumber,
      evilRace,
      evilNumber
    );
    return setMessage(result);
  };

  const changeModalState = () => {
    setShowModal(!showModal);
  };

  return (
    <Layout>
      <div className={styles.container}>
        <h2 className={styles.title}>Challenge 36: The rings of power</h2>
        <div className={styles.statement}>
          <p className={styles.statement__p}>Difficulty: Medium</p>
          <p className={styles.statement__p}>
            Problem statement: Middle-earth is at war! In it, races loyal to
            Sauron will fight against other kind ones who do not want evil to
            reign over their lands.
          </p>
          <ul className={styles.statement__ul}>
            <li>
              Kind races: furry, goodsouthlanders, dwarves, numenoreans, elves.
            </li>
            <li>Evil Races: evilsouthlanders, orcs, goblins, wargs, trolls.</li>
          </ul>
          <p className={styles.statement__p}>
            Insert race and number of members. e.g. evilsouthlanders 10
          </p>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              handleSubmit();
              changeModalState();
            }}
          >
            <div className={styles.statement__form}>
              <input
                name="kindRace"
                placeholder="Kind Race"
                onChange={onChange}
                className={styles.input}
              />
              <input
                name="evilRace"
                placeholder="Evil Race"
                onChange={onChange}
                className={styles.input}
              />
            </div>
            <ButtonSolution />
          </form>
        </div>
        <div className={styles.buttons}>
          <ButtonNextReturn link="/Challenges/week35" text="Back" />
          <ButtonNextReturn link="/Challenges/week37" text="Next" />
        </div>
        <Modal isOpen={showModal} closeModal={changeModalState}>
          <div className={styles.modal__message}>{message}</div>
        </Modal>
      </div>
    </Layout>
  );
};

export default Week36;
