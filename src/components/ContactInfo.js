import React, { useState, useEffect } from 'react';
import "../assets/global.css";
import "../Pages/Contact.css";

const ContactInfo = () => {
  const [name, setName] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("name");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [textarea, setTextarea] = useState("");
  const [text, setText] = useState("");


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'subject':
        setSubject(value);
        break;
      case 'textarea':
        setTextarea(value);
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
    // alert(`Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nText: ${text}`);
  }
  useEffect(() => {
    // storing input name
    localStorage.setItem("name", JSON.stringify(name));
  }, [name]);

  

  return (
    <section className='contact'>
      <div className='contact-container container'>
        <div className='contanct-list'>
          <div className='contact-item'>
            <h3 className='contact-title'>Contact Information</h3>
            <div className="contact-border">
              <p className='contact-text'>Address: 198 West 21th Street, Suite 721 New York NY 10016</p>
            </div>
            <div className="contact-border">
              <p className='contact-text'>Phone: <span>+ 1235 2355 98</span> </p>
            </div>
            <div className="contact-border">
              <p className='contact-text'>Email:<span>info@yoursite.com</span> </p>
            </div>
            <div className="contact-border">
              <p className='contact-text'>Website <span>yoursite.com</span> </p>
            </div>
          </div>
          <div className='contact-item'>
            <form action='#' onSubmit={handleSubmit} className='contact-form'>
                  <div>
                     <input
                       name="name"
                       type="text"
                       value={name}
                       onChange={handleInputChange}
                      //  onChange={(e) => setName(e.target.value)}
                       placeholder="Your Name"
                       className='contact-inp' />
                   </div>
                   <div>
                     <input
                       name="email"
                       type="email"
                       value={email}
                       onChange={handleInputChange}
                       placeholder="Your Email"
                       className='contact-inp' />
                   </div>
                   <div>
                     <input
                       name="subject"
                       type="text"
                       value={subject}
                       onChange={handleInputChange}
                       placeholder="Subject"
                       className='contact-inp' />
                   </div>
                   <div>
                     <textarea
                       name="text"
                       cols={40}
                       rows={7}
                       value={textarea}
                       onChange={(e) => setTextarea(e.target.value)}
                       className='contact-textarea'
                       placeholder="Message">
                     </textarea>
                  </div>
                  <div>
                    <input
                      name="submit"
                      type="text"
                      value="Send Message"
                      onChange={handleInputChange}
                      className='contact-submit' />
                 </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactInfo;




// import React, { useState } from 'react';
// import "../assets/global.css";
// import "../Pages/Contact.css";

// const ContactInfo = () => {
//   const [name, setName] = useState("Name");
//   const [email, setEmail] = useState("Email");
//   const [subject, setSubject] = useState("Subject");
//   const [text, setText] = useState("Textarea");

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     switch (name) {
//       case 'name':
//         setName(value);
//         break;
//       case 'email':
//         setEmail(value);
//         break;
//       case 'subject':
//         setSubject(value);
//         break;
//       case 'text':
//         setText(value);
//         break;
//       default:
//         break;
//     }
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     alert(`Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nText: ${text}`);
//   }

//   return (
//     <div className='contact'>
//       <div className='contact-container container'>
//         <div className='contanct-list'>
//           <div className='contact-item'>
//             <div className="contact-border">
//               <p className='contact-text'>Address: 198 West 21th Street, Suite 721 New York NY 10016</p>
//             </div>
//             <div className="contact-border">
//               <p className='contact-text'>Phone: + 1235 2355 98</p>
//             </div>
//             <div className="contact-border">
//               <p className='contact-text'>Email: info@yoursite.com</p>
//             </div>
//             <div className="contact-border">
//               <p className='contact-text'>Website yoursite.com</p>
//             </div>
//           </div>
//           <div className='contact-item'>
//             <form onSubmit={handleSubmit} className='contact-form'>
//               <div>
//                 <input
//                   name="name"
//                   type="text"
//                   value={name}
//                   onChange={handleInputChange}
//                   placeholder="Your Name"
//                   className='contact-inp' />
//               </div>
//               <div>
//                 <input
//                   name="email"
//                   type="email"
//                   value={email}
//                   onChange={handleInputChange}
//                   placeholder="Your Email"
//                   className='contact-inp' />
//               </div>
//               <div>
//                 <input
//                   name="subject"
//                   type="text"
//                   value={subject}
//                   onChange={handleInputChange}
//                   placeholder="Subject"
//                   className='contact-inp' />
//               </div>
//               <div>
//                 <textarea
//                   name="text"
//                   cols={30}
//                   rows={7}
//                   value={text}
//                   onChange={handleInputChange}
//                   className='contact-textarea'
//                   placeholder="Message">
//                 </textarea>
//               </div>
//               <div>
//               <input
//                   name="submitsubject"
//                   type="text"
//                   value={text}
//                   onChange={handleInputChange}
//                   placeholder="Send Message"
//                   className='contact-inp' />
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ContactInfo;

































// import React from 'react';
// import "../assets/global.css";
// import "../Pages/Contact.css";

// const ContactInfo = () => {
//     const [name, setName] = useState("Name");
//   const [email, setEmail] = useState("Email");
//   const [subject, setSubject] = useState("Subject");
//   const [text, setText] = useState("Textarea");
 

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     switch (name) {
//       case 'name':
//         setName(value);
//         break;
//       case 'email':
//         setPhone(value);
//         break;
//       case 'subject':
//         setDate(value);
//         break;
//       case 'textarea':
//         setTime(value);
//         break;
//       default:
//         break;
//     }
//   }

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     alert(`Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nText: ${textarea}`);
//   }
 

//     return(
//         <div className='contact'>
//             <div className='contact-container container'>
//                 <div className='contanct-list'>
//                     <div className='contact-item'>
//                         <div className="contact-border">
//                             <p className='contact-text'>Address: 198 West 21th Street, Suite 721 New York NY 10016</p>
//                         </div>
//                         <div className="contact-border">
//                             <p className='contact-text'>Phone: + 1235 2355 98</p>
//                         </div>
//                         <div className="contact-border">
//                             <p className='contact-text'>Email: info@yoursite.com</p>
//                         </div>
//                         <div className="contact-border">
//                             <p className='contact-text'>Website yoursite.com</p>
//                         </div>
//                     </div>
//                     <div className='contact-item>'>
//                         <form onSubmit={handleSubmit} className='contact-form'>
//                             <label>
//                                   <input
//                                     name="name"
//                                     type="text"
//                                     value={name}
//                                     onChange={handleInputChange}
//                                     placeholder="Your Name" 
//                                     className='contact-inp' />
//                                 </label>
//                                 <label>
//                                   <input
//                                     name="email"
//                                     type="email"
//                                     value={email}
//                                     onChange={handleInputChange}
//                                     placeholder="Your Email" 
//                                     className='contact-inp'/>
//                                 </label>
//                                 <label>
//                                   <input
//                                     name="text"
//                                     type="text"
//                                     value={subject}
//                                     onChange={handleInputChange}
//                                     placeholder="Subject" 
//                                     className='contact-inp'/>
//                                 </label>
//                                 <label>
//                                   <textarea cols={30} rows={7} className='contact-textarea'placeholder="Message">
//                                     </textarea>
//                                 </label>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default ContactInfo;