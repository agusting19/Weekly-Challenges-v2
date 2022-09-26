import { useState } from "react";
import {
  Layout,
  ButtonSolution,
  ButtonNextReturn,
  Modal,
} from "../../components";
import styles from "../../styles/challenges.module.css";

const Week30 = () => {
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");
  const [input, setInput] = useState({
    text: "",
  });

  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const text = input.text;

    if (!text) {
      return setMessage("Please enter a text");
    }

    const wordsArray = text.split(" ");
    let maxLength = 0;

    wordsArray.map((word) => {
      if (word.length > maxLength) {
        maxLength = word.length;
      }
    });

    const asterisk = "*";
    let result = asterisk.repeat(maxLength + 2);

    wordsArray.map((word) => {
      let newLine;
      if (word.length !== maxLength) {
        newLine = asterisk + word;
        while (newLine.length < maxLength + 1) {
          newLine += "\xa0";
        }
        newLine += asterisk;
      } else {
        newLine = asterisk + word + asterisk;
      }
      result += "\n" + newLine;
    });

    result += "\n" + asterisk.repeat(maxLength + 2);

    console.log(result);
    setMessage("You can see the result on the console");
  };

  const changeModalState = () => {
    setShowModal(!showModal);
  };

  return (
    <Layout>
      <div className={styles.container}>
        <h2 className={styles.title}>Challenge 30: Word frame</h2>
        <div className={styles.statement}>
          <p className={styles.statement__p}>Difficulty: Easy</p>
          <p className={styles.statement__p}>
            Problem statement: Create a function that receives some text and
            displays each word on one line, forming a rectangular frame of
            asterisks.
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
                name="text"
                placeholder="Insert some text"
                onChange={onChange}
                className={styles.input}
              />
            </div>
            <ButtonSolution />
          </form>
        </div>
        <div className={styles.buttons}>
          <ButtonNextReturn link={"/Challenges/week29"} text={"Back"} />
          <ButtonNextReturn link={"/"} text={"Next"} />
        </div>
        <Modal isOpen={showModal} closeModal={changeModalState}>
          <div className={styles.modal__message}>{message}</div>
        </Modal>
      </div>
    </Layout>
  );
};

export default Week30;
