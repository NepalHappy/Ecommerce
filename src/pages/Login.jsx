import { Form, Link, redirect, useNavigate } from 'react-router-dom'
import FormInput from '../components/FormInput'
import SubmitBtn from '../components/SubmitBtn'
import { customFetch } from '../utils'
import { toast } from 'react-toastify'
import { loginUser } from '../features/user/userSlice'
import { useDispatch } from 'react-redux'

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData()
    const data = Object.fromEntries(formData)
    try {
      const response = await customFetch.post('/auth/local', data)

      store.dispatch(loginUser(response.data))
      toast.success('logged in successfully')
      return redirect('/')
    } catch (error) {
      console.log(error)
      const errorMessage =
        error?.response?.data?.error?.message ||
        'please double check your credentials'

      toast.error(errorMessage)
      return null
    }
  }

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const loginAsGuestUser = async () => {
    try {
      const response = await customFetch.post('/auth/local', {
        identifier: 'test@test.com',
        password: 'secret',
      })
      dispatch(loginUser(response.data))
      toast.success('welcome guest user')
      navigate('/')
    } catch (error) {
      console.log(error)
      toast.error('guest user login error.please try later.')
    }
  }
  return (
    <section className="grid place-items-center h-screen ">
      <Form
        className="card w-96 p-8 shadow-lg bg-base-300 flex flex-col gap-y-4"
        method="POST"
      >
        <h4 className="font-bold text-3xl text-center">Login</h4>
        <FormInput
          type="email"
          name="identifier"
          defaultValue="test@test.com"
          label="email"
        />
        <FormInput
          type="password"
          name="password"
          defaultValue="secret"
          label="password"
        />

        <div className="mt-4">
          <SubmitBtn text="Login" />
        </div>
        <button
          className="btn btn-secondary btn-block"
          type="button"
          onClick={loginAsGuestUser}
        >
          Guest User
        </button>
        <p className="text-center">
          Not a member Yet ?{' '}
          <Link className="link link-hover link-primary ml-2" to="/register">
            {' '}
            Register
          </Link>
        </p>
      </Form>
    </section>
  )
}
export default Login
