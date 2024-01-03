import React from 'react';
import "../assets/global.css";
import "../Pages/Home.css";
import Carousel from "nuka-carousel"

const GuestSays = () => {
    const params = {
        wrapAround: true,
        // animation: 'zoom',
        slidesToShow: 3,
      };

      
    return (
        <section className='guest'>
            <div className='guest-container container'>
            <h4 className='guest-descr'>GUESTS SAYS</h4>
            <h2 className='guest-title'>Our Satisfied Guests say</h2>
            <div className='guest-slider'>
       
                <Carousel {...params}>
                    <div className='guest-block'>
                        <img src='../images/person_1.jpg' alt="Slide 1" className="guest-image" />
                        <p className='guest-star'>
                            <img src='../images/star.png' />
                            <img  src='../images/star.png' />
                            <img src='../images/star.png' />
                            <img src='../images/star.png' />
                            <img src='../images/half-star.png' />
                        </p>
                        <p className='guest-text'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <span>Dennis Green</span><br></br>
                        <span className='guest-country'>Guests from Italy</span>
                    </div>
                    <div className='guest-block'>
                        <img src='../images/person_2.jpg' alt="Slide 2" className="guest-image"/>
                        <p className='guest-star'>
                            <img src='../images/star.png' />
                            <img  src='../images/star.png' />
                            <img src='../images/star.png' />
                            <img src='../images/star.png' />
                            <img src='../images/half-star.png' />
                        </p>
                        <p className='guest-text'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <span>Dennis Green</span><br></br>
                        <span className='guest-country'>Guests from Italy</span>
                    </div>
                    <div className='guest-block'>
                        <img src='../images/person_3.jpg' alt="Slide 3" className="guest-image"/>
                        <p className='guest-star'>
                            <img src='../images/star.png' />
                            <img src='../images/star.png' />
                            <img src='../images/star.png' />
                            <img src='../images/star.png' />
                            <img src='../images/half-star.png' />
                        </p>
                        <p className='guest-text'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <span>Dennis Green</span><br></br>
                        <span className='guest-country'>Guests from Italy</span>
                    </div>
                    <div className='guest-block'>
                        <img src='../images/person_1.jpg' alt="Slide 4" className="guest-image"/>
                        <p className='guest-star'>
                            <img src='../images/star.png' />
                            <img src='../images/star.png' />
                            <img src='../images/star.png' />
                            <img src='../images/star.png' />
                            <img src='../images/half-star.png' />
                        </p>
                        <p className='guest-text'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <span>Dennis Green</span><br></br>
                        <span className='guest-country'>Guests from Italy</span>
                    </div>
                    <div className='guest-block'>
                        <img src='../images/person_2.jpg' alt="Slide 5" className="guest-image"/>
                        <p className='guest-star'>
                            <img src='../images/star.png' />
                            <img src='../images/star.png' />
                            <img src='../images/star.png' />
                            <img src='../images/star.png' />
                            <img src='../images/half-star.png' />
                        </p>
                        <p className='guest-text'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                        <span>Dennis Green</span><br></br>
                        <span className='guest-country'>Guests from Italy</span>
                    </div>
                </Carousel>
            </div>
            </div>
        </section>
    );
};

export default GuestSays;






// import React from 'react';
// import "../assets/global.css";
// import "../Pages/Home.css";
// import Carousel from 'react-bootstrap/Carousel';


// const GuestSays = () => {
      
     
//         return (
//             <section className='guest'>
//                  <h4 className='guest-descr'>GUESTS SAYS</h4>
//                  <h2 className='guest-title'>Our Satisfied Guests say</h2>
// {/* //                  <div className='guest-corusel'>
// //                     <Carousel>
// //                       <Carousel.Item>   
// //                         <div className='item'>
// //                           <img src='../images/person_1.jpg' alt="Slide 1" className="guest-image" />
// //                           <p className='guest-text'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
// //                           <span>Dennis Green</span><br></br>
// //                           <span className='guest-country'>Guests from Italy</span>
// //                         </div>
// //                         <div className='item'>
// //                           <img src='../images/person_1.jpg' alt="Slide 1" className="guest-image" />
// //                           <p className='guest-text'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
// //                           <span>Dennis Green</span><br></br>
// //                           <span className='guest-country'>Guests from Italy</span>
// //                         </div>
// //                         <div className='item'>
// //                           <img src='../images/person_1.jpg' alt="Slide 1" className="guest-image" />
// //                           <p className='guest-text'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
// //                           <span>Dennis Green</span><br></br>
// //                           <span className='guest-country'>Guests from Italy</span>
// //                         </div>
// //                        </Carousel.Item>
// //                       <Carousel.Item>
// //                         <img src='../images/person_2.jpg' alt="Slide 2" className="guest-image"/>
// //                         <p className='guest-text'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
// //                         <span>Dennis Green</span><br></br>
// //                         <span className='guest-country'>Guests from Italy</span>
// //                       </Carousel.Item>
// //                       <Carousel.Item>
// //                         <img src='../images/person_3.jpg' alt="Slide 3" className="guest-image"/>
// //                         <p className='guest-text'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
// //                         <span>Dennis Green</span><br></br>
// //                         <span className='guest-country'>Guests from Italy</span>
// //                       </Carousel.Item>
// //                     </Carousel>
// //                     </div> */}
// //          </section>
//         );
//       }
      
