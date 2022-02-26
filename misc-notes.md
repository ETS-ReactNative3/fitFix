# Misc Notes

## Useful REST API Wger endpoints:
(list of public vs private endpoints: https://wger.de/en/software/api)\
(all endpoint urls: https://wger.de/api/v2/)

## Public Endpoints
### "equipment": "https://wger.de/api/v2/equipment/"
- ##### Ids
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


---
## form brainstorm

time limit - NOT DOING
equipment
muscle groups


- first question: body parts -> options are presented as checkboxes
- depending on body parts selected, muscle groups will be shown -> again checkboxes
- Equipment available -> checkboxes
- submit

Return->
List of all exercise objects that match equipment and muscle group

^ there should be some kind of limitation on quantity for these

user is then able to go down list and select which ones they'd like to add to their workout

then the final page is the workout list with the following details:
- ##### name
- ##### description
- ##### variations : calling by id
- ##### links to variation exercises
- ##### equipment
- ##### muscles and muscles secondary with images
- ##### category (which is body part or muscle group)

### components I'll need:
- app
- header
- footer(?)
- form (fields, submit)
- all results list (form)
- returned full workout