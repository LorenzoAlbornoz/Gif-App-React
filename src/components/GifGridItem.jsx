import React from 'react'

const GifGridItem = ({gif}) => {
    const { url, title } = gif;
  return (
    <div className='card'>
        <img src={url} alt={title} />
        <p>{title}</p>
    </div>
  )
}

export default GifGridItem