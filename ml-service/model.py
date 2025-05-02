from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
from data_loader import load_alumni_data

df = load_alumni_data()

# Combine fields for vectorization
df["combined"] = df[["fieldOfStudy", "company", "jobRole", "location"]].fillna("").agg(" ".join, axis=1)

# Vectorize
vectorizer = TfidfVectorizer()
tfidf_matrix = vectorizer.fit_transform(df["combined"])

def get_similar_alumni(index, top_n=5):
    similarities = cosine_similarity(tfidf_matrix[index], tfidf_matrix).flatten()
    similar_indices = similarities.argsort()[-(top_n+1):][::-1]
    similar_indices = [i for i in similar_indices if i != index]
    return df.iloc[similar_indices][["name", "graduationYear", "fieldOfStudy", "company", "jobRole", "location"]].to_dict(orient="records")
