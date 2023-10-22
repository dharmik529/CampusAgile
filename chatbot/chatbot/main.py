import spacy

data = {
    "furniture": ["This text is about chairs.",
               "Couches, benches and televisions.",
               "I really need to get a new sofa."],
    "kitchen": ["There also exist things like fridges.",
                "I hope to be getting a new stove today.",
                "Do you also have some ovens."]
}

def main():
    nlp = spacy.load('en_core_web_md')
    nlp.add_pipe("classy_classification", 
        config={
            "data": data,
            "model": "spacy"
        }
    )

    print(nlp("I am looking for kitchen appliances.")._.cats)

if __name__ == "__main__":
    main()
