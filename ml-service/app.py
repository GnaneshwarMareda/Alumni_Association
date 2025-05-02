from fastapi import FastAPI
from pydantic import BaseModel
from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity
import pandas as pd
import json

app = FastAPI()

# Load transformer model
model = SentenceTransformer("all-MiniLM-L6-v2")

# Load alumni JSON
with open("alumni.json") as f:
    raw_data = json.load(f)

# Convert to DataFrame
df = pd.DataFrame(raw_data)
df["text"] = df.apply(lambda row: f"{row['graduationYear']} {row.get('company', '')} {row.get('fieldOfStudy', '')}", axis=1)
df["embedding"] = df["text"].apply(lambda text: model.encode(text).tolist())

class AlumniQuery(BaseModel):
    graduationYear: int
    company: str
    fieldOfStudy: str

@app.post("/predict")
def predict_similar_alumni(query: AlumniQuery):
    query_text = f"{query.graduationYear} {query.company} {query.fieldOfStudy}"
    query_embedding = model.encode([query_text])

    embeddings = df["embedding"].tolist()
    similarities = cosine_similarity(query_embedding, embeddings)[0]

    top_indices = similarities.argsort()[-6:][::-1]
    similar_ids = df.iloc[top_indices]["_id"].apply(lambda x: x["$oid"]).tolist()

    return {"similar_alumni_ids": similar_ids}
