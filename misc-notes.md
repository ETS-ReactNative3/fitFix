# Misc Notes

## Useful REST API Wger endpoints:
(list of public vs private endpoints: https://wger.de/en/software/api)\
(all endpoint urls: https://wger.de/api/v2/)

## Public Endpoints
### "exerciseinfo": "https://wger.de/api/v2/exerciseinfo/"
- ##### id's to variation exercises
- ##### equipment
- ##### muscles and muscles secondary with images
- ##### category (which is body part or muscle group)
---
### "muscle": "https://wger.de/api/v2/muscle/"
##### returns: id, name, is_front, image_url_main, and image_url_secondary

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

