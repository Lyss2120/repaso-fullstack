import React, { useRef, useState } from 'react';
// import MyVideo from "../../img/planet.mp4";
// esta forma ya no se usa se puede descargar npm reactplayer (o importar {DefaultPlayer} from 'react-html5video' del dom )

const MediaPlayerApp = () => {
    const [playing, setPlaying] = useState(false)
    const videoRef = useRef();

    const handlePlayer = () => {
        const video = videoRef.current;
        playing ? video.pause() : video.play()
        setPlaying(!playing)
        console.log('fjlafl');
    }


    return (
        <div className='d-flex flex-column '>
            <div>

                {/* <video width="100" height="100" preload="auto" onClick={handlePlayer} >
                    <source src='https://pixabay.com/es/videos/mar-oc%C3%A9ano-playa-ondas-sol-138588/' />
                    Your browser does not support HTML5 video.
                </video> */}
                <iframe width="560" height="315" src="https://www.youtube.com/embed/Ii0m3FZVK7I" 
                title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
                onClick={handlePlayer}
                ref={videoRef}></iframe>
            </div>
            <div>
                <button className='btn btn-outline-dark' onClick={handlePlayer}>Play!</button>
            </div>
        </div>
    )
}

export default MediaPlayerApp