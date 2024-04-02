import { useLoaderData } from 'react-router-dom'
import { Filters, ProductsContainer, PaginationContainer } from '../components'
import { customFetch } from '../utils'

const allProductsQuery = (queryParams) => {
  const { search, category, company, price, shipping, page, order } =
    queryParams
  return {
    queryKey: [
      'products',
      search ?? '',
      category ?? 'all',
      company ?? 'all',
      price ?? 100000,
      order ?? 'a-z',
      shipping ?? false,
      page ?? 1,
    ],
    queryFn: () => customFetch('/products', { params: queryParams }),
  }
}
export const loader =
  (queryClient) =>
  async ({ request }) => {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ])
    //console.log(params)

    const response = await queryClient.ensureQueryData(allProductsQuery(params))

    return {
      data: response.data.data,
      meta: response.data.meta,
      params: params,
    }
  }

const Products = () => {
  const data = useLoaderData()
  //console.log(data)
  return (
    <div>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </div>
  )
}
export default Products
