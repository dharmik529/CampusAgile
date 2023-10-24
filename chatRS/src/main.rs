extern crate rust_stemmers;
extern crate natural;

use rust_stemmers::{ Algorithm, Stemmer };
use natural::classifier::NaiveBayesClassifier;

fn main() {

    // Create a stemmer for the english language
    let en_stemmer = Stemmer::create(Algorithm::English);

    // Stemm the word "fruitlessly"
    // Please be aware that all algorithms expect their input to only contain lowercase characters.
    // assert_eq!(en_stemmer.stem("fruitlessly"), "fruitless");
    println!("{}", en_stemmer.stem("fruitlessly"));

    let mut nbc = NaiveBayesClassifier::new();

    nbc.train(STRING_TO_TRAIN, LABEL);
    nbc.train(STRING_TO_TRAIN, LABEL);
    nbc.train(STRING_TO_TRAIN, LABEL);
    nbc.train(STRING_TO_TRAIN, LABEL);

    nbc.guess(STRING_TO_GUESS); //returns a label with the highest probability
}
