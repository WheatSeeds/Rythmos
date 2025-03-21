import Header from "../../components/Header.tsx";
import Footer from "../../components/Footer.tsx";
import { useState } from "react";
import { faqData } from "../../data/faq.ts";

const FaqPage = () => {
  const [answer, setAnswer] = useState(faqData[0].answer);
  const [question, setQuestion] = useState(faqData[0].question);

  return (
    <>
      <Header />
      <main>
        <div id="faq-page-content">
          <span id="faq-page-title">FAQ</span>
          <section id="faq-page-questions">
            {faqData.map((item) => (
              <button
                className="question-button"
                onClick={() => {
                  setAnswer(item.answer);
                  setQuestion(item.question);
                }}
              >
                <img
                  src={
                    item.question === question
                      ? "../icons/minus.svg"
                      : "../icons/plus.svg"
                  }
                  className="question-button-image"
                  alt=""
                />
                <span
                  className={
                    item.question === question
                      ? "question-button-text-focus"
                      : "question-button-text"
                  }
                >
                  {item.question}
                </span>
              </button>
            ))}
          </section>
          <section id="faq-page-answers">
            <span className="faq-page-answer-title">{question}</span>
            <span className="faq-page-answer">{answer}</span>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default FaqPage;
