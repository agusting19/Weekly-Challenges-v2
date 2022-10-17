import { useState } from "react";
import {
  Layout,
  ButtonSolution,
  ButtonNextReturn,
  Modal,
} from "../../components";
import styles from "../../styles/challenges.module.css";

const Week12 = () => {
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");
  const [input, setInput] = useState({
    text: "",
  });

  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (input.text == "") return setMessage("No values entered");

    const inputArray = input.text
      .replace(/[,.'": ]/g, "")
      .toLowerCase()
      .split("");
    const reverseArray = [];

    for (let i = inputArray.length - 1; i >= 0; i--) {
      reverseArray.push(inputArray[i]);
    }

    for (let i = 0; i < inputArray.length; i++) {
      if (inputArray[i] != reverseArray[i]) {
        return setMessage("This string is not a palindrome");
      }
    }

    return setMessage("This is a palindrome");
  };

  const changeModalState = () => {
    setShowModal(!showModal);
  };

  return (
    <Layout>
      <div className={styles.container}>
        <h2 className={styles.title}>Challenge 12: Is it a palindrome?</h2>
        <div className={styles.statement}>
          <p className={styles.statement__p}>Difficulty: Medium</p>
          <p className={styles.statement__p}>
            Problem statement: Write a function that receives a text and returns
            true or false (Boolean) depending on whether or not they are
            palindromes.
          </p>
          <p className={styles.statement__p}>
            A palindrome is a word or expression that is the same from left to
            right as it is from right to left. Spaces, punctuation marks and
            accents are NOT taken into account. Example: &quot;Mr. Owl ate my
            metal worm&quot;.
          </p>
          <form
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
              className={styles.input}
            />
            <ButtonSolution />
          </form>
        </div>
        <div className={styles.buttons}>
          <ButtonNextReturn link={"/Challenges/week11"} text={"Back"} />
          <ButtonNextReturn link={"/Challenges/week13"} text={"Next"} />
        </div>
        <Modal isOpen={showModal} closeModal={changeModalState}>
          <div className={styles.modal__message}>{message}</div>
        </Modal>
      </div>
    </Layout>
  );
};

export default Week12;
