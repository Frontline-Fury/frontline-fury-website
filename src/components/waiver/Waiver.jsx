import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import './Waiver.css';
import waiverimg from '../assests/waiverimg.jpg';

const Waiver = () => {
  return (
    <>
      <Navbar />
      <div className="waiver-container">
        <div className="waiver-image-wrapper">
          <img src={waiverimg} alt="waiverimg" />
          <h1 className="waiver-text">STANDARD WAIVER</h1>
        </div>

        <div className="waiver-content">
          <h2>FRONTLINE FURY STANDARD WAIVER OF RELEASE OF LIABILITY</h2>
          <h3>READ CAREFULLY</h3>
          <p>
            This waiver is intended for those players 18 years of age and older. For those players under 18 years of age needing parental or guardian approval, please use the button below. Upon agreement of these terms and conditions, your submission of the electronic form provided acts as your consent for our records and is valid until 12/31 of the current year.
          </p>
          <p>
            In consideration of Frontline Fury furnishing privately owned land to enable me to participate in Airsoft games and activities, I agree to the following:
          </p>
          <p>
            I fully understand and acknowledge that:
            <br />
            (a) Risks and dangers exist in my use of Airsoft equipment and my participation in Airsoft activities.
            <br />
            (b) My participation in such activities and/or use of such equipment may result in my injury, or illness including but not limited to bodily injury, disease, sprains, fractures, partial and/or total paralysis, eye injury, blindness, heat stroke, heart attack, death, or other ailments that could cause serious disability.
            <br />
            (c) These risks and dangers may be caused by the negligence of the officers or agents of Frontline Fury, the negligence of the participants, the negligence of others, accidents, breaches of contract, the forces of nature such as snakes, or other causes. These risks and dangers may arise from foreseeable or unforeseeable causes.
            <br />
            (d) By my participation in these activities and/or use of equipment, I assume all responsibility for any consequences.
          </p>
          <p>
            I hereby assume all risks and dangers and all responsibility for any losses and/or damages, whether caused in whole or in part by the negligence or other conduct of the officers and agents of Frontline Fury.
          </p>
          <p>
            I, on behalf of myself, my personal representatives, and my heirs, voluntarily agree to release, waive, discharge, hold harmless, defend, and indemnify Frontline Fury, its agents, officers, and property owners from any and all claims, actions, or losses for bodily injury, property damage, wrongful death, or loss of services which may arise out of my use of Airsoft equipment, facilities, or my participation in Airsoft activities.
          </p>
          <p>
            I understand that Frontline Fury reserves all rights to photographic and video footage. By participating in Frontline Fury events, I consent that my image may be captured in photographs and/or videos and utilized exclusively by Frontline Fury, with no compensation. Unauthorized use outside of Frontline Fury is prohibited without express permission.
          </p>
          <p>
            I hereby acknowledge that I will abide by Frontline Fury’s recommended Rules and Eye/Face Protection Systems.
          </p>
          <p>
            I have read, understood, and agree to abide by the posted Frontline Fury Rules and Policies, Player Conduct, and General Rules. I voluntarily submit my information with the understanding that it is a legally binding agreement.
          </p>
          <h3>THIS IS A RELEASE/HOLD HARMLESS AGREEMENT, READ BEFORE SIGNING:</h3>
          <p>
            I am 18 years of age or older and have executed this Agreement on the date of my form submission. By submitting the form, I declare that I have read, understood, and agree to Frontline Fury’s “Field Safety Rules, Player Conduct, and General Rules.”
          </p>
        </div>

        {/* Waiver Form Section */}
        <div className="waiver-form">
          <h2>Frontline Fury Waiver Form</h2>
          <form>
            {/* First Name, Last Name, DOB */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="first-name">First Name *</label>
                <input type="text" id="first-name" required />
              </div>
              <div className="form-group">
                <label htmlFor="last-name">Last Name *</label>
                <input type="text" id="last-name" required />
              </div>
              <div className="form-group">
                <label htmlFor="dob">Date of Birth *</label>
                <input type="date" id="dob" required />
              </div>
            </div>

            {/* Address (Full Width) */}
            <div className="form-group full-width">
              <label htmlFor="address">Address</label>
              <input type="text" id="address" />
            </div>

            {/* State, City, ZIP */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="city">City</label>
                <input type="text" id="city" />
              </div>
              <div className="form-group">
                <label htmlFor="state">State/Province</label>
                <select id="state">
                  <option>Select State</option>
                  <option value="state1">State 1</option>
                  <option value="state2">State 2</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="zip">Zip/Postal</label>
                <input type="text" id="zip" />
              </div>
            </div>

            {/* Phone & Email */}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input type="tel" id="phone" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input type="email" id="email" required />
              </div>
            </div>

            {/* Checkboxes for Agreement */}
            <div className="checkbox-group">
              <label>I acknowledge and comply to the following *</label>
              <div className="checkbox-item">
                <input type="checkbox" id="age" />
                <label htmlFor="age">I am 18 years or older</label>
              </div>
              <div className="checkbox-item">
                <input type="checkbox" id="rules" />
                <label htmlFor="rules">Player Rules and Policies</label>
              </div>
              <div className="checkbox-item">
                <input type="checkbox" id="conduct" />
                <label htmlFor="conduct">Player Conduct</label>
              </div>
              <div className="checkbox-item">
                <input type="checkbox" id="general" />
                <label htmlFor="general">General Rules</label>
              </div>
            </div>

            {/* Radio Buttons for Medical Condition */}
            <div className="radio-group">
              <label>I have a medical condition or concern *</label>
              <div className="radio-item">
                <input type="radio" id="yes" name="medical" value="yes" required />
                <label htmlFor="yes">Yes</label>
              </div>
              <div className="radio-item">
                <input type="radio" id="no" name="medical" value="no" required />
                <label htmlFor="no">No</label>
              </div>
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Waiver;
