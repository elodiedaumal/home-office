import React from 'react';
import styled from 'styled-components';

const Companies = ({ companies }) => {
  return (
    <div>
      <form>
        <label htmlFor='companies'></label>
        <Select name='companies' id='companies'>
          {companies.map((company, index) => {
            return <option value={company}>{company}</option>;
          })}
        </Select>
      </form>
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
