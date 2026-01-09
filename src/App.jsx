import Navbar from './components/Navbar'
import LaunchingSoon from './pages/LaunchingSoon'
import AboutKonnectG from './pages/AboutKonnectG'
import Cards from './components/Cards'
import Footer from './components/Footer'
import BusinessCTA from './components/BusinessCTA'
import photo from './assets/SLM.png'
import photo1 from './assets/AboveSLM.png'



function App() {
  return (
    <>
      <Navbar/>
      <LaunchingSoon/>
      <AboutKonnectG/>
      <Cards cardName='Sudden Household' second='EMERGENCY?' para="Just search for local electricians, plumbers, carpenters, technicians (water, AC, gas, repair, pest control, etc)" />
      <Cards cardName='Need to organise' second='A PARTY?' para='just search for local decorator, florist, sound & light, DJs, photographers, etc'/>
      <Cards cardName='Something for' second='HOME?' para='just search for local home bakers, decor items, handmade gifts, etc'/>
      <Cards cardName='Weekend' second='CHORES?' para='just search for local tailors, parlor, barbershop, salons, repair & servicing, bike-wash, etc.'/>
      <Cards cardName='Focusing on' second='MEDICAL WELLNESS?' para='just search for blood collection, physiotherapist, dentist, yoga, gyms, etc'/>
      <Cards cardName='Last Minute' second='SCHOOLWORK?' para='just search for local tutors, stationery, project, etc'/>
      <Cards cardName='And' second='MANY MORE UTILITIES!' para='we have over 40 categories, just go & check the → Search by Categories button'/>
      <img src={photo1} alt="" className='w-screen'/>
      <img src={photo} alt="" className='w-screen'/>
      <BusinessCTA/>
      <Footer/>
    </>
  )
}

export default App