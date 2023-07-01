import React from "react";
import Select from "react-select";

interface MultiSelectProP {
  options: any[];
  onFilterProjects: Function;
}

const TechnologiesFilter = ({ options, onFilterProjects }: MultiSelectProP) => {
  const [selectedOptions, setSelectedOptions] = React.useState([]);

  const setFilterHandler = (selected: any) => {
    setSelectedOptions(selected);
    onFilterProjects(selected);
  };

  return (
    <Select
      id="select-technologies"
      options={options}
      isMulti
      value={selectedOptions}
      onChange={setFilterHandler}
      placeholder="Choose technologies"
    />
  );
};

export default TechnologiesFilter;
