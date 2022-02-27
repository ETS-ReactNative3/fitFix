<img title="exercise equipment" src="img/exercise_equipment.jpg" width="600px">

## FITFIX | <sub>fitness routine generator</sub>
**By: Ella Tanttu**

---

_fitfix will return a tailored workout routine for a user based on the specific variables that user feeds into the site. These variables might include factors such as time limit, exercise equipment available, focus muscle groups, weighted/bodyweight._

---
<img title="component diagram" src="img/fitfixComponents_v2.svg" width="400px">

### MVP
- Two form submissions returns one workout session
- Return info is based on available equipment & muscle groups to target
- Returned session data uses REST API Wger via Fetch()
- Styling: using React Native built-in styling functionality
- Navigation: React Navigation

---
### Tools & Technologies
- React Native
- [REST API Wger](https://wger.de/en/software/api) - fetch()
- CSS 3
- Postman
- Expo
- React-navigation
- [React hook form v7](https://react-hook-form.com/get-started)

---

### Stretch Goals
- User Authentication -> logging workouts, rating, increasing difficulty over time
- in-app timer
- further customization based on user details (age, weight, etc.)