# 📝 Quiz Questions Guide

## How to Edit Questions

All quiz questions are stored in the `src/questionsData.js` file. This makes it super easy to add, edit, or remove questions without touching the main application code.

## File Structure

```javascript
export const QuestionsData = {
  title: "Your Quiz Title Here",
  questions: [
    {
      id: 1,
      question: "What is the capital of France?",
      options: ["London", "Berlin", "Paris", "Madrid"],
      correctAnswer: 2, // Index of correct option (0-based)
    },
    // Add more questions here...
  ],
};
```

## Adding New Questions

1. Open `src/questionsData.js`
2. Add a new question object to the `questions` array
3. Make sure to:
   - Give it a unique `id` (increment from the last question)
   - Write your question text
   - Provide exactly 4 options
   - Set the `correctAnswer` to the index of the correct option (0, 1, 2, or 3)

### Example:

```javascript
{
  id: 9,
  question: "What is the fastest land animal?",
  options: ["Lion", "Cheetah", "Leopard", "Tiger"],
  correctAnswer: 1, // "Cheetah" is at index 1
},
```

## Important Notes

- **correctAnswer** is zero-based:

  - 0 = First option
  - 1 = Second option
  - 2 = Third option
  - 3 = Fourth option

- Each question must have exactly 4 options
- Question IDs should be unique and sequential
- Don't forget the comma after each question object (except the last one)

## Tips for Writing Good Quiz Questions

1. **Keep questions clear and concise**
2. **Make sure there's only one clearly correct answer**
3. **Avoid trick questions unless that's your quiz style**
4. **Mix difficulty levels to keep it engaging**
5. **Test your questions by taking the quiz yourself**

## Changing the Quiz Title

To change the main quiz title, edit the `title` property in the `QuestionsData` object:

```javascript
export const QuestionsData = {
  title: "My Awesome Quiz", // Change this
  questions: [
    // ...your questions
  ],
};
```

## Example Question Categories

You can organize questions by topic:

- **General Knowledge**
- **Science & Technology**
- **History**
- **Geography**
- **Sports**
- **Entertainment**
- **Programming** (if it's a coding quiz)

Happy quiz making! 🎉
