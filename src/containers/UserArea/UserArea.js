import React, { useState } from 'react';

import InputField from 'components/InputField';
import Dropdown from 'components/Dropdown';
import User from 'components/User';

const UserArea = () => {
  const [select, setSelect] = useState(null);

  const handleSelectChange = (value) => {
    setSelect(value);
  };
  
  return (
    <div>
      <div>
        <InputField />
        <span>icon</span>
      </div>
      <div>
        <Dropdown options={[]} onChange={handleSelectChange} value={select} />
      </div>
      <div>
        {Array(20).fill(0).map((user, index) => <User key={index} />)}
      </div>
    </div>
  );
};

export default UserArea;
