import { BsGridFill, BsList } from 'react-icons/bs'
import ProductsGrid from './ProductsGrid'
import ProductsList from './ProductsList'
import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const ProductsContainer = () => {
  const { meta } = useLoaderData()
  const totalProducts = meta.pagination.total
  const [layout, setLayout] = useState('grid')

  const setActiveStyle = (pattern) => {
    return `text-xl btn btn-circle btn-sm ${
      layout === pattern
        ? 'btn-primary text-primary-content'
        : 'btn-ghost text-base-content'
    }`
  }

  return (
    <>
      <div className="flex justify-between items-center mt-8 border-b border-base-300 pb-5">
        <h4 className="font-medium text-md">
          {totalProducts} Product{totalProducts > 1 ? 's' : ''}
        </h4>
        <div className="flex gap-x-2">
          <button
            onClick={() => setLayout('grid')}
            className={setActiveStyle('grid')}
          >
            <BsGridFill />
          </button>
          <button
            onClick={() => setLayout('list')}
            className={setActiveStyle('list')}
          >
            <BsList />
          </button>
        </div>
      </div>
      <div>
        {totalProducts === 0 ? (
          <h5 className="text-2xl mt-16">
            Sorry, no products matched your search...
          </h5>
        ) : layout === 'grid' ? (
          <ProductsGrid />
        ) : (
          <ProductsList />
        )}
      </div>
    </>
  )
}
export default ProductsContainer
