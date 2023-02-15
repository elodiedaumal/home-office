import React from 'react';
import styled from 'styled-components';

const Companies = ({ companies }) => {
  return (
    <div>
      <Select
        name='companies'
        id='companies'
        value={companies}
        // onChange={handleChange}
        className='form-input'
      >
        {companies.map((company, index) => {
          return <option value={company}>{company}</option>;
        })}
      </Select>
    </div>
  );
};

export default Companies;

const Select = styled.select`
  background: #f1f5f8;
  border: none;
  height: 2rem;
  padding: 0.5rem;
  letter-spacing: 1px;
  font-size: 1rem;
  cusor: pointer;
`;
