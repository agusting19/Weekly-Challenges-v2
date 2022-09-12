import { useState } from "react";
import {
  Layout,
  ButtonSolution,
  ButtonNextReturn,
  Modal,
} from "../../components";
import styles from "../../styles/challenges.module.css";

const Week25 = () => {
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");
  const [input, setInput] = useState({
    figure: "square",
    size: "",
  });

  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const size = parseInt(input.size);
    const figure = input.figure;

    if (!size) {
      return setMessage("Please enter the size of the figure (only numbers)");
    }

    let result = "";
    console.log(figure);
    if (figure == "square") {
      for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
          result += "*";
        }
        result += "\n";
      }
    }

    if (figure == "rectangle") {
      for (let i = 0; i < size / 2; i++) {
        for (let j = 0; j < size; j++) {
          result += "*";
        }
        result += "\n";
      }
    }

    if (figure == "triangle") {
      for (let i = 0; i < size; i++) {
        for (let j = 0; j < i + 1; j++) {
          result += "*";
        }
        result += "\n";
      }
    }

    console.log(result);
    return setMessage("The result is on console");
  };

  const changeModalState = () => {
    setShowModal(!showModal);
  };

  return (
    <Layout>
      <div className={styles.container}>
        <h2 className={styles.title}>Challenge 26: Square or triangle in 2d</h2>
        <div className={styles.statement}>
          <p className={styles.statement__p}>Difficulty: Easy</p>
          <p className={styles.statement__p}>
            Problem statement: Create a program that draws a square or triangle
            with asterisks &quot;*&quot;.
          </p>
          <ul className={styles.statement__ul}>
            <li>
              We will indicate the size of the side and if the figure to draw is
              one or the other.
            </li>
          </ul>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              handleSubmit();
              changeModalState();
            }}
          >
            <div className={styles.statement__form}>
              <input
                name="size"
                placeholder="Insert figure size"
                onChange={onChange}
                className={styles.input}
              />
              <select
                name="figure"
                onChange={onChange}
                className={styles.select}
              >
                <option value="square">Square</option>
                <option value="rectangle">Rectangle</option>
                <option value="triangle">Triangle</option>
              </select>
            </div>
            <ButtonSolution />
          </form>
        </div>
        <div className={styles.buttons}>
          <ButtonNextReturn link={"/Challenges/week25"} text={"Back"} />
          <ButtonNextReturn link={"/"} text={"Next"} />
        </div>
        <Modal isOpen={showModal} closeModal={changeModalState}>
          <div className={styles.modal__message}>{message}</div>
        </Modal>
      </div>
    </Layout>
  );
};

export default Week25;
