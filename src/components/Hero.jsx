import { Link } from 'react-router-dom'
import hero1 from '../assets/hero1.webp'
import hero2 from '../assets/hero2.webp'
import hero3 from '../assets/hero3.webp'
import hero4 from '../assets/hero4.webp'

const carouselImages = [hero1, hero2, hero3, hero4]

const Hero = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="font-bold text-4xl tracking-tight leading-none sm:text-6xl">
          We are changing the way people shop
        </h1>
        <p className="leading-8 mt-8 max-w-xl ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
          repellat explicabo enim soluta temporibus asperiores aut obcaecati
          perferendis porro nobis.
        </p>
        <div className="mt-10">
          <Link to="products" className="btn btn-primary">
            Our Products
          </Link>
        </div>
      </div>
      <div className="hidden h-[28rem] lg:carousel carousel-center rounded-box p-4 space-x-4 bg-neutral">
        {carouselImages.map((image, index) => {
          return (
            <div key={image} className="carousel-item">
              <img
                src={image}
                className="rounded-box h-full w-80  object-cover"
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default Hero
