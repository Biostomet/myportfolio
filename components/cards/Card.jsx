import React from 'react'

export default function Card({img, nameClass, checked1, checked2, checked3, checked4, rating}) {
  return (
    <div className='flex flex-col items-center'>
        <img className={nameClass} src={img} alt="" />
            <div class="rating">
                <input type="radio" name={rating} class="mask mask-star" />
                <input type="radio" name={rating} class="mask mask-star" checked={checked1}/>
                <input type="radio" name={rating} class="mask mask-star" checked={checked2}/>
                <input type="radio" name={rating} class="mask mask-star" checked={checked3}/>
                <input type="radio" name={rating} class="mask mask-star" checked={checked4}/>
        </div>
    </div>
  )
}
