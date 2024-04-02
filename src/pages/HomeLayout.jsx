import { Outlet, useNavigation } from 'react-router-dom'
import NavBar from '../components/NavBar'
import { Header, Hero, Loading } from '../components'

const HomeLayout = () => {
  const navigation = useNavigation()
  const isPageLoading = navigation.state === 'loading'
  return (
    <>
      <Header />
      <NavBar />
      {isPageLoading ? (
        <Loading />
      ) : (
        <section className="align-element py-20">
          <Outlet />
        </section>
      )}
    </>
  )
}
export default HomeLayout
