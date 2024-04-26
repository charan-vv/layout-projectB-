import React, { useState } from 'react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
 
function PhoneNumberList({ onPhoneNumberChange }) {
  const [PhoneNumber, setPhone] = useState('');
 
 
  const handleChange = (value, countryData) => {
    console.log('Value:', value);
    console.log('Country Data:', countryData);
 
    if (countryData) {
      const { inputValue } = countryData;
 
      const [dialCode, ...numberParts] = inputValue.split(" ");
      console.log("num", numberParts)
      const number = numberParts.join("").trim();
 
      setPhone(value);
 
      const PhoneNumber = {
        country_code: dialCode,
        number: number.replace(/[^A-Z0-9]+/ig, "")
      };
 
      console.log("data", PhoneNumber);
 
      onPhoneNumberChange(PhoneNumber);
    }
  };
  return (
    <div>
      <PhoneInput
        defaultCountry="in"
        value={PhoneNumber}
        onChange={handleChange}
      />
    </div>
  );
}
 
export default PhoneNumberList;