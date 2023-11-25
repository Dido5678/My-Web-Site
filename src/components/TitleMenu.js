import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../assets/style.css';

const TitleMenu = () => {
  const [name, setName] = useState("Name");
  const [phone, setPhone] = useState("Phone");
  const [date, setDate] = useState("Date");
  const [time, setTime] = useState("Time");
  const [text, setText] = useState("Text");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
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
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Name: ${name}\nPhone: ${phone}\nDate: ${date}\nTime: ${time}\nPerson: ${text}`);
  }

  return (
    <>
    <div className='section1'>
      <div className='myMenu'>
        <Link to="/home">HOME</Link>
        <Link to="/menu">MENU</Link>
      </div>
      <h1>Discover Our Exclusive Menu</h1>
      <form onSubmit={handleSubmit} className="form1">
        <label>
          <input
            name="name"
            type="text"
            value={name}
            onChange={handleInputChange}
            placeholder="Name" />
        </label>
        <label>
          <input
            name="phone"
            type="tel"
            value={phone}
            onChange={handleInputChange}
            placeholder="Phone" />
        </label>
        <label>
          <input
            name="date"
            type="date"
            value={date}
            onChange={handleInputChange}
            placeholder="M/D/YYYY" />
        </label>
        <label>
        <select name="time" value={time} onChange={handleInputChange} className="time">
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
        </label>
        <label>
          <select name="text" value={text} onChange={handleInputChange} className="person">
          <option value="0">Person</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4+">4+</option>
          </select>
        </label>
        <label>
          <input
            type="submit"
            value="Book a table" className='mySubmit'/>
        </label>
      </form>
      </div>
    </>
  )
}

export default TitleMenu;









