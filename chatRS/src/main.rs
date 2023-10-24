extern crate rust_stemmers;
extern crate rust_bert;

use rust_stemmers::{ Algorithm, Stemmer };

fn main() {

    // Create a stemmer for the english language
    let en_stemmer = Stemmer::create(Algorithm::English);

    // Stemm the word "fruitlessly"
    // Please be aware that all algorithms expect their input to only contain lowercase characters.
    // assert_eq!(en_stemmer.stem("fruitlessly"), "fruitless");
    println!("{}", en_stemmer.stem("fruitlessly"));

    let sequence_classification_model = ZeroShotClassificationModel::new(Default::default())?;

    let input_sentence = "Who are you voting for in 2020?";
    let input_sequence_2 = "The prime minister has announced a stimulus package which was widely criticized by the opposition.";
    let candidate_labels = &["politics", "public health", "economics", "sports"];

    let output = sequence_classification_model.predict_multilabel(
        &[input_sentence, input_sequence_2],
        candidate_labels,
        None,
        128,
    );

}
