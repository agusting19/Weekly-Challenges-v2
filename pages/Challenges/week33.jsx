import { useState } from "react";
import {
  Layout,
  ButtonSolution,
  ButtonNextReturn,
  Modal,
} from "../../components";
import styles from "../../styles/challenges.module.css";

const elements = ["wood", "fire", "earth", "metal", "water"];
const animals = [
  "rat",
  "ox",
  "tiger",
  "rabbit",
  "dragon",
  "snake",
  "horse",
  "goat",
  "monkey",
  "rooster",
  "dog",
  "pig",
];

const Week33 = () => {
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");
  const [input, setInput] = useState({
    year: "",
  });

  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const year = parseInt(input.year);

    if (!year) {
      return setMessage("Please enter a valid year");
    }

    if (year < 604) {
      setMessage("The sexagesimal system started in the year 604.");
    }

    const sexagenaryYear = (year - 4) % 60;
    const element = elements[(sexagenaryYear % 10) / 2];
    const animal = animals[sexagenaryYear % 12];

    return setMessage(`The year ${year} is the year of the ${animal} ${element}`);
  };

  const changeModalState = () => {
    setShowModal(!showModal);
  };

  return (
    <Layout>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Challenge 33: Chinese sexagenarium cycle
        </h2>
        <div className={styles.statement}>
          <p className={styles.statement__p}>Difficulty: Medium</p>
          <p className={styles.statement__p}>
            Problem statement: Create a function that, given a year, indicates
            the corresponding element and animal in the sexagenarian cycle of
            the Chinese zodiac.
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
                name="year"
                placeholder="Insert a year"
                onChange={onChange}
                className={styles.input}
              />
            </div>
            <ButtonSolution />
          </form>
        </div>
        <div className={styles.buttons}>
          <ButtonNextReturn link="/Challenges/week32" text="Back" />
          <ButtonNextReturn link="/" text="Next" />
        </div>
        <Modal isOpen={showModal} closeModal={changeModalState}>
          <div className={styles.modal__message}>{message}</div>
        </Modal>
      </div>
    </Layout>
  );
};

export default Week33;
