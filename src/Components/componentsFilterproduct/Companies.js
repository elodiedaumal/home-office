import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../../context';

const Companies = ({ companies }) => {
  const { setSelectCompany, selectCompany } = useGlobalContext();
  const selectcompany = (e) => {
    setSelectCompany(e.target.value);
  };

  return (
    <div>
      <form>
        <label htmlFor='companies'></label>
        <Select
          name='companies'
          id='companies'
          onChange={selectcompany}
          value={selectCompany}
        >
          {companies.map((company, index) => {
            return (
              <option key={index} value={company}>
                {company}
              </option>
            );
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
  font-size: 0.85rem;
  cusor: pointer;
`;
