import pandas as pd
import json

def load_alumni_data():
    with open("alumni.json", "r") as f:
        data = json.load(f)
    df = pd.DataFrame(data)
    return df
