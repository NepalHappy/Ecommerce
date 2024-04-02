import { useRouteError } from 'react-router-dom'

const ErrorElement = () => {
  const data = useRouteError()
  console.log(data)
  return <h4 className="font-bold text-4xl ">There was an error...</h4>
}
export default ErrorElement
