import { useState } from "react";
import {
  Layout,
  ButtonSolution,
  ButtonNextReturn,
  Modal,
} from "../../components";
import styles from "../../styles/challenges.module.css";

const Week18 = () => {
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");
  const [input, setInput] = useState({
    one: "",
    two: "",
    three: "",
    four: "",
    five: "",
    six: "",
    seven: "",
    eight: "",
    nine: "",
  });

  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // Inputs is an array with all the data
    const inputs = [];
    const { one, two, three, four, five, six, seven, eight, nine } = input;

    inputs.push(one, two, three, four, five, six, seven, eight, nine);

    //check that there are no incorrect values, only X and O or " "
    const verifier = inputs.filter(
      (value) => value == "" || value == "X" || value == "O"
    ).length;

    if (verifier != 9) {
      return setMessage("Incorrect values entered (Only accept X / O)");
    }

    //check if X and O have the same amount
    const xCounter = inputs.filter((value) => value == "X").length;
    const oCounter = inputs.filter((value) => value == "O").length;
    if (xCounter != oCounter) {
      return setMessage("X and O have to be the same amount");
    }

    let winningLine = 0;
    let winningSign = "";

    if (inputs[0] == inputs[1] && inputs[0] == inputs[2]) {
      winningLine += 1;
      winningSign = inputs[0];
    }

    if (inputs[3] == inputs[4] && inputs[3] == inputs[5]) {
      winningLine += 1;
      winningSign = inputs[3];
    }

    if (inputs[6] == inputs[7] && inputs[6] == inputs[8]) {
      winningLine += 1;
      winningSign = inputs[6];
    }

    if (inputs[0] == inputs[3] && inputs[0] == inputs[6]) {
      winningLine += 1;
      winningSign = inputs[0];
    }

    if (inputs[1] == inputs[4] && inputs[1] == inputs[7]) {
      winningLine += 1;
      winningSign = inputs[1];
    }

    if (inputs[2] == inputs[5] && inputs[2] == inputs[8]) {
      winningLine += 1;
      winningSign = inputs[2];
    }

    if (inputs[0] == inputs[4] && inputs[0] == inputs[8]) {
      winningLine += 1;
      winningSign = inputs[0];
    }

    if (inputs[2] == inputs[4] && inputs[2] == inputs[6]) {
      winningLine += 1;
      winningSign = inputs[2];
    }

    if (winningLine == 0) {
      return setMessage("The game end with: Draw");
    }

    if (winningLine == 1) {
      return setMessage(`The winner is: ${winningSign}`);
    }

    return setMessage("The game end with: Null");
  };

  const changeModalState = () => {
    setShowModal(!showModal);
  };

  return (
    <Layout>
      <div className={styles.container}>
        <h2 className={styles.title}>Challenge 18: tic tac toe</h2>
        <div className={styles.statement}>
          <p className={styles.statement__p}>Difficulty: Hard</p>
          <p className={styles.statement__p}>
            Problem statement: Create a function that parses a 3x3 matrix made
            up of &quot;X&quot; and &quot;O&quot; and returns the following:
          </p>
          <ul className={styles.statement__ul}>
            <li>&quot;X&quot; if they have won the &quot;X&quot;</li>
            <li>&quot;O&quot; if they have won the &quot;O&quot;</li>
            <li>&quot;Draw&quot; if there was a draw</li>
            <li>
              &quot;Null&quot; if the proportion of &quot;X&quot;, of
              &quot;O&quot;, or of the matrix is not correct. Or if both have
              won.
            </li>
          </ul>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              handleSubmit();
              changeModalState();
            }}
          >
            <div className={styles.statement__form__triple}>
              <div>
                <input
                  name="one"
                  placeholder=" "
                  maxLength="1"
                  onChange={onChange}
                  className={styles.input__v2}
                />
                <input
                  name="two"
                  placeholder=" "
                  maxLength="1"
                  onChange={onChange}
                  className={styles.input__v2}
                />
                <input
                  name="three"
                  placeholder=" "
                  maxLength="1"
                  onChange={onChange}
                  className={styles.input__v2}
                />
              </div>
              <div>
                <input
                  name="four"
                  placeholder=" "
                  maxLength="1"
                  onChange={onChange}
                  className={styles.input__v2}
                />
                <input
                  name="five"
                  placeholder=" "
                  maxLength="1"
                  onChange={onChange}
                  className={styles.input__v2}
                />
                <input
                  name="six"
                  placeholder=" "
                  maxLength="1"
                  onChange={onChange}
                  className={styles.input__v2}
                />
              </div>
              <div>
                <input
                  name="seven"
                  placeholder=" "
                  maxLength="1"
                  onChange={onChange}
                  className={styles.input__v2}
                />
                <input
                  name="eight"
                  placeholder=" "
                  maxLength="1"
                  onChange={onChange}
                  className={styles.input__v2}
                />
                <input
                  name="nine"
                  placeholder=" "
                  maxLength="1"
                  onChange={onChange}
                  className={styles.input__v2}
                />
              </div>
            </div>
            <ButtonSolution />
          </form>
        </div>
        <div className={styles.buttons}>
          <ButtonNextReturn link={"/Challenges/week17"} text={"Back"} />
          <ButtonNextReturn link={"/Challenges/week19"} text={"Next"} />
        </div>
        <Modal isOpen={showModal} closeModal={changeModalState}>
          <div className={styles.modal__message}>{message}</div>
        </Modal>
      </div>
    </Layout>
  );
};

export default Week18;
