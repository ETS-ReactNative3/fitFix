<img title="exercise equipment" src="img/exercise_equipment.jpg" width="600px">

## FITFIX | <sub>fitness routine generator</sub>
**By: Ella Tanttu**

---

### Project's Purpose or Goal: *(What will it do for users?)*
fitfix will return a tailored workout routine for a user based on the specific variables that user feeds into the site. These variables might include factors such as time limit, exercise equipment available, focus muscle groups, weighted/bodyweight.

---

### List the absolute minimum features the project requires to meet this purpose or goal:
- Two form submissions returns one workout session
- Return info is based on available equipment & muscle groups to target
- Returned session data uses REST API Wger via Fetch()
- Styling: using React Native built-in styling functionality
- Navigation: React Navigation

---

### What tools, frameworks, libraries, APIs, modules and/or other resources (whatever is specific to your track, and your language) will you use to create this MVP? List them all here. Be specific.
- First Choice: React Native Application
- Backup: Vanilla Javascript with Fetch API
- [REST API Wger](https://wger.de/en/software/api)
- React Native built in styling with css
- Expo
- Postman

---

### If you finish developing the minimum viable product (MVP) with time to spare, what will you work on next? Describe these features here: Be specific.
- User Authentication -> logging workouts, rating, increasing difficulty over time
- in-app timer
- further customization based on user details (age, weight, etc.)

---

### What additional tools, frameworks, libraries, APIs, or other resources will these additional features require?
- Redux
- Timing (`setInterval()`)
- firebase authentication - for stretch goal of creating user profiles / (backup: oAuth for js)
- firestore - for stretch goal of storing workouts

---

### Is there anything else you'd like your instructor to know?
- Nothing else at this time