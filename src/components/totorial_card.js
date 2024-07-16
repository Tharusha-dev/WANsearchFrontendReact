import "./tutorial_card.css"

export default function TutorialCard(){

    



    let quotes_examples = [
        "apple claiming utterly implausible customer satisfaction",
        "it's a tax write off",
        "sending pictures of my balls and taint to the chinese government",
        "kim kardashian probably needs a butt helmet",
        "i need a freaking dash cam",
      ];
      var quote_example =
        quotes_examples[Math.floor(Math.random() * quotes_examples.length)];

      return (
        <div className="tutorial-card">
  <span
    >To search for a specific phrase, surround your search terms in quotation
    marks (faster). For example</span
  >
  <span className="example-quotes">"{quote_example}"</span>
  <span className="small-text"
    >Broader search term combinations (slower) might take some time to complete,
    please be patient</span
  >
</div>
      )

    }

