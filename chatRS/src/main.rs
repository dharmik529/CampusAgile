extern crate rust_stemmers;
extern crate natural;
extern crate rust_bert;
extern crate anyhow;

use rust_stemmers::{ Algorithm, Stemmer };
use natural::classifier::NaiveBayesClassifier;
use natural::tokenize::tokenize;
use rust_bert::pipelines::keywords_extraction::KeywordExtractionModel;
use anyhow::Result;

fn main() {

    // Create a stemmer for the english language
    let en_stemmer = Stemmer::create(Algorithm::English);

    // Stemm the word "fruitlessly"
    // Please be aware that all algorithms expect their input to only contain lowercase characters.
    // assert_eq!(en_stemmer.stem("fruitlessly"), "fruitless");
    println!("{}", en_stemmer.stem("fruitlessly"));

    let nbc = NaiveBayesClassifier::new();

    let processor = trainer(nbc);

    println!("{}", processor.guess("I am looking for a dresser.")); //returns a label with the highest probability
    
    assert_eq!(tokenize("hello, world!"), vec!["hello", "world"]);
    assert_eq!(tokenize("My dog has fleas."), vec!["My", "dog", "has", "fleas"]);

    key_extract();

}

fn trainer(mut processor: NaiveBayesClassifier) -> NaiveBayesClassifier {

    processor.train("This text is about chairs.", "Furniture");
    processor.train("Couches, benches and televisions.", "Furniture");
    processor.train("I really need to get a new sofa.", "Furniture");
    processor.train("There also exist things like fridges.", "Kitchen");
    processor.train("I hope to be getting a new stove today.", "Kitchen");
    processor.train("Do you also have some ovens.", "Kitchen");

    return processor;
}

fn key_extract() -> Result<(), anyhow::Error> {
    let keyword_extraction_model = KeywordExtractionModel::new(Default::default())?;

    let input = "My dog has fleas.";
    let output = keyword_extraction_model.predict(&[input])?;

    return output;
}
