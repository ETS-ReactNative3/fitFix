# **Misc Notes**

`expo start`

## **Package Installation Reference:**

`npm install @react-navigation/native-stack`

`npm install react-hook-form`

`npm install axios`

## **To Do List:**

### Planning

- [x] Find usable API
- [x] map out endpoints
- [x] create initial components diagram
- [x] research application construction order
- [x] create to do list

### Construction

- [x] Organize components according to hierarchy
- [ ] Build a static version in React Native
- [ ] Identify the minimal representation of UI state / think about state
- [ ] Incorporate api (fetch())

---

## **REST API Wger endpoints:**

- (list of public vs private endpoints: https://wger.de/en/software/api)\
- (all endpoint urls: https://wger.de/api/v2/)

## Public Endpoints

### "equipment": "https://wger.de/api/v2/equipment/"

- ##### Id
- ##### equipment name

---

### "exercise": "https://wger.de/api/v2/exercise/",

- ##### Id
- ##### UUID
- ##### name
- ##### description
- ##### muscles : calling by id
- ##### muscles secondary : calling by id
- ##### equipment : calling by id
- ##### variations : calling by id

---

### "exerciseinfo": "https://wger.de/api/v2/exerciseinfo/"

- ##### id's to variation exercises
- ##### equipment
- ##### muscles and muscles secondary with images
- ##### category (which is body part or muscle group)

---

### "muscle": "https://wger.de/api/v2/muscle/"

- ##### id
- ##### name
- ##### is_front
- ##### image_url_main
- ##### image_url_secondary

---

## **form brainstorm**

- time limit - NOT DOING
- equipment
- muscle groups
  <br/>

1. first question: body parts -> options are presented as checkboxes
2. depending on body parts selected, muscle groups will be shown -> again checkboxes
3. Equipment available -> checkboxes
4. submit

**FIRST Return**

- List of all exercise objects that match equipment and muscle group\
  <SUP>_(there should be some kind of limitation on quantity for these)_</SUP>
- user is then able to go down list and select which ones they'd like to add to their workout

**SECOND Return**

- then the final page is the workout list with the following details:
  - ##### name
  - ##### description
  - ##### variations : calling by id
  - ##### links to variation exercises
  - ##### equipment
  - ##### muscles and muscles secondary with images
  - ##### category (which is body part or muscle group)

---

## **Components:** (top to bottom)

```
1. App
  A. header
    1. Main image
  B. Workout Controller
    1. Workout form
      a. Target Body Parts
      b. Muscle Groups
      c. Equipment
      d. Submit
    2. Items Form
      a. Individual exercise (reusable)
      b. Submit
    3. Final exercise list
      a. Individual exercise (reusable)
```

## **Resources**

- React Navigation: https://www.youtube.com/watch?v=OmQCU-3KPms&ab_channel=TheNetNinja
