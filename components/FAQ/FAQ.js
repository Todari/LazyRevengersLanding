import { text } from "@/consts/text";
import styles from "@/styles/FAQ.module.scss";
import { useState } from "react";
import { useIntl } from "react-intl";
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

  const intl = useIntl();
  const q1 = intl.formatMessage({ id: "faq.q1" })
  const q2 = intl.formatMessage({ id: "faq.q2" })
  const q3 = intl.formatMessage({ id: "faq.q3" })
  const q4 = intl.formatMessage({ id: "faq.q4" })
  const q5 = intl.formatMessage({ id: "faq.q5" })
  const q6 = intl.formatMessage({ id: "faq.q6" })

  const a11 = intl.formatMessage({ id: "faq.a11" })
  const a12 = intl.formatMessage({ id: "faq.a12" })
  const a13 = intl.formatMessage({ id: "faq.a13" })
  const a14 = intl.formatMessage({ id: "faq.a14" })
  const a15 = intl.formatMessage({ id: "faq.a15" })
  const a21 = intl.formatMessage({ id: "faq.a21" })
  const a22 = intl.formatMessage({ id: "faq.a22" })
  const a31 = intl.formatMessage({ id: "faq.a31" })
  const a32 = intl.formatMessage({ id: "faq.a32" })
  const a41 = intl.formatMessage({ id: "faq.a41" })
  const a42 = intl.formatMessage({ id: "faq.a42" })
  const a43 = intl.formatMessage({ id: "faq.a43" })
  const a44 = intl.formatMessage({ id: "faq.a44" })
  const a45 = intl.formatMessage({ id: "faq.a45" })

  const a51 = intl.formatMessage({ id: "faq.a51" })
  const a52 = intl.formatMessage({ id: "faq.a52" })
  const a53 = intl.formatMessage({ id: "faq.a53" })
  const a54 = intl.formatMessage({ id: "faq.a54" })
  const a61 = intl.formatMessage({ id: "faq.a61" })


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
                <h1>{q1}</h1>
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
                  <p>{a11}</p>
                </div>
              </div>
            </div>
            <div className={styles.question_wrapper}>
              <div className={styles.title_wrapper}>
                <h1>{q2}</h1>
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
                  <p>{a21}</p>
                </div>
                <div
                  className={[styles.text_wrapper, styles.c_padding].join(" ")}
                >
                  <p>{a22}</p>
                </div>
              </div>
            </div>

            <div className={styles.question_wrapper}>
              <div className={styles.title_wrapper}>
                <h1>{q3}</h1>
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
                  <p>{a31}</p>
                </div>
                <div
                  className={[styles.text_wrapper, styles.c_padding].join(" ")}
                >
                  <p>
                    {a32}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.rightSection}>
            <div className={styles.question_wrapper}>
              <div className={styles.title_wrapper}>
                <h1>{q4}</h1>
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
                  <p>
                    {a41}</p>
                </div>
                <div
                  className={[styles.text_wrapper, styles.c_padding].join(" ")}
                >
                  <p>{a42}</p>
                  <p>{a43}</p>
                  <p>{a44}</p>
                  <p>{a45}</p>
                </div>
                <div className={styles.text_wrapper}>

                </div>
              </div>
            </div>
            <div className={styles.question_wrapper}>
              <div className={styles.title_wrapper}>
                <h1>{q5}</h1>
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
                  <p>{a51}</p>
                </div>
                <div
                  className={[styles.text_wrapper, styles.c_padding].join(" ")}
                >
                  <p>{a52}</p>
                  <p>{a53}</p>
                  <p>{a54}</p>
                </div>
              </div>
            </div>
            <div className={styles.question_wrapper}>
              <div className={styles.title_wrapper}>
                <h1>{q6}</h1>
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
                  <p>{a61}</p>
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
