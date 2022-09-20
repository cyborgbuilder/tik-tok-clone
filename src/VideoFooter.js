import React from 'react'
import './VideoFooter.css'
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Ticker from 'react-ticker'

function VideoFooter({channels, description, song}) {
  return (
    <div className='videoFooter'>
      <div className='videoFooter__text'>
        <h3>@{channels}</h3>
        <p>{description}</p>

        <div className='videoFooter__ticker'>
          <MusicNoteIcon className='videoFooter__icon' />

          <Ticker mode="smooth" >
        {({ index }) => (
            <>
                <p>{song}</p>
            </>
        )}
    </Ticker>
        </div>
      </div>
    </div>
  )
}

export default VideoFooter