// import { useState } from "react";
import styles from "./week09.module.css";

// const morseCode = {
//   A: ".-",
//   B: "-...",
//   C: "-.-.",
//   D: "-..",
//   E: ".",
//   F: "..-.",
//   G: "--.",
//   H: "....",
//   I: "..",
//   J: ".---",
//   K: "-.-",
//   L: ".-..",
//   M: "--",
//   N: "-.",
//   O: "---",
//   P: ".--.",
//   Q: "--.-",
//   R: ".-.",
//   S: "...",
//   T: "-",
//   U: "..-",
//   W: ".--",
//   X: "-..-",
//   Y: "-.--",
//   Z: "--..",
// };

const Week09 = () => {
  const onChange = (e) => {
    let words = e.target.name;

    if (words[0].match("[a-zA-Z]+")) {
      console.log("son letras");
    } else {
      console.log("es codigo morse");
    }
    // setInput({...input, [e.event.name]: e.target.name});
  };

  const handleSubmit = () => {};

  return (
    <section className={styles.container}>
      <h2>Challenge 09: Morse code</h2>
      <div>
        <p>Difficulty: Medium</p>
        <p>
          Problem statement: Create a program that is capable of transforming
          natural text to morse code and vice versa.
        </p>
        <form
          className={styles.form}
          onSubmit={(event) => {
            event.preventDefault();
            handleSubmit();
            // changeModalState();
          }}
        >
          <input
            type="text"
            name="text"
            placeholder="Insert a text"
            onChange={onChange}
          />
          <button>Show solution</button>
        </form>
      </div>
    </section>
  );
};

export default Week09;

//Enunciado: Crea un programa que sea capaz de transformar texto natural a código morse y viceversa.
//Debe detectar automáticamente de qué tipo se trata y realizar la conversión.
//En morse se soporta raya "—", punto ".", un espacio " " entre letras o símbolos y dos espacios entre palabras "  ".
//El alfabeto morse soportado será el mostrado en https://es.wikipedia.org/wiki/Código_morse.
