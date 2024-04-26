import React from "react";
import { RegionDropdown } from 'react-country-region-selector';
 

 
export const StateDropDown = ({ country, value, onChange, disabled }) => {
    return (
        <div className="textfield">
            <label className="form-label" htmlFor="State">State</label>
            <RegionDropdown
                className="form-select"
                id="State"
                name="state"
                country={country}
                value={value}
                onChange={onChange}
                disabled={disabled}
            />
        </div>
    );
};