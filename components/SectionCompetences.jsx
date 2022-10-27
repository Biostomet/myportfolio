import React from 'react'
import Card from './cards/Card'

export default function SectionCompetences() {
    const datas = [
        {
          img: 'img/react-logo2.png',
          nameClass: 'w-[30%]',
          rating : 'rating-1',
          checked1 : '',
          checked2 : '',
          checked3 : 'checked',
          checked4 : '',
          id : 1,
        },
        {
          img: 'img/laravel-logo.png',
          nameClass: '',
          rating : 'rating-2',
          checked1 : '',
          checked2 : '',
          checked3 : 'checked',
          checked4 : '',
          id : 2,
        },
        {
          img: 'img/WordPress-Logo.png',
          nameClass: 'w-[44%]',
          rating : 'rating-3',
          checked1 : '',
          checked2 : 'checked',
          checked3 : '',
          checked4 : '',
          id : 3,
        },
      ]
  return (
    <div className='flex flex-col items-center justify-center'>
        <h1 className='uppercase font-bold text-3xl text-center mt-36'>Mes compétences</h1>
        <div className='grid grid-cols-3 mt-10'>
            {
            datas.map((data) => (
            <Card key={data.id} img={data.img} nameClass={data.nameClass} rating={data.rating} checked1={data.checked1} checked2={data.checked2} checked3={data.checked3} checked4={data.checked4}/>
        ))}
        </div>
    </div>
  )
}
