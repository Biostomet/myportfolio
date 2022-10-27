import React from 'react'

export default function CardRealisation({projet}) {
  const {title, skills, featuredImage} = projet.fields
  // console.log(featuredImage);
  return (
    <div className='shadow-2xl mt-10 flex flex-col items-center justify-center'>
        <img src={featuredImage.fields.file.url} alt="" />
        <p className='uppercase font-semibold py-10'>{title} <span className='text-red-500 font-bold'>{skills}</span></p>
    </div>
  )
}
