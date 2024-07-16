import { useEffect, useState } from "react"
import "./input.css"
import VideoCard from "./video_card"
import CountCard from "./count_card"
import TutorialCard from "./totorial_card"

export default function Input() {

  const [searchDone, setSearchDone] = useState(false)
  const [responseGetting, setResponseGetting] = useState(false)
  const [responseGot, setResponseGot] = useState(false)
  const [isNullResult, setIsNullResult] = useState(false)
  const [isQuotedSearch, setIsQuotedSearch] = useState(false)
  const [videos, setVideos] = useState([])
  const [counts, setCounts] = useState([])

  const [query, setQuery] = useState("")

  // let query = "linux gaming"
  let fdata;
  let videosJson;
  let countsJson;


  useEffect(() => {

  }, [])

  async function getDocument() {
    setResponseGetting(true)
    setResponseGot(false)
    setSearchDone(true)





    const response = await fetch(`https://api.wansearch.xyz/search?q=${query}`);

    const jsonData = await response.json();
    fdata = jsonData;

    videosJson = jsonData.Videos

    countsJson = jsonData.Counts
    setCounts(jsonData.Counts)

    if (countsJson == null) {
      console.log(1)

      setIsQuotedSearch(true)
    }


    if (videosJson == null) {
      console.log(2)

      // isNullResult = true;
      setIsNullResult(true)

      //   responseGot = true;


    } else {
      console.log(3)
      // isNullResult = false
      setIsNullResult(false)

      let videoTemp = videosJson.map((video) => ({
        id: video.Video_id,
        title: video.Title,

        diloguesMap: video.TimeDialogues2
      }))

      setVideos(videoTemp)





    }



    //   responseGot = true;
    setResponseGot(() => {
      return true
    })




  }

  return (
    <>
      <div className="search-bar">

        <input onChange={(e) => { setQuery(e.target.value) }} type="search" name="" class="main_input" />
      </div>

      <br />
      <button className="search-button" onClick={getDocument}>Search </button>

      <br />

      {responseGetting && !responseGot && (
        <div class="loading-bar">
          <div class="loader"></div>
        </div>
      )}


      {responseGot && !isQuotedSearch && (
        <CountCard counts={counts} />
      )}



      {responseGot && !isNullResult && ( // Show videos only if fetched and not empty
        videos.map((video) => (
          <VideoCard video={video} query={query} key={video.Video_id} />
          // Unique key and video title class
        ))
      )}

      {isNullResult && (
    <span>No result found</span>

      )}

      {/* {!searchDone && (
        
      )} */}




    </>
  )
}