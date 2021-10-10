import logo from './logo.svg';
import './App.css';
import MainSection from './projectOne/MainSection';
import Navbar from './projectTwo/Navbar'
import InputSection from './projectTwo/InputSection'
import OutputSection from './projectTwo/OutputSection';
import Footer from './projectTwo/Footer';
import Header from './statePropsProject/Header';
import Banner from './statePropsProject/Banner';
// import Footer from './statePropsProject/Footer';
import { useState } from 'react';

function App() {

  // useEffect(()=>{
  //   console.log("Use effect get called")
  // })
// -----------------------------------
  // const [headerLinks, setHeaderLinks] = useState([
  //   "Home"
  // ])

  // const AddHeaderLinks=(link)=>{
  //   setHeaderLinks(
  //     [...headerLinks, link]
  //   )
  // }

  // const RemoveHeaderLinks=(link)=>{
  //   // debugger;
  //  headerLinks.pop()
  //  setHeaderLinks([...headerLinks])
  // }

  // const [footerLinks, setFooterLinks] = useState([])

  // ============= My Project ======================


  const [data, setData] = useState([])

  console.log("yeh print kro",data, data.length)
  function AddDetails(details){

    setData([
      ...data, details
    ])
  }
  
  
      // ============= My Project end ======================
      return (
    <div className="App">

     {/* <MainSection/> */}
    {/* ------------------------- */}
   
    <Navbar/>
    <InputSection  AddDetails={AddDetails} />
    <OutputSection  data={data} />
    <Footer/>

    {/* ------------------------- */}

    {/* <Header headerLinks={headerLinks}/>
    <Banner AddHeaderLinks={AddHeaderLinks} RemoveHeaderLinks={RemoveHeaderLinks} />
    <Footer/> */}
    
    </div>
  );
}

export default App;
