import React from "react";

const Contact = (props) => {
  return (
    <div className="contact-card">
      <img src={`../img/${props.img}`} alt=""/>
	    <h3>{props.name}</h3>
      <div className="info-group">
        <img src="../img/phoneIcon.jpg" alt="" />
	      <p>{props.phone}</p>
      </div>
      <div className="info-group">
        <img src="../img/mailIcon.jpg" alt="" />
	      <p>{props.email}</p>
      </div>
    </div>
  )
}

export default Contact;