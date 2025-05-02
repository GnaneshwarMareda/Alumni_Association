from fastapi import FastAPI
from pydantic import BaseModel
import json

app = FastAPI()

# Load data
with open("alumni.json", "r") as file:
    alumni_data = json.load(file)

class AlumniQuery(BaseModel):
    graduationYear: int
    company: str
    fieldOfStudy: str

@app.post("/predict")
def predict_similar_alumni(query: AlumniQuery):
    similar_ids = []

    for alumnus in alumni_data:
        if (
            alumnus.get("graduationYear") == query.graduationYear
            or alumnus.get("company") == query.company
            or alumnus.get("fieldOfStudy") == query.fieldOfStudy
        ):
            similar_ids.append(alumnus["_id"]["$oid"])

    return {"similar_alumni_ids": similar_ids}