//       export default GuestSays;














// import React from 'react';
// import "../assets/global.css";
// import "../Pages/Home.css";
// import Carousel from 'react-bootstrap/Carousel';

// const GuestSays = () => {
//   const guestData = [
//     {
//       image: '../images/person_1.jpg',
//       text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
//       name: 'Dennis Green',
//       country: 'Guests from Italy',
//     },
//     {
//       image: '../images/person_2.jpg',
//       text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
//       name: 'Dennis Green',
//       country: 'Guests from Italy',
//     },
//     {
//       image: '../images/person_3.jpg',
//       text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
//       name: 'Dennis Green',
//       country: 'Guests from Italy',
//     },
//   ];

//   return (
//     <section className='guest'>
//       <h4 className='guest-descr'>GUESTS SAY</h4>
//       <h2 className='guest-title'>Our Satisfied Guests say</h2>
//       <Carousel>
//         {guestData.map((item, index) => (
//           <Carousel.Item key={index}>
//             <img src={item.image} alt={`Slide ${index + 1}`} className="guest-image" />
//             <p className='guest-text'>{item.text}</p>
//             <span>{item.name}</span><br></br>
//             <span className='guest-country'>{item.country}</span>
         
//            <img src={item.image} alt={`Slide ${index + 1}`} className="guest-image" />
//            <p className='guest-text'>{item.text}</p>
//            <span>{item.name}</span><br></br>
//            <span className='guest-country'>{item.country}</span>
    
//           <img src={item.image} alt={`Slide ${index + 1}`} className="guest-image" />
//           <p className='guest-text'>{item.text}</p>
//           <span>{item.name}</span><br></br>
//           <span className='guest-country'>{item.country}</span>
//         </Carousel.Item>
//         ))}
//       </Carousel>
//     </section>
//   );
// }

// export default GuestSays;
















      
    // return (
        // <section className='guest'>
        //     <h4 className='guest-descr'>GUESTS SAYS</h4>
        //     <h2 className='guest-title'>Our Satisfied Guests say</h2>
        //     <div className='guest-slider'>
       
        //         <Carousel {...params}>
        //             <div className='guest-block'>
        //                 <img src='../images/person_1.jpg' alt="Slide 1" className="guest-image" />
        //                 <p className='guest-text'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        //                 <span>Dennis Green</span><br></br>
        //                 <span className='guest-country'>Guests from Italy</span>
        //             </div>
        //             <div className='guest-block'>
        //                 <img src='../images/person_2.jpg' alt="Slide 2" className="guest-image"/>
        //                 <p className='guest-text'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        //                 <span>Dennis Green</span><br></br>
        //                 <span className='guest-country'>Guests from Italy</span>
        //             </div>
        //             <div className='guest-block'>
        //                 <img src='../images/person_3.jpg' alt="Slide 3" className="guest-image"/>
        //                 <p className='guest-text'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        //                 <span>Dennis Green</span><br></br>
        //                 <span className='guest-country'>Guests from Italy</span>
        //             </div>
        //             <div className='guest-block'>
        //                 <img src='../images/person_1.jpg' alt="Slide 4" className="guest-image"/>
        //                 <p className='guest-text'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        //                 <span>Dennis Green</span><br></br>
        //                 <span className='guest-country'>Guests from Italy</span>
        //             </div>
        //             <div className='guest-block'>
        //                 <img src='../images/person_2.jpg' alt="Slide 5" className="guest-image"/>
        //                 <p className='guest-text'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        //                 <span>Dennis Green</span><br></br>
        //                 <span className='guest-country'>Guests from Italy</span>
        //             </div>
        //         </Carousel>
        //     </div>
        // </section>
//     );
// };

// export default GuestSays;
