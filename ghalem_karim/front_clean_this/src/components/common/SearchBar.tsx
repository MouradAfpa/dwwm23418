import React, { useState } from 'react';

const SearchBox: React.FC = () => {
  const [value, setValue] = useState<string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className="form-control">
      <input
        type="text"
        placeholder="recherche"
        className="input input-bordered w-full max-w-xs"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBox;