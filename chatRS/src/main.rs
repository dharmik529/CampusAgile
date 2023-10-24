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

    nbc.train("This text is about chairs.", "Furniture");
    nbc.train("Couches, benches and televisions.", "Furniture");
    nbc.train("I really need to get a new sofa.", "Furniture");
    nbc.train("There also exist things like fridges.", "Kitchen");
    nbc.train("I hope to be getting a new stove today.", "Kitchen");
    nbc.train("Do you also have some ovens.", "Kitchen");

    println!("{}", nbc.guess("I am looking for kitchen appliances.")); //returns a label with the highest probability

}
