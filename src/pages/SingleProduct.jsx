import { useLoaderData, Link } from 'react-router-dom'
import { customFetch, formatPrice, generateAmountOptions } from '../utils'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addItem } from '../features/cart/cartSlice'

const singleProductQuery = (id) => {
  return {
    queryKey: ['singleProduct', id],
    queryFn: () => customFetch(`/products/${id}`),
  }
}
export const loader =
  (queryClient) =>
  async ({ params }) => {
    const { id } = params
    const response = await queryClient.ensureQueryData(singleProductQuery(id))
    return response.data.data
  }
const SingleProduct = () => {
  const data = useLoaderData()
  const dispatch = useDispatch()
  const { category, colors, company, description, image, price, title } =
    data.attributes
  const id = data.id
  const [productColor, setProductColor] = useState([colors[0]])
  const [amount, setAmount] = useState(1)
  const dollarAmounts = formatPrice(price)

  const handleAmount = (e) => {
    setAmount(parseInt(e.target.value))
  }
  const cartProduct = {
    cartID: id + productColor,
    productID: id,
    amount,
    title,
    price,
    image,
    productColor,
    company,
  }
  const addToBag = () => {
    dispatch(addItem({ product: cartProduct }))
  }
  // console.log(color)
  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
      <div className=" mt-6 grid  gap-y-8 lg:grid-cols-2  lg:gap-x-16">
        <img
          src={image}
          alt={title}
          className="object-cover w-96 h-96 rounded-lg lg:w-full"
        />
        <div>
          <h1 className="capitalize text-3xl font-bold">{title}</h1>
          <h4 className="font-bold text-neutral-content mt-2">{company}</h4>
          <div>
            <p className="mt-3 text-xl">{dollarAmounts}</p>
            <p className="leading-8 mt-6">{description}</p>
          </div>
          <div className="mt-6">
            <h2 className="font-medium text-md capitalize tracking-wider">
              Colors
            </h2>
            <div className="mt-2">
              {colors.map((color) => {
                return (
                  <button
                    key={color}
                    className={`badge  w-6 h-6 mr-2  ${
                      color === productColor && 'border-2 border-secondary'
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setProductColor(color)}
                  ></button>
                )
              })}
            </div>
          </div>
          <div className="w-full form-control max-w-xs">
            <label className="label">
              <h4 className="capitalize font-medium tracking-wider text-md ">
                Amount
              </h4>
            </label>

            <select
              className="select select-bordered select-primary select-md"
              value={amount}
              onChange={handleAmount}
            >
              {generateAmountOptions(20)}
            </select>
          </div>
          <div className="mt-10">
            <button
              type="button"
              className="btn btn-secondary btn-md"
              onClick={addToBag}
            >
              Add to Bag
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
export default SingleProduct
