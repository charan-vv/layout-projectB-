import React from "react";
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
 
export const CountryDropDown = ({value, onChange, disabled }) => {
    return (
        <div className="textfield">
            <label className="form-label" htmlFor="Country">Country</label>
            <CountryDropdown
                className="form-select"
                id="Country"
                name="country"
                value={value}
                onChange={onChange}
                disabled={disabled}
 
            />
        </div>
    );
};
 
export const StateDropDown = ({ name,country, value, onChange, disabled }) => {
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