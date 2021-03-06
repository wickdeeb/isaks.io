import React, { ChangeEvent } from 'react';

interface Props {
  input: string;
  setInput: Function;
}

const Input: React.FC<Props> = ({ input, setInput }) => {
  return (
    <div className='input-container'>
      <textarea
        value={input}
        placeholder={`console.log('paste code here...')`}
        onChange={(evt: ChangeEvent<HTMLTextAreaElement>) =>
          setInput(evt.target.value)
        }
      />
    </div>
  );
};

export default Input;
