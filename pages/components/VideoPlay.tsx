const VideoPlay = () => {
  return (
    <iframe
      className='w-full h-full rounded-2xl'
      id='ytplayer'
      src='https://www.youtube.com/embed/lkVds7dcMNY?autoplay=1&controls=1&loop=1'
      allow='autoplay'
    />
  )
}

export default VideoPlay
