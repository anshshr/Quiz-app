# 🧠 Interactive Quiz App

A beautiful, modern quiz application built with React and Vite featuring customizable timing, instant feedback, and an improved user interface.

## ✨ Features

- **🎨 Modern UI**: Beautiful gradient design with smooth animations
- **⏱️ Customizable Timer**: Set time per question (5-300 seconds)
- **⚡ Instant Feedback**: Optional immediate answer feedback
- **📊 Progress Tracking**: Visual progress bar and score display
- **📱 Responsive Design**: Works on desktop and mobile devices
- **🔧 Easy Question Management**: Separate file for easy question editing
- **🎯 Score Analysis**: Detailed results with performance indicators

## 🚀 Getting Started

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd quiz-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:5173`

## 📝 Managing Questions

All quiz questions are stored in `src/questionsData.js` for easy editing:

```javascript
export const QuestionsData = {
  title: "Your Quiz Title",
  questions: [
    {
      id: 1,
      question: "What is the capital of France?",
      options: ["London", "Berlin", "Paris", "Madrid"],
      correctAnswer: 2, // Index: 0=London, 1=Berlin, 2=Paris, 3=Madrid
    },
    // Add more questions here...
  ],
};
```

### Adding New Questions

1. Open `src/questionsData.js`
2. Add a new question object to the array
3. Ensure unique ID and correct answer index (0-3)
4. Save and refresh the app

📖 **For detailed instructions, see [QUESTIONS_GUIDE.md](./QUESTIONS_GUIDE.md)**

## 🎮 Quiz Features

### Timer System

- Configurable time per question (5-300 seconds)
- Visual countdown with color coding:
  - 🟢 Green: >20 seconds remaining
  - 🟡 Yellow: 11-20 seconds remaining
  - 🔴 Red: ≤10 seconds remaining

### Feedback Options

- **Instant Feedback**: See correct answer immediately after selection
- **End-of-Question**: Traditional quiz style with next button

### Scoring

- Real-time score tracking
- Performance-based results:
  - 🏆 80%+ = Excellent
  - 🎯 60-79% = Good Job
  - 💪 <60% = Keep Practicing

## 🔧 Configuration

Use the settings button (⚙️) during the quiz to:

- Adjust time per question
- Toggle instant feedback mode
- View current questions

## 🛠️ Development

### Project Structure

```
src/
├── App.jsx              # Main quiz component
├── questionsData.js     # Quiz questions (edit here!)
├── App.css             # Styling
├── main.jsx            # App entry point
└── index.css           # Global styles
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Technologies Used

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons
- **ESLint** - Code linting

## 📱 Responsive Design

The app is fully responsive and works great on:

- 🖥️ Desktop computers
- 📱 Mobile phones
- 📟 Tablets

## 🎨 UI Improvements

- Modern gradient backgrounds
- Smooth hover animations
- Progress indicators with animations
- Card-based layouts
- Improved typography and spacing
- Visual feedback for correct/incorrect answers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Happy Quizzing! 🎉**
