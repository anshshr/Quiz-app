// ============= TIMING CONFIGURATION =============
// You can easily modify timing settings here without touching the main app code
export const TimingConfig = {
    timePerQuestion: 10, // Change this value to modify timing globally (in seconds)
    showInstantFeedback: true, // Enable/disable instant feedback when option is selected
};

// ============= HOW TO MODIFY TIMING SETTINGS =============
/*
To modify timing settings:

1. timePerQuestion (number):
   - Sets the time limit for each question in seconds
   - Minimum: 5 seconds
   - Maximum: 300 seconds (5 minutes)
   - Default: 30 seconds
   - Example: timePerQuestion: 60, // 1 minute per question

2. showInstantFeedback (boolean):
   - true: Shows correct answer immediately after user selects an option
   - false: Traditional quiz mode - shows answer only after time runs out or user confirms
   - Default: true
   - Example: showInstantFeedback: false, // Wait for timer or confirmation

Examples:
- For a quick quiz: timePerQuestion: 15, showInstantFeedback: true
- For a thoughtful quiz: timePerQuestion: 60, showInstantFeedback: false
- For practice mode: timePerQuestion: 120, showInstantFeedback: true
*/
