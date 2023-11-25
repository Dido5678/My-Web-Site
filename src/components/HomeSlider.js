import Carousel from 'nuka-carousel';
import '../assets/style.css';


const HomeSlider = () => {
  const slides = [
    {
      style: { backgroundImage: "url('images/bg_1.jpg')" },
    },
    {
      style: { backgroundImage: "url('images/bg_2.jpg')" },
    },
    {
      style: { backgroundImage: "url('images/bg_3.jpg')" },
    }
  ]

  const params = {
    wrapAround: true,
    animation: 'zoom',
    slidesToShow: 2,
   
  }

  return (
    <div className="containerClassName">
    {/* Your slider content here */}
    <img src="..." alt="Slider Image" />
    <button>Slider Button</button>
  </div>
    // <div>
      /* <Carousel {...params}>
        {slides.map((slide) => (
          <img src={slide} key={slide}/>
        ))}
      </Carousel> */
    //  </div> 
  )
}

export  default HomeSlider