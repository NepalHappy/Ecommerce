import { Form, Link, useLoaderData } from 'react-router-dom'
import FormInput from './FormInput'
import FormSelect from './FormSelect'
import FormRange from './FormRange'
import FormCheckBox from './FormCheckBox'
const Filters = () => {
  const { meta, params } = useLoaderData()
  const { categories, companies } = meta
  const { search, category, company, order, price, shipping } = params

  return (
    <Form className="rounded-md bg-base-200 px-8 py-4 grid gap-x-4 gap-y-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      <FormInput
        type="search"
        label="select Product"
        name="search"
        size="input-sm"
        defaultValue={search}
      />
      <FormSelect
        size="select-sm"
        label="select Category"
        list={categories}
        name="category"
        defaultValue={category}
      />
      <FormSelect
        size="select-sm"
        label="select Company"
        list={companies}
        name="company"
        defaultValue={company}
      />
      <FormSelect
        size="select-sm"
        label="Sort By"
        name="order"
        list={['a-z', 'z-a', 'high', 'low']}
        defaultValue={order}
      />
      <FormRange
        label="select Price"
        name="price"
        size="range-sm"
        price={price}
      />
      <FormCheckBox
        label="Free Shipping"
        name="shipping"
        size="checkbox-sm"
        defaultValue={shipping}
      />
      <button className="btn btn-primary btn-sm" type="submit">
        Search
      </button>
      <Link to="/" className="btn btn-accent btn-sm">
        Reset
      </Link>
    </Form>
  )
}
export default Filters
