import { useState } from "react";
import {
  Layout,
  ButtonSolution,
  ButtonNextReturn,
  Modal,
} from "../../components";
import styles from "../../styles/challenges.module.css";

const Week22 = () => {
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");
  const [input, setInput] = useState({
    firstString: "",
    secondString: "",
    boolean: "true",
  });

  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const firstString = input.firstString;
    const secondString = input.secondString;
    const boolean = input.boolean;

    if (!firstString || !secondString) {
      return setMessage("Please enter values");
    }

    let result = [];
    let longest;
    let shortest;

    if (firstString.length > secondString.length) {
      longest = firstString.split("");
      shortest = secondString.split("");
    } else {
      longest = secondString.split("");
      shortest = firstString.split("");
    }

    if (boolean == "true") {
      for (let i = 0; i < longest.length; i++) {
        if (shortest.includes(longest[i])) {
          result.push(longest[i]);
        }
      }

      if (result.length == 0) {
        return setMessage("The result is an empty set");
      }

      return setMessage(`The set result is: ${result}`);
    }

    for (let i = 0; i < longest.length; i++) {
      if (!shortest.includes(longest[i])) {
        result.push(longest[i]);
      }
      if (!longest.includes(shortest[i])) {
        result.push(shortest[i]);
      }
    }

    if (result.length == 0) {
      return setMessage("The result is an empty set");
    }

    return setMessage(`The set result is: ${result}`);
  };

  const changeModalState = () => {
    setShowModal(!showModal);
  };

  return (
    <Layout>
      <div className={styles.container}>
        <h2 className={styles.title}>Challenge 22: Sets</h2>
        <div className={styles.statement}>
          <p className={styles.statement__p}>Difficulty: Easy</p>
          <p className={styles.statement__p}>
            Problem statement: Create a function that receives two arrays, a
            boolean and returns an array.
          </p>
          <ul className={styles.statement__ul}>
            <li>
              If the boolean is true, it will search for and return the common
              elements of the two arrays.
            </li>
            <li>
              If the boolean is false, it will search for and return the
              non-common elements of the two arrays.
            </li>
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
                name="firstString"
                placeholder="Insert first string"
                onChange={onChange}
                className={styles.input}
              />
              <select
                name="boolean"
                onChange={onChange}
                className={styles.select}
              >
                <option value="true">True</option>
                <option value="false">False</option>
              </select>
              <input
                name="secondString"
                placeholder="Insert second string"
                onChange={onChange}
                className={styles.input}
              />
            </div>
            <ButtonSolution />
          </form>
        </div>
        <div className={styles.buttons}>
          <ButtonNextReturn link={"/Challenges/week21"} text={"Back"} />
          <ButtonNextReturn link={"/Challenges/week23"} text={"Next"} />
        </div>
        <Modal isOpen={showModal} closeModal={changeModalState}>
          <div className={styles.modal__message}>{message}</div>
        </Modal>
      </div>
    </Layout>
  );
};

export default Week22;
