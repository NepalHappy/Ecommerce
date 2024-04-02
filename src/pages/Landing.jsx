import { useLoaderData } from 'react-router-dom'
import { FeaturedProducts, Hero } from '../components'
import { customFetch } from '../utils'
const url = '/products?featured=true'
const featuredProductsQuery = {
  queryKey: ['featuredProducts'],
  queryFn: () => customFetch(url),
}

export const loader = (queryClient) => async () => {
  const response = await queryClient.ensureQueryData(featuredProductsQuery)
  return { data: response.data.data }
}

const Landing = () => {
  // const data = useLoaderData()
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  )
}
export default Landing
