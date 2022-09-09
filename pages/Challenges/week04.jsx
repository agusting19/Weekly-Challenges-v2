import { useState, useEffect } from "react";
import {
  Modal,
  Layout,
  ButtonSolution,
  ButtonNextReturn,
} from "../../components";
import styles from "../../styles/challenges.module.css";

const Week04 = () => {
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");
  const [input, setInput] = useState({
    select: "triangle",
    firstNum: 0,
    secondNum: 0,
    result: 0,
  });
  let inputs;

  const changeModalState = () => {
    setShowModal(!showModal);
  };

  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  if (input.select === "triangle" || input.select === "rectangle") {
    inputs = (
      <div className={styles.statement__form}>
        <input
          name="firstNum"
          placeholder="Base"
          onChange={onChange}
          className={styles.input}
        ></input>
        <input
          name="secondNum"
          placeholder="Height"
          onChange={onChange}
          className={styles.input}
        ></input>
      </div>
    );
  } else {
    inputs = (
      <div>
        <input
          name="firstNum"
          placeholder="Base"
          onChange={onChange}
          className={styles.input}
        ></input>
      </div>
    );
  }

  const areaCalculation = () => {
    switch (input.select) {
      case "triangle":
        input.result = (input.firstNum * input.secondNum) / 2;
        break;
      case "square":
        input.result = input.firstNum * input.firstNum;
        break;
      case "rectangle":
        input.result = input.firstNum * input.secondNum;
        break;
      default:
        alert("geometric figure not considered");
    }
    setMessage(`Result: ${input.result}`);
    changeModalState();
  };

  return (
    <Layout>
      <div className={styles.container}>
        <h2 className={styles.title}>Challenge 04: Polygon area</h2>
        <div className={styles.statement}>
          <p className={styles.statement__p}>Difficulty: Easy</p>
          <p className={styles.statement__p}>
            Problem statement: Create a single function that is capable of
            calculating and returning the area of a polygon.
          </p>
          <ul className={styles.statement__ul}>
            <li>
              The function will receive as parameter the base and height of a
              polygon at a time.
            </li>
            <li>
              The supported polygons will be Triangle, Square and Rectangle.
            </li>
          </ul>
          <select name="select" onChange={onChange} className={styles.select}>
            <option value="triangle">Triangle</option>
            <option value="square">Square</option>
            <option value="rectangle">Rectangle</option>
          </select>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              areaCalculation();
            }}
          >
            {inputs}
            <ButtonSolution />
          </form>
        </div>
        <div className={styles.buttons}>
          <ButtonNextReturn link={"/Challenges/week03"} text={"Back"} />
          <ButtonNextReturn link={"/Challenges/week05"} text={"Next"} />
        </div>
        <Modal isOpen={showModal} closeModal={changeModalState}>
          <div>{message}</div>
        </Modal>
      </div>
    </Layout>
  );
};

export default Week04;
