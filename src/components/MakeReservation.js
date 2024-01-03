import React, { useState } from 'react';
import "../assets/global.css";
import "../Pages/Reservation.css";


const MakeReservation = () => {
    const [name, setName] = useState("");
    const [email,setEmail] = useState("Email");
    const [phone, setPhone] = useState("");
    const [date, setDate] = useState("Date");
    const [time, setTime] = useState("");
    const [text, setText] = useState("");
    const [errors, setErrors] = useState({
      email: '',
    });
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      text: '',
    });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    // console.log(formData);
      console.log(event.target.value);
 setFormData({
   ...formData,
   [name]: value,
 });
 validateInput(name, value);

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      case 'date':
        setDate(value);
        break;
      case 'time':
        setTime(value);
        break;
      case 'text':
        setText(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // alert(`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nDate: ${date}\nTime: ${time}\nPerson: ${text}`);
    console.log('Form submitted:', formData);
  }
  const validateInput = (name, value) => {
    let error = '';


    if (name === 'email') {
      // Simple email regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      error = value.match(emailRegex) ? '' : 'Invalid email address';
    }


    setErrors({
      ...errors,
      [name]: error,
    });
  };

    return  ( 
        <section className='make-reserv'>
            <div className='make-reserv-container container'>
                <h2 className='reserv-title'>Make a Reservation</h2>
              <div className='reserv-content'>
                <div className='reserv-image'>
                <img src='./images/bg_1.jpg'  alt="background"/>
                </div>
            <div className='reserv-block'>
                
                <form onSubmit={handleSubmit} className="reserv-form">
                    <div className='reserv-list'>
                    <div className='reserv-item'>
                    <label>Name<br></br> </label>
                      <input
                        name="name"
                        type="text"
                        value={name}
                        onChange={handleInputChange}
                        placeholder="Name" 
                        className='reserv-name' />
                   
                    <label>Phone<br></br></label>
                      <input
                        name="phone"
                        type="tel"
                        value={phone}
                        onChange={handleInputChange}
                        placeholder="Phone" 
                        className='reserv-phone'/>
                    
                    <label>Time<br></br></label>
                        <select name="time" value={time} onChange={handleInputChange} className="reserv-time">
                            <option value="0">Time</option>
                            <option value="1">12.00am</option>
                            <option value="2">12.30am</option>
                            <option value="3">1.00am</option>
                            <option value="4">1.30am</option>
                            <option value="5">2.00am</option>
                            <option value="6">2.30am</option>
                            <option value="7">3.00am</option>
                            <option value="8">3.30am</option>
                            <option value="9">4.00am</option>
                            <option value="10">4.30am</option>
                            <option value="11">5.00am</option>
                            <option value="12">5.30am</option>
                            <option value="13">6.00am</option>
                            <option value="14">6.30am</option>
                            <option value="15">7.00am</option>
                            <option value="16">7.30am</option>
                            <option value="17">8.00am</option>
                            <option value="18">8.30am</option>
                            <option value="19">9.00am</option>
                            <option value="20">9.30am</option>
                            <option value="21">10.00am</option>
                            <option value="22">10.30am</option>
                            <option value="23">11.00am</option>
                            <option value="24">11.30am</option>
                            <option value="25">12.00am</option>
                            <option value="26">12.30am</option>
                            <option value="27">1.00am</option>
                            <option value="28">1.30am</option>
                            <option value="29">2.00am</option>
                            <option value="30">2.30am</option>
                            <option value="31">3.00am</option>
                            <option value="32">3.30am</option>
                            <option value="33">4.00am</option>
                            <option value="34">4.30am</option>
                            <option value="35">5.00am</option>
                            <option value="36">5.30am</option>
                            <option value="37">6.00am</option>
                            <option value="38">6.30am</option>
                            <option value="39">7.00am</option>
                            <option value="40">7.30am</option>
                            <option value="41">8.00am</option>
                            <option value="42">8.30am</option>
                            <option value="43">9.00am</option>
                            <option value="44">9.30am</option>
                            <option value="45">10.00am</option>
                            <option value="46">10.30am</option>
                            <option value="47">11.00am</option>
                            <option value="48">11.30am</option>
                          </select>
                        
                    </div>
                    <div className='reserv-item'>
                    <label>Email<br></br></label>
                      <input
                        name="email"
                        type="email"
                        value={email}
                        onChange={handleInputChange}
                        placeholder="email" 
                        className='reserv-email'/>
                    <span style={{ color: 'red' }}>{errors.email}</span>
                    <label>Date<br></br></label>
                      <input
                      name="date"
                        type="date"
                        value={date}
                        onChange={handleInputChange}
                        placeholder="Date" 
                        className='reserv-date'/>
            
                    <label>Person<br></br></label>
                      <select name="text" value={text} onChange={handleInputChange} className="reserv-person">
                      <option value="0">Person</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4+">4+</option>
                      </select>
                    
                    </div>
                    </div>
                    <label></label>
                      <input
                        type="submit"
                        value="Make a Reservation" className='reserv-button'/>
                    
                    
                  </form>
                </div>
              </div>
            </div>
        </section>
    )
};
export default MakeReservation;