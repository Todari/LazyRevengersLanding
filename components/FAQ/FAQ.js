import { text } from "@/consts/text";
import styles from "@/styles/FAQ.module.scss";
import { useState } from "react";
import LogoWrapper from "../LogoWrapper/LogoWrapper";

const FAQ = () => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      active: false,
    },
    {
      id: 2,
      active: false,
    },
    {
      id: 3,
      active: false,
    },
    {
      id: 4,
      active: false,
    },
    {
      id: 5,
      active: false,
    },
    {
      id: 6,
      active: false,
    },
  ]);
  const toggleQuestion = (id) => {
    const newArr = questions;
    newArr[id - 1].active = !newArr[id - 1].active;
    setQuestions([...newArr]);
  };
  return (
    <div className={`dfc aic jcc ${styles.faq_container}`}>
      {/* <LogoWrapper /> */}
      <div className={styles.faq_top}>
        <h1 className={styles.decorative}>{text.en.faq.title}</h1>
      </div>
      <div className={styles.faq_bot}>
        <div className={styles.questions_container}>
          <div className={styles.leftSection}>
            <div className={styles.question_wrapper}>
              <div className={styles.title_wrapper}>
                <h1>What&apos;s your mint informations?</h1>
                <div
                  className={
                    questions[0].active
                      ? `${[
                          styles.faq_button_wrapper,
                          styles.faq_button_wrapper_active,
                        ].join(" ")}`
                      : `${styles.faq_button_wrapper}`
                  }
                >
                  <button
                    aria-label="toggle list 1"
                    onClick={() => toggleQuestion(questions[0].id)}
                    className={
                      !questions[0].active
                        ? `${styles.faq_button}`
                        : `${styles.faq_button_active}`
                    }
                  ></button>
                </div>
              </div>
              <div
                key={questions[0].id}
                className={
                  questions[0].active
                    ? `${styles.faq_answer}`
                    : `${styles.faq_answer_hidden}`
                }
              >
                <div className={styles.text_wrapper}>
                  <p>Date: October 11th</p>
                  <p>Supply: 777</p>
                  <p>Price: Freemint</p>
                </div>
                <div
                  className={[styles.text_wrapper, styles.c_padding].join(" ")}
                >
                  <p>
                    Roles: Anyone with WL, OG, Freemint, and Airdrop roles will
                    keep the same roles for both collections.
                  </p>
                </div>
                <div className={styles.text_wrapper}>
                  <p>
                    Key points: Holder from The Original Collection will be
                    Freemint for The Lucky Bones Collection and could have
                    access to Lucky Cockpit (our next web3 tool).
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.question_wrapper}>
              <div className={styles.title_wrapper}>
                <h1>What&apos;s your mint informations?</h1>
                <div
                  className={
                    questions[1].active
                      ? `${[
                          styles.faq_button_wrapper,
                          styles.faq_button_wrapper_active,
                        ].join(" ")}`
                      : `${styles.faq_button_wrapper}`
                  }
                >
                  <button
                    aria-label="toggle list 2"
                    onClick={() => toggleQuestion(questions[1].id)}
                    className={
                      !questions[1].active
                        ? `${styles.faq_button}`
                        : `${styles.faq_button_active}`
                    }
                  ></button>
                </div>
              </div>
              <div
                key={questions[1].id}
                className={
                  questions[1].active
                    ? `${styles.faq_answer}`
                    : `${styles.faq_answer_hidden}`
                }
              >
                <div className={styles.text_wrapper}>
                  <p>Date: October 11th</p>
                  <p>Supply: 777</p>
                  <p>Price: Freemint</p>
                </div>
                <div
                  className={[styles.text_wrapper, styles.c_padding].join(" ")}
                >
                  <p>
                    Roles: Anyone with WL, OG, Freemint, and Airdrop roles will
                    keep the same roles for both collections.
                  </p>
                </div>
                <div className={styles.text_wrapper}>
                  <p>
                    Key points: Holder from The Original Collection will be
                    Freemint for The Lucky Bones Collection and could have
                    access to Lucky Cockpit (our next web3 tool).
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.question_wrapper}>
              <div className={styles.title_wrapper}>
                <h1>What&apos;s your mint informations?</h1>
                <div
                  className={
                    questions[2].active
                      ? `${[
                          styles.faq_button_wrapper,
                          styles.faq_button_wrapper_active,
                        ].join(" ")}`
                      : `${styles.faq_button_wrapper}`
                  }
                >
                  <button
                    aria-label="toggle list 3"
                    onClick={() => toggleQuestion(questions[2].id)}
                    className={
                      !questions[2].active
                        ? `${styles.faq_button}`
                        : `${styles.faq_button_active}`
                    }
                  ></button>
                </div>
              </div>
              <div
                key={questions[2].id}
                className={
                  questions[2].active
                    ? `${styles.faq_answer}`
                    : `${styles.faq_answer_hidden}`
                }
              >
                <div className={styles.text_wrapper}>
                  <p>Date: October 11th</p>
                  <p>Supply: 777</p>
                  <p>Price: Freemint</p>
                </div>
                <div
                  className={[styles.text_wrapper, styles.c_padding].join(" ")}
                >
                  <p>
                    Roles: Anyone with WL, OG, Freemint, and Airdrop roles will
                    keep the same roles for both collections.
                  </p>
                </div>
                <div className={styles.text_wrapper}>
                  <p>
                    Key points: Holder from The Original Collection will be
                    Freemint for The Lucky Bones Collection and could have
                    access to Lucky Cockpit (our next web3 tool).
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.rightSection}>
            <div className={styles.question_wrapper}>
              <div className={styles.title_wrapper}>
                <h1>What&apos;s your mint informations?</h1>
                <div
                  className={
                    questions[3].active
                      ? `${[
                          styles.faq_button_wrapper,
                          styles.faq_button_wrapper_active,
                        ].join(" ")}`
                      : `${styles.faq_button_wrapper}`
                  }
                >
                  <button
                    aria-label="toggle list 4"
                    onClick={() => toggleQuestion(questions[3].id)}
                    className={
                      !questions[3].active
                        ? `${styles.faq_button}`
                        : `${styles.faq_button_active}`
                    }
                  ></button>
                </div>
              </div>
              <div
                key={questions[3].id}
                className={
                  questions[3].active
                    ? `${styles.faq_answer}`
                    : `${styles.faq_answer_hidden}`
                }
              >
                <div className={styles.text_wrapper}>
                  <p>Date: October 11th</p>
                  <p>Supply: 777</p>
                  <p>Price: Freemint</p>
                </div>
                <div
                  className={[styles.text_wrapper, styles.c_padding].join(" ")}
                >
                  <p>
                    Roles: Anyone with WL, OG, Freemint, and Airdrop roles will
                    keep the same roles for both collections.
                  </p>
                </div>
                <div className={styles.text_wrapper}>
                  <p>
                    Key points: Holder from The Original Collection will be
                    Freemint for The Lucky Bones Collection and could have
                    access to Lucky Cockpit (our next web3 tool).
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.question_wrapper}>
              <div className={styles.title_wrapper}>
                <h1>What&apos;s your mint informations?</h1>
                <div
                  className={
                    questions[4].active
                      ? `${[
                          styles.faq_button_wrapper,
                          styles.faq_button_wrapper_active,
                        ].join(" ")}`
                      : `${styles.faq_button_wrapper}`
                  }
                >
                  <button
                    aria-label="toggle list 5"
                    onClick={() => toggleQuestion(questions[4].id)}
                    className={
                      !questions[4].active
                        ? `${styles.faq_button}`
                        : `${styles.faq_button_active}`
                    }
                  ></button>
                </div>
              </div>
              <div
                key={questions[4].id}
                className={
                  questions[4].active
                    ? `${styles.faq_answer}`
                    : `${styles.faq_answer_hidden}`
                }
              >
                <div className={styles.text_wrapper}>
                  <p>Date: October 11th</p>
                  <p>Supply: 777</p>
                  <p>Price: Freemint</p>
                </div>
                <div
                  className={[styles.text_wrapper, styles.c_padding].join(" ")}
                >
                  <p>
                    Roles: Anyone with WL, OG, Freemint, and Airdrop roles will
                    keep the same roles for both collections.
                  </p>
                </div>
                <div className={styles.text_wrapper}>
                  <p>
                    Key points: Holder from The Original Collection will be
                    Freemint for The Lucky Bones Collection and could have
                    access to Lucky Cockpit (our next web3 tool).
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.question_wrapper}>
              <div className={styles.title_wrapper}>
                <h1>What&apos;s your mint informations?</h1>
                <div
                  className={
                    questions[5].active
                      ? `${[
                          styles.faq_button_wrapper,
                          styles.faq_button_wrapper_active,
                        ].join(" ")}`
                      : `${styles.faq_button_wrapper}`
                  }
                >
                  <button
                    aria-label="toggle list 6"
                    onClick={() => toggleQuestion(questions[5].id)}
                    className={
                      !questions[5].active
                        ? `${styles.faq_button}`
                        : `${styles.faq_button_active}`
                    }
                  ></button>
                </div>
              </div>
              <div
                key={questions[5].id}
                className={
                  questions[5].active
                    ? `${styles.faq_answer}`
                    : `${styles.faq_answer_hidden}`
                }
              >
                <div className={styles.text_wrapper}>
                  <p>Date: October 11th</p>
                  <p>Supply: 777</p>
                  <p>Price: Freemint</p>
                </div>
                <div
                  className={[styles.text_wrapper, styles.c_padding].join(" ")}
                >
                  <p>
                    Roles: Anyone with WL, OG, Freemint, and Airdrop roles will
                    keep the same roles for both collections.
                  </p>
                </div>
                <div className={styles.text_wrapper}>
                  <p>
                    Key points: Holder from The Original Collection will be
                    Freemint for The Lucky Bones Collection and could have
                    access to Lucky Cockpit (our next web3 tool).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
