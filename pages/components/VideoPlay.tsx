const VideoPlay = () => {
  return (
    <iframe
      className='h-full w-full rounded-[2em] py-4 px-2'
      id='ytplayer'
      src='https://www.youtube.com/embed/lkVds7dcMNY?autoplay=1&controls=1&loop=1'
      allow='autoplay'
    />
  )
}

export default VideoPlay
