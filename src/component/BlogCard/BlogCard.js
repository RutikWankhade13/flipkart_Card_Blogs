import React from 'react'
import "./BlogCard.css"
import { Link } from 'react-router-dom'

function BlogCard({ id, title, Rating, price, cycleimage, delivery, date, previewimaage1, previewimaage2, previewimaage3, previewimaage4, previewimaage5 }) {
    return (
        
            <Link to={`/blog/${id}`} className='blog-card'>
                <div className='cycle-img-div'>
                    <img className='img-cycle' alt='cycleimage' src={cycleimage} />
                </div>

                <div className='discription-div'>

                    <div>
                        <p className='title'>{title}</p>
                        <img className='img-rating' alt='Rating' src={Rating} />
                    </div>
                    <div className='deal'>Limited time deal</div>
                    <div className='price-div'>
                        <div><p className='price'> ₹  {price} </p> </div> <div className='offer'><del >₹ 10,725</del> (63% off)</div>
                    </div>
                    <div className='delivery-div'>
                        <p >{delivery}  <b> {date}</b></p>
                    </div>
                    <button className='btn-cart' >  Add to cart </button>
                </div>
            </Link>
        
    )
}
export default BlogCard