import React, { useState, useEffect } from "react";
import {
  Clock,
  CheckCircle,
  XCircle,
  RotateCcw,
  Settings,
  FileText,
  Trophy,
  Target,
} from "lucide-react";
import { QuestionsData } from "./questionsData";
import { TimingConfig } from "./timingConfig";

// ============= TIMING CONFIGURATION COMPONENT =============
const TimingConfigComponent = ({ config, onConfigChange, onClose }) => {
  const [tempConfig, setTempConfig] = useState({ ...config });

  const handleSave = () => {
    onConfigChange(tempConfig);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-2xl">
        <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-800">
          <Settings className="w-6 h-6 mr-3 text-blue-600" />
          Quiz Settings
        </h2>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Time per Question
            </label>
            <div className="relative">
              <input
                type="number"
                min="5"
                max="300"
                value={tempConfig.timePerQuestion}
                onChange={(e) =>
                  setTempConfig({
                    ...tempConfig,
                    timePerQuestion: parseInt(e.target.value) || 30,
                  })
                }
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
              />
              <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">
                seconds
              </span>
            </div>
          </div>

          <div>
            <label className="flex items-center p-4 bg-gray-50 rounded-xl cursor-pointer hover:bg-gray-100 transition-colors">
              <input
                type="checkbox"
                checked={tempConfig.showInstantFeedback}
                onChange={(e) =>
                  setTempConfig({
                    ...tempConfig,
                    showInstantFeedback: e.target.checked,
                  })
                }
                className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500 focus:ring-2"
              />
              <div className="ml-3">
                <span className="text-gray-800 font-medium">
                  Instant Feedback
                </span>
                <p className="text-sm text-gray-600">
                  Show correct answer immediately after selection
                </p>
              </div>
            </label>
          </div>
        </div>

        <div className="flex justify-end space-x-3 mt-8">
          <button
            onClick={onClose}
            className="px-6 py-3 text-gray-600 hover:text-gray-800 font-medium rounded-xl hover:bg-gray-100 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl font-medium"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

// ============= QUESTIONS DATA COMPONENT =============
const QuestionsDataComponent = ({ data, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-6 w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
        <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-800">
          <FileText className="w-6 h-6 mr-3 text-blue-600" />
          Questions Manager
        </h2>

        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 mb-6">
          <h3 className="font-semibold mb-3 text-gray-800">
            📝 How to Edit Questions:
          </h3>
          <p className="text-sm text-gray-700 mb-3">
            Questions are stored in{" "}
            <code className="bg-white px-2 py-1 rounded text-blue-600 font-mono">
              src/questionsData.js
            </code>
          </p>
          <div className="text-sm text-gray-600">
            <p>• Open the file to add, edit, or remove questions</p>
            <p>
              • Each question needs an ID, question text, 4 options, and correct
              answer index
            </p>
            <p>
              • Correct answer index starts from 0 (first option = 0, second =
              1, etc.)
            </p>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="space-y-4">
            <h3 className="font-semibold text-lg text-gray-800 sticky top-0 bg-white py-2">
              Current Questions ({data.questions.length} total):
            </h3>
            {data.questions.map((q, index) => (
              <div
                key={q.id}
                className="border-2 border-gray-100 rounded-xl p-4 hover:border-blue-200 transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="font-semibold text-blue-600 text-lg">
                    Question {index + 1}
                  </div>
                  <div className="text-sm text-gray-500">ID: {q.id}</div>
                </div>
                <div className="mb-3">
                  <div className="font-medium text-gray-800 mb-2">
                    {q.question}
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {q.options.map((option, i) => (
                    <div
                      key={i}
                      className={`p-3 rounded-lg border-2 ${
                        i === q.correctAnswer
                          ? "bg-green-50 border-green-200 text-green-800"
                          : "bg-gray-50 border-gray-200 text-gray-700"
                      }`}
                    >
                      <div className="flex items-center">
                        <span className="font-bold mr-2">
                          {String.fromCharCode(65 + i)}.
                        </span>
                        <span>{option}</span>
                        {i === q.correctAnswer && (
                          <CheckCircle className="w-4 h-4 ml-auto text-green-600" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end mt-6 pt-4 border-t border-gray-200">
          <button
            onClick={onClose}
            className="px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-xl hover:from-gray-700 hover:to-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

// ============= MAIN QUIZ COMPONENT =============
const QuizApp = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [timeLeft, setTimeLeft] = useState(TimingConfig.timePerQuestion);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [timingConfig, setTimingConfig] = useState(TimingConfig);
  const [showTimingConfig, setShowTimingConfig] = useState(false);
  const [showQuestionsData, setShowQuestionsData] = useState(false);
  const [instantFeedbackGiven, setInstantFeedbackGiven] = useState(false);

  // Timer effect
  useEffect(() => {
    const handleTimeUp = () => {
      setShowAnswer(true);
      const answers = [...userAnswers];
      answers[currentQuestion] = selectedAnswer;
      setUserAnswers(answers);

      if (
        selectedAnswer ===
        QuestionsData.questions[currentQuestion].correctAnswer
      ) {
        setScore(score + 1);
      }
    };

    if (timeLeft > 0 && !showAnswer && !quizCompleted) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !showAnswer) {
      // Time's up - show answer
      handleTimeUp();
    }
  }, [
    timeLeft,
    showAnswer,
    quizCompleted,
    currentQuestion,
    selectedAnswer,
    userAnswers,
    score,
  ]);

  const handleAnswerSelect = (answerIndex) => {
    if (!showAnswer) {
      setSelectedAnswer(answerIndex);

      // Instant feedback if enabled
      if (timingConfig.showInstantFeedback && !instantFeedbackGiven) {
        setShowAnswer(true);
        setInstantFeedbackGiven(true);

        const answers = [...userAnswers];
        answers[currentQuestion] = answerIndex;
        setUserAnswers(answers);

        if (
          answerIndex === QuestionsData.questions[currentQuestion].correctAnswer
        ) {
          setScore(score + 1);
        }
      }
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < QuestionsData.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setTimeLeft(timingConfig.timePerQuestion);
      setShowAnswer(false);
      setInstantFeedbackGiven(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setTimeLeft(timingConfig.timePerQuestion);
    setShowAnswer(false);
    setScore(0);
    setQuizCompleted(false);
    setUserAnswers([]);
    setInstantFeedbackGiven(false);
  };

  const handleConfigChange = (newConfig) => {
    setTimingConfig(newConfig);
    // Reset current question timer if quiz is active
    if (!quizCompleted && !showAnswer) {
      setTimeLeft(newConfig.timePerQuestion);
    }
  };

  const getOptionClassName = (optionIndex) => {
    if (!showAnswer) {
      return selectedAnswer === optionIndex
        ? "bg-blue-50 border-blue-500 shadow-md"
        : "bg-white hover:bg-gray-50 border-gray-200 hover:border-gray-300";
    }

    // Show answer state
    if (
      optionIndex === QuestionsData.questions[currentQuestion].correctAnswer
    ) {
      return "bg-green-50 border-green-500 text-green-800 shadow-md";
    } else if (
      selectedAnswer === optionIndex &&
      selectedAnswer !== QuestionsData.questions[currentQuestion].correctAnswer
    ) {
      return "bg-red-50 border-red-500 text-red-800 shadow-md";
    } else {
      return "bg-gray-50 border-gray-200 text-gray-600";
    }
  };

  if (quizCompleted) {
    const percentage = Math.round(
      (score / QuestionsData.questions.length) * 100
    );
    const isExcellent = percentage >= 80;
    const isGood = percentage >= 60;

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
            <div className="mb-6">
              <div
                className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-4 ${
                  isExcellent
                    ? "bg-green-100"
                    : isGood
                    ? "bg-yellow-100"
                    : "bg-red-100"
                }`}
              >
                <Trophy
                  className={`w-12 h-12 ${
                    isExcellent
                      ? "text-green-600"
                      : isGood
                      ? "text-yellow-600"
                      : "text-red-600"
                  }`}
                />
              </div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                Quiz Completed!
              </h1>
              <p
                className={`text-lg font-medium ${
                  isExcellent
                    ? "text-green-600"
                    : isGood
                    ? "text-yellow-600"
                    : "text-red-600"
                }`}
              >
                {isExcellent
                  ? "Excellent Work!"
                  : isGood
                  ? "Good Job!"
                  : "Keep Practicing!"}
              </p>
            </div>

            <div className="mb-8">
              <div
                className={`text-6xl font-bold mb-2 ${
                  isExcellent
                    ? "text-green-600"
                    : isGood
                    ? "text-yellow-600"
                    : "text-red-600"
                }`}
              >
                {score}/{QuestionsData.questions.length}
              </div>
              <div
                className={`text-2xl font-semibold mb-4 ${
                  isExcellent
                    ? "text-green-600"
                    : isGood
                    ? "text-yellow-600"
                    : "text-red-600"
                }`}
              >
                {percentage}%
              </div>

              {/* Progress Ring */}
              <div className="relative w-32 h-32 mx-auto mb-4">
                <svg
                  className="w-32 h-32 transform -rotate-90"
                  viewBox="0 0 100 100"
                >
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    className="text-gray-200"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray={`${2 * Math.PI * 40}`}
                    strokeDashoffset={`${
                      2 * Math.PI * 40 * (1 - percentage / 100)
                    }`}
                    className={`transition-all duration-1000 ${
                      isExcellent
                        ? "text-green-500"
                        : isGood
                        ? "text-yellow-500"
                        : "text-red-500"
                    }`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Target
                    className={`w-8 h-8 ${
                      isExcellent
                        ? "text-green-600"
                        : isGood
                        ? "text-yellow-600"
                        : "text-red-600"
                    }`}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={resetQuiz}
                className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <RotateCcw className="w-5 h-5 mr-2" />
                Take Quiz Again
              </button>
              <button
                onClick={() => setShowTimingConfig(true)}
                className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-xl hover:from-gray-700 hover:to-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Settings className="w-5 h-5 mr-2" />
                Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const question = QuestionsData.questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-bold">{QuestionsData.title}</h1>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setShowTimingConfig(true)}
                  className="p-2 text-white hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors"
                  title="Timing Configuration"
                >
                  <Settings className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setShowQuestionsData(true)}
                  className="p-2 text-white hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors"
                  title="View Questions Data"
                >
                  <FileText className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Progress Section */}
            <div className="flex items-center justify-between text-sm mb-4">
              <span>
                Question {currentQuestion + 1} of{" "}
                {QuestionsData.questions.length}
              </span>
              <span>
                Score: {score}/{currentQuestion + (showAnswer ? 1 : 0)}
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-white bg-opacity-20 rounded-full h-3">
              <div
                className="bg-white h-3 rounded-full transition-all duration-500 ease-out"
                style={{
                  width: `${
                    ((currentQuestion + 1) / QuestionsData.questions.length) *
                    100
                  }%`,
                }}
              ></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8">
            {/* Timer */}
            <div className="flex items-center justify-center mb-8">
              <div
                className={`flex items-center px-6 py-3 rounded-full text-lg font-bold transition-all duration-300 ${
                  timeLeft <= 10
                    ? "bg-red-100 text-red-800 shadow-lg ring-4 ring-red-200"
                    : timeLeft <= 20
                    ? "bg-yellow-100 text-yellow-800 shadow-md ring-2 ring-yellow-200"
                    : "bg-green-100 text-green-800 shadow-md"
                }`}
              >
                <Clock className="w-6 h-6 mr-3" />
                <span>{timeLeft}s</span>
              </div>
              {timingConfig.showInstantFeedback && (
                <div className="ml-4 px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">
                  Instant feedback enabled
                </div>
              )}
            </div>

            {/* Question */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 leading-relaxed text-center">
                {question.question}
              </h2>
            </div>

            {/* Options */}
            <div className="space-y-4 mb-8">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showAnswer}
                  className={`w-full p-5 text-left border-2 rounded-xl transition-all duration-300 transform hover:scale-[1.02] ${getOptionClassName(
                    index
                  )} ${
                    showAnswer
                      ? "cursor-not-allowed"
                      : "cursor-pointer hover:shadow-md"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div
                        className={`w-8 h-8 rounded-full border-2 flex items-center justify-center mr-4 text-sm font-bold ${
                          !showAnswer && selectedAnswer === index
                            ? "bg-blue-500 text-white border-blue-500"
                            : "border-gray-300 text-gray-500"
                        }`}
                      >
                        {String.fromCharCode(65 + index)}
                      </div>
                      <span className="text-lg">{option}</span>
                    </div>
                    {showAnswer && index === question.correctAnswer && (
                      <CheckCircle className="w-6 h-6 text-green-600" />
                    )}
                    {showAnswer &&
                      selectedAnswer === index &&
                      selectedAnswer !== question.correctAnswer && (
                        <XCircle className="w-6 h-6 text-red-600" />
                      )}
                  </div>
                </button>
              ))}
            </div>

            {/* Next Button */}
            {showAnswer && (
              <div className="text-center">
                <button
                  onClick={handleNextQuestion}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-lg rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  {currentQuestion < QuestionsData.questions.length - 1
                    ? "Next Question →"
                    : "View Results 🎉"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal Components */}
      {showTimingConfig && (
        <TimingConfigComponent
          config={timingConfig}
          onConfigChange={handleConfigChange}
          onClose={() => setShowTimingConfig(false)}
        />
      )}

      {showQuestionsData && (
        <QuestionsDataComponent
          data={QuestionsData}
          onClose={() => setShowQuestionsData(false)}
        />
      )}
    </div>
  );
};

export default QuizApp;
