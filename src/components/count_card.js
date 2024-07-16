import './count_card.css'

export default function CountCard({ counts }) {

    const dataList = Object.entries(counts).map(([key, value]) => (
        <span key={key}>
            <span id="term">{key}&nbsp;</span>:&nbsp;<span id="count">{value}</span>
        </span>
    ));



    return (
        <>

            <div className="counts-card">


                {

                    dataList
                }


                <span id="count-samllprint"><a href="https://github.com/Tharusha-dev/searchYard/blob/main/searchYardAPI/stop_words.txt">These</a> words, and words cencensored by YouTube substitles are missing from the counts and/or search</span>
            </div>
        </>
    )

}