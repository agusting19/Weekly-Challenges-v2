import { useState } from "react";
import {
  Modal,
  Layout,
  ButtonSolution,
  ButtonNextReturn,
} from "../../components";
import styles from "../../styles/challenges.module.css";

const Week05 = () => {
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");
  const [input, setInput] = useState({
    imgLink: "",
  });

  const onChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeModalState = () => {
    setShowModal(!showModal);
  };

  const onSubmit = () => {
    if (!input.imgLink) {
      return setMessage("No URL entered");
    }

    let imgTag = document.createElement("img");
    imgTag.src = input.imgLink;
    let imgRatio = imgTag.naturalWidth / imgTag.naturalHeight;

    if (imgRatio === 1 / 1) {
      return setMessage("Aspect ratio of 1:1");
    }
    if (imgRatio === 3 / 2) {
      return setMessage("Aspect ratio of 3:2");
    }
    if (imgRatio === 4 / 3) {
      return setMessage("Aspect ratio of 4:3");
    }
    if (imgRatio === 4 / 5) {
      return setMessage("Aspect ratio of 16:9");
    }
    if (imgRatio === 14 / 6) {
      return setMessage("Aspect ratio of 14/6");
    }
    if (imgRatio === 16 / 9) {
      return setMessage("Aspect ratio of 16:9");
    }
    return setMessage("Unknown aspect ratio");
  };

  return (
    <Layout>
      <div className={styles.container}>
        <h2 className={styles.container__title}>
          Challenge 05: Aspect ratio of an image
        </h2>
        <div className={styles.container__statement}>
          <p className={styles.container__statement__p}>Difficulty: Hard</p>
          <p className={styles.container__statement__p}>
            Problem statement: Create a program that is responsible for
            calculating the aspect ratio of an image from a url.
          </p>
          <p className={styles.container__statement__p}>
            By ratio we refer, for example, to 16:9 of a 1920*1080px image.
          </p>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              onSubmit();
              changeModalState();
            }}
            className={styles.container__statement__form}
          >
            <input
              name="imgLink"
              placeholder="URL of the img"
              onChange={onChange}
            />
            <ButtonSolution />
          </form>
        </div>
        <div className={styles.container__buttons}>
          <ButtonNextReturn link={"/Challenges/week04"} text={"Back"} />
          <ButtonNextReturn link={"/Challenges/week06"} text={"Next"} />
        </div>
        <Modal isOpen={showModal} closeModal={changeModalState}>
          {message}
        </Modal>
      </div>
    </Layout>
  );
};

export default Week05;
