import React from 'react'
import { useParams } from 'react-router-dom'
import BlogData from '../../BlogData'
import "./BlogView.css"
function BlogView() {
  const { id } = useParams()
  const selectedblog = BlogData.find((BlogaDataobj, i) => BlogaDataobj.id == id)
  console.log(selectedblog)
  return (
    <>
      <div className='blog-view-container'>
        <div>
          <img src={selectedblog.cycleimage} />
        </div>
        <div className='discripton-div'>
          <h3> {selectedblog.title}</h3>
          <img alt='Rating' src={selectedblog.Rating} />
          <p>100+ bought in past month</p>
          <hr />
          <div className='deal-view'>Limited time deal</div>
          <div>
            <p className='off-price'>-{selectedblog.off} | ₹ {selectedblog.price} </p>
            <p className='price-blogview'> M.R.P.: <del>₹ 10000</del></p>
          </div>
          <div>
            <p>Inclusive of all taxes</p>
            <p><b>EMI </b> starts at ₹194. No Cost EMI available </p>
          </div>
        </div>
        <div className='order-div'>
          <p className='price-view'>₹{selectedblog.price}</p>
          <div >
            <p className='delivery-view'>{selectedblog.delivery}  <b>{selectedblog.date}</b></p>
            <div>
              <p className='In-stock'>In Stock</p>
              <label className='quantity' for="number">Quantity : </label>
              <select className='option' id="number" name="number">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select><br />
              <div className='btn'>
              <button className='btn-add-to-cart'>Add to cart</button><br />
              <button className='btn-buy-now'>Buy Now</button>
              </div>
              <input className='checkbox' type='checkbox' /><span className='checkbox-add'>Add gift option</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogView