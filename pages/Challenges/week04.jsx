import { useState } from "react";
import {
  Modal,
  Layout,
  ButtonSolution,
  ButtonNextReturn,
} from "../../components";
import styles from "../../styles/challenges.module.css";

const Week04 = () => {
  const [showModal, setShowModal] = useState();

  const changeModalState = () => {
    setShowModal(!showModal);
  };

  return (
    <Layout>
      <div className={styles.container}>
        <h2 className={styles.container__title}>Challenge 04: Polygon area</h2>
        <div className={styles.container__statement}>
          <p className={styles.container__statement__p}>Difficulty: Easy</p>
          <p className={styles.container__statement__p}>
            Problem statement: Create a single function that is capable of
            calculating and returning the area of a polygon.
          </p>
          <ul className={styles.container__statement__ul}>
            <li>
              The function will receive as parameter the base and height of a
              polygon at a time.
            </li>
            <li>
              The supported polygons will be Triangle, Square and Rectangle.
            </li>
          </ul>
          <ButtonSolution handleClick={changeModalState} />
        </div>
        <div className={styles.container__buttons}>
          <ButtonNextReturn link={"/Challenges/week03"} text={"Back"} />
          <ButtonNextReturn link={"/Challenges/week05"} text={"Next"} />
        </div>
        <Modal isOpen={showModal} closeModal={changeModalState}>
          <h2>aca va el formulario che</h2>
        </Modal>
      </div>
    </Layout>
  );
};

export default Week04;
