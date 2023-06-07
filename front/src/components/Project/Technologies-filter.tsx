import React from "react";
import Select from "react-select";

interface MultiSelectProP {
  options: any[];
}

const TechnologiesFilter = ({ options }: MultiSelectProP) => {
  const [selectedOptions, setSelectedOptions] = React.useState([]);

  const handleChange = (selected: any) => {
    setSelectedOptions(selected);
  };

  return (
    <Select
      options={options}
      isMulti
      value={selectedOptions}
      onChange={handleChange}
      placeholder="Choose technologies"
    />
  );
};

export default TechnologiesFilter;
