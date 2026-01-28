import Navbar from './components/Navbar'
import LaunchingSoon from './pages/LaunchingSoon'
import AboutKonnectG from './pages/AboutKonnectG'
import Cards from './components/Cards'
import Footer from './components/Footer'
import BusinessCTA from './components/BusinessCTA'
import photo from './assets/SLM.png'
import photo1 from './assets/AboveSLM.png'
import NotifyForm from './components/NotifyForm'

import emergencyBg from './assets/cards-bg/emrgency.png'
import partyBg from './assets/cards-bg/party.png'
import homeBg from './assets/cards-bg/home.png'
import choresBg from './assets/cards-bg/chores.png'
import medicalBg from './assets/cards-bg/medicalwellness.png'
import schoolBg from './assets/cards-bg/schoolwork.png'
import utilitiesBg from './assets/cards-bg/utilities.png'


function App() {
  return (
    <>
      <Navbar/>
      <LaunchingSoon/>
      <NotifyForm/>
      <AboutKonnectG/>
      <Cards cardName = "Sudden Household"
            second="EMERGENCY?"
            para="Just search for local electricians, plumbers, carpenters, technicians (water, AC, gas, repair, pest control, etc)"
            bgImage={emergencyBg}/>

      <Cards cardName="Need to organise"
            second="A PARTY?"
            para="just search for local decorator, florist, sound & light, DJs, photographers, etc"
            bgImage={partyBg}/>

      <Cards cardName="Something for"
            second="HOME?"
            para="just search for local home bakers, decor items, handmade gifts, etc"
            bgImage={homeBg}/>

      <Cards cardName="Weekend"
            second="CHORES?"
            para="just search for local tailors, parlor, barbershop, salons, repair & servicing, bike-wash, etc."
            bgImage={choresBg}/>

      <Cards cardName="Focusing on"
            second="MEDICAL WELLNESS?"
            para="just search for blood collection, physiotherapist, dentist, yoga, gyms, etc"
            bgImage={medicalBg}/>

      <Cards cardName="Last Minute"
            second="SCHOOLWORK?"
            para="just search for local tutors, stationery, project, etc"
            bgImage={schoolBg}/>

      <Cards cardName="And"
            second="MANY MORE UTILITIES!"
            para="we have over 40 categories, just go & check the → 'Search by Categories' button on the top right of the page."
            bgImage={utilitiesBg}/>

      <img src={photo1} alt="" className='w-screen'/>
      <img src={photo} alt="" className='w-screen bg-[#f5f5dc]'/>
      <BusinessCTA/>
      <Footer/>
    </>
  )
}

export default App