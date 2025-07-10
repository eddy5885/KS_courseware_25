import React, { useState, useCallback, useMemo } from "react";
import "./index.less";
import { UserContextProvider, useUserContext } from "./UserContext";

interface Question {
  question: string;
  options: string[];
  answer: string;
}

const QuizPage: React.FC = () => {
  return (
    <UserContextProvider>
      <QuizContent />
    </UserContextProvider>
  );
};

const questions: Question[] = [
  {
    question: "下列哪种不属于哺乳动物？",
    options: ["A. 蝙蝠", "B. 鸭嘴兽", "C. 企鹅", "D. 鲸鱼"],
    answer: "C",
  },
  {
    question: "计算机网络中，常用的局域网技术是？",
    options: ["A. ATM", "B. Ethernet", "C. FDDI", "D. Token Ring"],
    answer: "B",
  },
  {
    question: "《红楼梦》的作者是？",
    options: ["A. 罗贯中", "B. 吴承恩", "C. 曹雪芹", "D. 施耐庵"],
    answer: "C",
  },
  {
    question: "以下哪个行星距离太阳最近？",
    options: ["A. 金星", "B. 水星", "C. 火星", "D. 地球"],
    answer: "B",
  },
  {
    question: "下列哪个不是编程语言？",
    options: ["A. Python", "B. HTML", "C. Java", "D. C++"],
    answer: "B",
  },
];

const QuizContent: React.FC = () => {
  const { userAnswers, setUserAnswers } = useUserContext();
  const [showResults, setShowResults] = useState(false);

  // 计算得分
  const score = useMemo(() => {
    if (!showResults) return 0;
    return Object.entries(userAnswers).reduce(
      (acc, [questionIndex, answer]) => {
        const question = questions[Number(questionIndex)];
        return acc + (answer === question.answer ? 1 : 0);
      },
      0
    );
  }, [userAnswers, showResults, questions]);

  // 处理选项选择
  const handleOptionSelect = useCallback(
    (questionIndex: number, option: string) => {
      setUserAnswers((prev) => ({
        ...prev,
        [questionIndex]: option,
      }));
    },
    [setUserAnswers]
  );

  // 提交答案
  const handleSubmit = useCallback(() => {
    setShowResults(true);
  }, []);

  // 重新开始
  const handleRestart = useCallback(() => {
    setUserAnswers({});
    setShowResults(false);
  }, [setUserAnswers]);

  // 计算答题进度
  const progress = (Object.keys(userAnswers).length / questions.length) * 100;

  if (showResults) {
    return (
      <div className="container">
        <div className="results">
          <h2>答题结果</h2>
          <div className="score-display">
            <span className="score">{score}</span>
            <span className="total">/ {questions.length}</span>
          </div>
          <div className="score-percentage">
            得分率: {((score / questions.length) * 100).toFixed(1)}%
          </div>

          <div className="answers-review">
            {questions.map((question, index) => {
              const userAnswer = userAnswers[index];
              const isCorrect = userAnswer === question.answer;

              return (
                <div
                  key={index}
                  className={`answer-item ${isCorrect ? "correct" : "incorrect"}`}
                >
                  <div className="question-text">{question.question}</div>
                  <div className="answer-comparison">
                    <div className="user-answer">
                      你的答案:{" "}
                      <span className={isCorrect ? "correct" : "incorrect"}>
                        {userAnswer || "未答"}
                      </span>
                    </div>
                    <div className="correct-answer">
                      正确答案:{" "}
                      <span className="correct">{question.answer}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <button className="restart-btn" onClick={handleRestart}>
            重新开始
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="header">
        <h1>单选题作答</h1>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="question-counter">
          已答 {Object.keys(userAnswers).length} 题 / 共 {questions.length} 题
        </div>
      </div>

      <div className="content">
        <div className="questions-section">
          {questions.map((question, questionIndex) => (
            <div key={questionIndex} className="question-block">
              <h3 className="question-title">
                第 {questionIndex + 1} 题: {question.question}
              </h3>

              <div className="options-list">
                {question.options.map((option, optionIndex) => (
                  <label
                    key={optionIndex}
                    className={`option-item ${userAnswers[questionIndex] === option.charAt(0) ? "selected" : ""}`}
                    onClick={() =>
                      handleOptionSelect(questionIndex, option.charAt(0))
                    }
                  >
                    <input
                      type="radio"
                      name={`question-${questionIndex}`}
                      value={option.charAt(0)}
                      checked={userAnswers[questionIndex] === option.charAt(0)}
                      onChange={() =>
                        handleOptionSelect(questionIndex, option.charAt(0))
                      }
                    />
                    <span className="option-text">{option}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="actions">
          <button
            className="submit-btn"
            onClick={handleSubmit}
            disabled={Object.keys(userAnswers).length === 0}
          >
            提交答案
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
