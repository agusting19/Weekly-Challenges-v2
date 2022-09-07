import { useState } from "react";
import {
  Layout,
  ButtonSolution,
  ButtonNextReturn,
  Modal,
} from "../../components";
import styles from "../../styles/challenges.module.css";

const yearsToDaysRatio = 365.25;

const isLeapYear = (year) => {
  if (year % 400 == 0) return true;
  if (year % 4 == 0 && year % 100 != 0) return true;
  return false;
};

const dateToDays = (dd, mm, yyyy) => {
  let result = 0;
  const dayMonths = [31, 28, 31, 30, 31, 0, 30, 31, 31, 30, 31, 30, 31];

  if (isLeapYear(yyyy)) {
    dayMonths[1] = 29;
  }

  for (let i = 0; i < mm - 1; i++) {
    result += dayMonths[i];
  }

  result += parseInt(yyyy * yearsToDaysRatio);
  result += parseInt(dd);

  return result;
};

const Week15 = () => {
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");
  const [input, setInput] = useState({
    firstDate: "",
    secondDate: "",
  });

  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (input.firstDate === "" || input.secondDate === "") {
      return setMessage("No values entered");
    }

    const firstDateDD = input.firstDate.slice(0, 2);
    const firstDateMM = input.firstDate.slice(3, 5);
    const firstDateYYYY = input.firstDate.slice(6);

    const secondDateDD = input.secondDate.slice(0, 2);
    const secondDateMM = input.secondDate.slice(3, 5);
    const secondDateYYYY = input.secondDate.slice(6);

    parseInt(firstDateDD, firstDateMM, firstDateYYYY);
    parseInt(secondDateDD, secondDateMM, secondDateYYYY);

    if (isNaN(firstDateDD) || isNaN(firstDateMM) || isNaN(firstDateYYYY)) {
      return setMessage("First date: Invalid format");
    }

    if (isNaN(secondDateDD) || isNaN(secondDateMM) || isNaN(secondDateYYYY)) {
      return setMessage("Second date: invalid format");
    }

    const firstResult = dateToDays(firstDateDD, firstDateMM, firstDateYYYY);
    const secondResult = dateToDays(secondDateDD, secondDateMM, secondDateYYYY);

    console.log(firstResult - secondResult);
    if (firstResult > secondResult) {
      return setMessage(
        `There are ${firstResult - secondResult} days between dates`
      );
    }
    return setMessage(
      `There are ${secondResult - firstResult} days between dates`
    );
  };

  const changeModalState = () => {
    setShowModal(!showModal);
  };

  return (
    <Layout>
      <div className={styles.container}>
        <h2 className={styles.title}>Challenge 15: How many days?</h2>
        <div className={styles.statement}>
          <p className={styles.statement__p}>Difficulty: Hard</p>
          <p className={styles.statement__p}>
            Problem statement: Create a function that calculates and returns how
            many days there are between two text strings that represent dates.
          </p>
          <ul className={styles.statement__ul}>
            <li>
              A text string representing a date has the format
              &quot;dd/mm/yyyy&quot;.
            </li>
            <li>
              The function will receive two Strings and will return an Int.
            </li>
            <li>
              The difference in days will be absolute (the order of the dates
              does not matter).
            </li>
            <li>
              If one of the two text strings does not represent a correct date,
              an exception will be thrown.
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
                name="firstDate"
                placeholder="First Date (dd/mm/yyyy)"
                onChange={onChange}
                className={styles.statement__form__input}
              ></input>
              <input
                name="secondDate"
                placeholder="Second Date (dd/mm/yyyy)"
                onChange={onChange}
                className={styles.statement__form__input}
              ></input>
            </div>
            <ButtonSolution />
          </form>
        </div>
        <div className={styles.buttons}>
          <ButtonNextReturn link={"/Challenges/week14"} text={"Back"} />
          <ButtonNextReturn link={"/Challenges/week16"} text={"Next"} />
        </div>
        <Modal isOpen={showModal} closeModal={changeModalState}>
          <div className={styles.modal__message}>{message}</div>
        </Modal>
      </div>
    </Layout>
  );
};

export default Week15;
