import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'

function Cards() {
    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fetch('/foods.json')
        .then(response => response.json())
        .then(data => setFoods(data));
    }, [])
  return (
    <div id='cards' className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
        {
            foods.map(food => <Card key={food.id} food={food}></Card>)
        }
    </div>
  )
}

export default Cards