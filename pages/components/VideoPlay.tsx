const VideoPlay = () => {
  return (
    <iframe
      className='h-full w-full rounded-[2em] py-4 px-2'
      id='ytplayer'
      src='https://www.youtube.com/embed/playlist?list=PLVyjWWLb36tjR45x3sU-MnwzpyxO_PObW'
      allow='autoplay'
    />
  )
}

export default VideoPlay
