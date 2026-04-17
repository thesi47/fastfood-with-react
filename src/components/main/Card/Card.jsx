import React, { useState } from 'react'

function Card(props) {
  const { food } = props;
  // State to track if the specific food image fails to load
  const [imgError, setImgError] = useState(false);

  return (
    <div className="card bg-base-100 w-96 shadow-sm mx-auto">
      <figure>
        {imgError ? (
          /* BRANDED FALLBACK: This replaces the image if it fails */
          <div className="h-48 w-full bg-orange-50 flex flex-col items-center justify-center border-b border-base-200">
            <span className="text-3xl">🍽️</span>
            <span className="text-orange-600 font-bold tracking-tighter mt-1">THESI'S RESTAURANTS</span>
            <span className="text-gray-400 text-xs italic">Image coming soon</span>
          </div>
        ) : (
          /* PRIMARY IMAGE: Your original code with the toggle logic */
          <img
            className='h-48 w-full object-cover'
            src={food.image}
            alt={food.name}
            onError={() => setImgError(true)}
          />
        )}
      </figure>

      <div className="card-body ">
        <h2 className="card-title">{food.name}</h2>
        <p className="text-gray-500">{food.cuisine} • {food.city}</p>
        <div className="divider items-center my-2">
          <div className="flex items-center mt-3">
            <p>
              <span className="text-yellow-500 font-semibold">
                ⭐ {food.rating}
              </span> &nbsp; •
              <span className="text-sm px-2 py-1 rounded">
                {food.price_range}
              </span>
            </p>
          </div>

          <div className="card-actions justify-end">
            <p className={`mt-2 text-sm ${food.is_open ? 'text-green-600' : 'text-red-500'}`}>
              {food.is_open ? "Open Now" : "Closed"}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card