import React from 'react'

const Reviews = (props: any) => {
    return (
        <div className='reviewsDiv'>
            {props.i + 1} reviews
        </div>
    )
}

export default Reviews