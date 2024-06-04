import React, { useState } from 'react'

function SelectOption({SelectedOption,name,options,selected}) {
    const [selectedOption, setSelectedOption] = useState(options[selected]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setIsDropdownOpen(false);
        SelectedOption({...option,...{name:name}})
      };
  return (
    <div>
    <div className="relative">
        <button
        type="button"
        className="relative w-full cursor-pointer rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-600 sm:text-sm sm:leading-6"
        aria-haspopup="listbox"
        aria-expanded={isDropdownOpen}
        aria-labelledby="listbox-label"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
        <span className="flex items-center">
            <span className="ml-3 block truncate">{selectedOption.label}</span>
        </span>
        <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
            <svg
            className="h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            >
            <path
                fillRule="evenodd"
                d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                clipRule="evenodd"
            />
            </svg>
        </span>
        </button>
        

        {isDropdownOpen && (
        <ul
            className="absolute z-10 mt-1 max-h-56 w-max overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5  focus:outline-none sm:text-sm"
            tabIndex="-1"
            role="listbox"
            aria-labelledby="listbox-label"
            aria-activedescendant="listbox-option-3"
        >
            {options.slice(1).map((option) => (
            <li
                key={option.id}
                className="text-gray-900 hover:bg-gray-200 relative cursor-default select-none py-2 pl-3 pr-9"
                id={`listbox-option-${option.id}`}
                role="option"
                aria-checked={option.label === selectedOption}
                onClick={() => handleOptionSelect(option)}
            >
                <div className="flex items-center">
                <span className="font-normal ml-3 block truncate">
                    {option.label}
                </span>
                </div>
            </li>
            ))}
        </ul>
        )}
    </div>
</div>
  )
}

export default SelectOption