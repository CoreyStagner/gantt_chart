import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import { client } from '../../utils/fetchWrapper';

const Checkbox = ({ children, ...props }) => (
  <label style={{ marginRight: '1em' }}>
    <input type="checkbox" {...props} />
    {children}
  </label>
);

export default function SelectField(config) {
  const [isClearable, setIsClearable] = useState(true);
  const [isSearchable, setIsSearchable] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isRtl, setIsRtl] = useState(false);

  const [options, setOptions] = useState(undefined);
  const [optionList, setOptionList] = useState(undefined);
  const [selectedOption, setSelectedOption] = useState(null);

  const { onChange } = config;

  /**
   * Pass the data back up to the parent if has the function
   * @param {HTMLEvent} e - The event object
   */
  const handleChange = (e) => {
    setSelectedOption(e.target.value);
    if (onChange) {
      onChange(e.target.value);
    }
  };

  useEffect(() => {
    client('data/project-user.json').then(
      (data) => {
        const { types } = data;
        const typesTuple = Object.entries(types);
        if (!typesTuple || !typesTuple.length) {
          console.log('No data found for options');
          return;
        }
        setOptions(data?.types);
        const list = [];
        typesTuple.map(([k, v]) => {
          const { label, id } = v;
          if (!label) {
            console.log('No label found for option');
            return;
          }
          list.push({
            label,
            value: `${id}-${label}`,
          });
        });
        setOptionList(list);
      },
      (error) => {
        console.error('Error: ', error);
      }
    );
  }, []);

  return (
    <>
      <select
        name="taskType"
        className="select_taskType"
        onChange={handleChange}
      >
        <option value="all">View All</option>
        {optionList?.map((option, i) => (
          <option key={i} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {/* Create standardized styles for the select field */}
      <style jsx>{`
        select.select_taskType {
          width: 100%;
          margin: 0;
        }
      `}</style>
    </>
  );
}
