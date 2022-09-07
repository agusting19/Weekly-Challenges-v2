import { useState } from "react";
import {
  Layout,
  ButtonSolution,
  ButtonNextReturn,
  Modal,
} from "../../components";
import styles from "../../styles/challenges.module.css";

const alphabet = {
  a: "A",
  b: "B",
  c: "C",
  d: "D",
  e: "E",
  f: "F",
  g: "G",
  h: "H",
  i: "I",
  j: "J",
  k: "K",
  l: "L",
  m: "M",
  n: "N",
  o: "O",
  p: "P",
  q: "Q",
  r: "R",
  s: "S",
  t: "T",
  u: "U",
  w: "W",
  x: "X",
  y: "Y",
  z: "Z",
};

const Week16 = () => {
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");
  const [input, setInput] = useState({
    string: "",
  });

  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const stringArray = input.string.split(" ");
    let result = "";
    stringArray.map((word) => {
      const firstLetter = word.charAt(0);
      if (alphabet[firstLetter] === undefined) {
        firstLetter = firstLetter.toLocaleLowerCase();
      }
      result += alphabet[firstLetter] + word.substring(1) + " ";
    });

    return setMessage(result);
  };

  const changeModalState = () => {
    setShowModal(!showModal);
  };

  return (
    <Layout>
      <div className={styles.container}>
        <h2 className={styles.title}>Challenge 16: In capital letters</h2>
        <div className={styles.statement}>
          <p className={styles.statement__p}>Difficulty: Easy</p>
          <p className={styles.statement__p}>
            Problem statement: Create a function that receives a String of any
            type and takes care of capitalizing the first letter of each word.
            You cannot use language operations that resolve it directly.
          </p>
          <ul className={styles.statement__ul}>
            <li>
              You cannot use language operations that resolve it directly.
            </li>
          </ul>
          <form
            className={styles.form}
            onSubmit={(event) => {
              event.preventDefault();
              handleSubmit();
              changeModalState();
            }}
          >
            <div className={styles.statement__form}>
              <input
                name="string"
                placeholder="Insert a string"
                onChange={onChange}
                className={styles.statement__form__input}
              ></input>
            </div>
            <ButtonSolution />
          </form>
        </div>
        <div className={styles.buttons}>
          <ButtonNextReturn link={"/Challenges/week15"} text={"Back"} />
          <ButtonNextReturn link={"/Challenges/week17"} text={"Next"} />
        </div>
        <Modal isOpen={showModal} closeModal={changeModalState}>
          <div className={styles.modal__message}>{message}</div>
        </Modal>
      </div>
    </Layout>
  );
};

export default Week16;
