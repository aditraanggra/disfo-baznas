const VideoPlay = () => {
  return (
    <iframe
      className=' w-full h-full rounded-xl border-8 border-green-500 border-opacity-40'
      id='ytplayer'
      src='https://www.youtube.com/embed/lkVds7dcMNY?autoplay=1&controls=0&loop=1'
      allow='autoplay'
    />
  )
}

export default VideoPlay
