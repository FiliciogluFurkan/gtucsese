//import React from 'react'
//import { useEffect } from 'react';
//import { useParams } from 'react-router-dom';
//import { useEffect,useState } from 'react';
//import axios from 'axios';
import './../css/footballcourtsdetails/FootballCourtsDetails.css';

/*const getfootballCourtById = async (id) => {
  const response = await axios.get(`http://localhost:8080/fields/${id}`);
  return response.data;
}; 
};  it will use when we get the data from the server
 */



function FootballCourtsDetails() {
  // const {footballCourtId} = useParams();
  /*   const [footballCourt, setfootballCourt] = useState(null);
    
   useEffect(() => {
      const fetchField = async () => {
        if (footballCourtId) {
          const footballCourtData = await getfootballCourtById(footballCourtId);
          setfootballCourt(footballCourtData); // veriyi state'e ayarlama
        }
      };
  
   */

  //ı am thinkg like that i sent a get request and i got this
  const footballCourt = {
    id: 1,
    name: 'Aydın Halısaha',
    image: '/src/assets/images/fields/evin.jpg',
    rating: 4.5,
    place: 'Sakarya/erenler',
    location: 'istanbul/Maltepe/cevizli mahallesi',
    explanation: 'Tesisimiz Mustafa Kemal Paşa metrobüs durağının yanında bulunmaktadır. Detaylı konum bilgisine sayfanın en altındaki "Konum" bölümünden ulaşabilirsiniz.  Rezervasyon yapmak için sayfanın en üst kısmındaki "Rezervasyon Yap" bölümünden istediğiniz tarih ve saati seçip rezervasyon oluşturabilirsiniz.',
    phoneNumber: '0850 455 85 45',
    availableFootballCourts: "6+6,7+7,8+8 sahalar"
  }

  
  return (
  <div>

    <div className='footballcourtsdetails-informations-section'>
      
      
        <div className='footballcourtsdetails-informations-section-image-container' style={{ backgroundImage: `url(${footballCourt.image})` }}>
          Hello
        </div>
        
      <div className='footballcourtsdetails-informations-section-informations'>
        
<div className='footballcourtsdetails-informations-section-informations-title'>
          {footballCourt.name}
        </div>
        
<div className='footballcourtsdetails-informations-section-informations-Rezervation'>
          Rezervasyon Yap
        </div>
        
<div className='footballcourtsdetails-informations-section-informations-availableFootballCourts'>
          
<div className='footballcourtsdetails-informations-section-informations-availableFootballCourts-icon'>
            <span className="material-symbols-outlined">
              schedule
            </span>
          </div>
          
<div className='footballcourtsdetails-informations-section-informations-availableFootballCourts-text'>
            {footballCourt.availableFootballCourts}
          </div>
        
</div>
        
<div className='footballcourtsdetails-informations-section-informations-communication'>
          
<div className='footballcourtsdetails-informations-section-informations-communication-icon '>
            <span className="material-symbols-outlined">
              call
            </span>
          </div>
          
<div className='footballcourtsdetails-informations-section-informations-communication-text'>
            {footballCourt.phoneNumber}
          </div>
        
</div>
        
<div className='footballcourtdetails-informations-section-footballcourt-explaining-title'>
          Tesis Açıklaması
        </div>
        
<div className='footballcourtdetails-informations-section-footballcourt-explanation'>
                  {footballCourt.explanation}
        </div>
  
    </div>
  
  </div>
  
  </div>
   
  )
}

export default FootballCourtsDetails
{/* <div>

<div className='footballcourtsdetails-informations-section'>
  
iv className='footballcourtsdetails-informations-section-image-container'>
    <img className='footballcourtsdetails-informations-section-image' src={footballCourt.image} alt="No photo found" />
</div>
  
<div className='footballcourtsdetails-informations-section-informations'>
  <div className='footballcourtsdetails-informations-section-informations-title'>{footballCourt.name}</div>
    <div className='footballcourtsdetails-informations-section-informations-Rezervation'>Rezervasyon Yap</div>
     <div  className='footballcourtsdetails-informations-section-informations-availableFootballCourts'>
     <div   className='footballcourtsdetails-informations-section-informations-availableFootballCourts-icon'>
      <span className="material-symbols-outlined">
        schedule
      </span>
      </div>
    <div className='footballcourtsdetails-informations-section-informations-availableFootballCourts-text'>
      {footballCourt.availableFootballCourts}
    </div>
    <div>
       className='footballcourtsdetails-informations-section-informations-communication'>
         className='footballcourtsdetails-informations-section-informations-communication-icon'>
      <span className="material-symbols-outlined">
        call
      </span>
      </div>
    <div className='footballcourtsdetails-informations-section-informations-communication-text'>
        {footballCourt.phoneNumber}
    </div>
  
  </div>
  <div className='footballcourtdetails-informations-section-explaining-footvallcourt'>
    Tesis Açıklaması
  </div>
  <div></div>
    <div></div>
  <div></div>

</div>

</div>

</div> */}