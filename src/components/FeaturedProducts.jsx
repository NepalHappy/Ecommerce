import { useLoaderData } from 'react-router-dom'
import SectionTitle from './SectionTitle'
import ProductsGrid from './ProductsGrid'

const FeaturedProducts = () => {
  //const response = useLoaderData()
  return (
    <div className="pt-24">
      <SectionTitle text="Featured Products" />
      <ProductsGrid />
    </div>
  )
}
export default FeaturedProducts
