import React from 'react'
import propTypes from 'prop-types'


const Rating = ({ value , text, color }) => {
    return (
        <div classsName="rating">
            <span>
                <i style={{ color, margin: '0.1rem' }} className={ value >= 1 ? 'fas fa-star' : value >= 0.5 ? 'fa fa-star-half-alt' : 'fa fa-start'}></i>
            </span>
            <span>
                <i style={{ color , margin: '0.1rem'}} className={ value >= 2 ? 'fa fa-star' : value >= 1.5 ? 'fa fa-star-half-alt' : 'fa fa-start'}></i>
            </span>
            <span>
                <i style={{ color , margin: '0.1rem'}} className={ value >= 3 ? 'fa fa-star' : value >= 2.5 ? 'fa fa-star-half-alt' : 'fa fa-start'}></i>
            </span>
            <span>
                <i style={{ color, margin: '0.1rem' }} className={ value >= 4 ? 'fa fa-star' : value >= 3.5 ? 'fa fa-star-half-alt' : 'fa fa-start'}></i>
            </span>
            <span>
                <i style={{ color, margin: '0.1rem' }} className={ value >= 5 ? 'fa fa-star' : value >= 4.5 ? 'fa fa-star-half-alt' : 'fa fa-start'}></i>
            </span>
            <span>{ text && text }</span> 
        </div>
    )
} 

Rating.defaultProps = {
    color: '#009900'
}
Rating.propTypes ={
  
    text: propTypes.string.isRequired,
    color: propTypes.string,
}

export default Rating
