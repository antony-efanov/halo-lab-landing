import { FC, useState } from "react";
import { IQnAProps } from "./types";

import { ReactComponent as Minus } from "../../../../assets/FAQ/icons/minus.svg";
import { ReactComponent as Plus } from "../../../../assets/FAQ/icons/plus.svg";

const QnA: FC<IQnAProps> = ({ question, answer }) => {
  const [answerOpened, setAnswerOpened] = useState(false);
  const toggleAnswer = () => {
    setAnswerOpened((prev) => !prev);
  };
  return (
    <div className="qna">
      <div className="question">
        <h3 onClick={toggleAnswer} className="question__title">
          {question}
        </h3>
        <button onClick={toggleAnswer} className="generic-button question__btn">
          {answerOpened ? <Minus /> : <Plus />}
        </button>
      </div>
      <p className={answerOpened ? "answer opened" : "answer"}>{answer}</p>
    </div>
  );
};

export default QnA;
