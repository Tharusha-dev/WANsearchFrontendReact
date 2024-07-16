import { useRef, useState } from "react";
import "./video_card.css"


export default function VideoCard({video,query}){

    const queryWords = query.toLowerCase().trim().split(" ")

    // setQueryWords(query.toLowerCase().trim().split(" "))



    function decorateDialogue(dialogue) {
       
        dialogue = '<span class="dialogue">' + dialogue + "</span>";

        for (let word of queryWords) {
            if (word.trim() !== "") {
                let regex = new RegExp("\\b" + word + "\\b", "g");

                dialogue = dialogue.replaceAll(
                    regex,
                    '<span style="color: #fc4c0a;">' + word + "</span>",
                );
            }
        }

        return dialogue;
    }

    
return (<div id="video_card" key={video.video_id}>
    <h3>{video.title}</h3>

    <div class="thum-dialogue">
        <a href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank">
            <img
                className="video_card_thumbnail"
                src={`https://img.youtube.com/vi/${video.id}/0.jpg`}
                alt=""
            />
        </a>

        <div class="dialogues">
            {/* {console.log(video)} */}

        {video.diloguesMap.map((dialogue) => (
            <a
            className="dialogue-link"
            target="_blank"
            href={`https://www.youtube.com/watch?v=${video.id}&t=${dialogue["Time"]}`.replaceAll('"','')}
            key={dialogue["Time"]}
        >
         
        
        <div dangerouslySetInnerHTML={{ __html: decorateDialogue(dialogue["Dialogue"]) }}></div>
        
        </a>
        ))}

           
        </div>
    </div>
</div>)
}