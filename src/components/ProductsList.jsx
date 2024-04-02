import { Link, useLoaderData } from 'react-router-dom'
import { formatPrice } from '../utils'

const ProductsList = () => {
  const { data } = useLoaderData()

  return (
    <div className="mt-12 grid gap-y-8">
      {data.map((item) => {
        const { id } = item
        const { attributes } = item
        const { title, company, category, colors, description, price, image } =
          attributes
        const dollarAmount = formatPrice(price)
        return (
          <Link
            key={id}
            to={`/products/${id}`}
            className="p-8 rounded-lg flex flex-col sm:flex-row gap-y-4 flex-wrap bg-base-100 shadow-xl hover:shadow-2xl
            duration-300 group"
          >
            <img
              src={image}
              className="rounded-xl h-24 w-24 sm:h-32 sm:w-32  object-cover group-hover:scale-105 transition duration-300"
            />

            <div className="ml-0 sm:ml-16">
              <h2 className="capitalize card-title tracking-wider">{title}</h2>
              <h4 className="capitalize text-md text-neutral-content">
                {company}
              </h4>
            </div>
            <p className="font-medium ml-0 sm:ml-auto text-lg">
              {dollarAmount}
            </p>
          </Link>
        )
      })}
    </div>
  )
}
export default ProductsList
