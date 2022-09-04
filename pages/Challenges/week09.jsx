import { useState } from "react";
import {
  Modal,
  Layout,
  ButtonSolution,
  ButtonNextReturn,
} from "../../components";
import styles from "../../styles/challenges.module.css";

const textToMorse = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--..",
};

let morseToText = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

const Week09 = () => {
  const [showModal, setShowModal] = useState(false);
  const [input, setInput] = useState({
    text: "",
  });
  const [message, setMessage] = useState("");

  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    let inputArray;
    let solutionString = " ";

    if (input.text.indexOf("  ") === -1) {
      inputArray = input.text.toUpperCase().split(" ");
      inputArray.map((word) => {
        for (let i = 0; i < word.length; i++) {
          solutionString += textToMorse[word[i]] + "\xa0";
        }
        solutionString += "\xa0\xa0";
      });
    } else {
      inputArray = input.text.split(" ");
      console.log(inputArray);
      inputArray.map((morse) => {
        if (morse === "") return (solutionString += "\xa0");
        solutionString += morseToText[morse];
      });
    }
    setMessage(solutionString);
  };

  const changeModalState = () => {
    setShowModal(!showModal);
  };

  return (
    <Layout>
      <div className={styles.container}>
        <h2 className={styles.title}>Challenge 09: Morse code</h2>
        <div className={styles.statement}>
          <p className={styles.statement__p}>Difficulty: Medium</p>
          <p className={styles.statement__p}>
            Problem statement: Create a program that is capable of transforming
            natural text to morse code and vice versa.
          </p>
          <ul className={styles.statement__ul}>
            <li>
              It should automatically detect what type it is and perform the
              conversion.
            </li>
            <li>
              In morse, dash &quot;—&quot;, dot &quot;.&quot;, a space &quot;
              &quot; between letters or symbols, and two spaces between words
              are supported.
            </li>
            <li>
              The supported morse alphabet will be the one shown in
              &quot;https://es.wikipedia.org/wiki/Código_morse.&quot;
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
            <input
              type="text"
              name="text"
              placeholder="Insert a text"
              onChange={onChange}
              className={styles.statement__form__input}
            />
            <ButtonSolution />
          </form>
        </div>
        <div className={styles.buttons}>
          <ButtonNextReturn link={"/Challenges/week08"} text={"Back"} />
          <ButtonNextReturn link={"/Challenges/week10"} text={"Next"} />
        </div>
        <Modal isOpen={showModal} closeModal={changeModalState}>
          <div className={styles.modal__message}>{message}</div>
        </Modal>
      </div>
    </Layout>
  );
};

export default Week09;

// * Enunciado: Crea un programa que sea capaz de transformar texto natural a código morse y viceversa.
// * - Debe detectar automáticamente de qué tipo se trata y realizar la conversión.
// * - En morse se soporta raya "—", punto ".", un espacio " " entre letras o símbolos y dos espacios entre palabras "  ".
// * - El alfabeto morse soportado será el mostrado en https://es.wikipedia.org/wiki/Código_morse.
