import React from 'react'
import BlogData from '../../BlogData'
import BlogCard from '../../component/BlogCard/BlogCard'
function Home() {
  return (
    <>
      {
        BlogData.map((blogobj, i) => {
          const {
            id,
            title,
            Rating,
            price,
            cycleimage,
            delivery,
            date,
            previewimaage1,
            previewimaage2,
            previewimaage3,
            previewimaage4,
            previewimaage5
          } = blogobj
          return(
            <BlogCard
            key={i}
            id={id}
            title={title}
            Rating={Rating}
            price={price}
            cycleimage={cycleimage}
            delivery={delivery}
            date={date}
            previewimaage1={previewimaage1}
            previewimaage2={previewimaage2}
            previewimaage3={previewimaage3}
            previewimaage4={previewimaage4}
            previewimaage5={previewimaage5}
            />
          )
        })
      }
    </>
  )
}

export default Home