import React from 'react';

const MySwitch = ({ checked, onChange, disabled }) => {
  return (
    <div>
      <div className="form-check form-switch d-flex align-items-center" style={{width:'50%', margin: '25px auto'}}>
        <input
          className="form-check-input form-check-input-custom"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
          style={{width:'3em', marginTop: '0'}}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
        />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{color:'#33CCCC', margin:'10px'}}>
          Показывать только избранные
        </label>
      </div>
    </div>
  );
};

export default MySwitch;
