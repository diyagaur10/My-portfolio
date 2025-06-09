import { ChangeEvent } from 'react';

interface BaseLabelInputProps {
  labelText: string;
  placeholderText: string;
  value?: string;
}

interface TextInputProps extends BaseLabelInputProps {
  textarea?: false;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

interface TextAreaProps extends BaseLabelInputProps {
  textarea: true;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export type LabelInputProps = TextInputProps | TextAreaProps;

const LabelInput = ({
  labelText,
  placeholderText,
  textarea,
  value,
  onChange,
}: LabelInputProps) => { // `onChange` is now correctly typed based on `textarea`
  return (
    <div className="flex flex-col gap-2.5 flex-1 w-full">
      <label
        htmlFor={placeholderText}
        className="text-textPrimary font-medium"
      >
        {labelText}
      </label>
      {textarea ? (
        <textarea
          id={placeholderText}
          rows={9}
          placeholder={placeholderText}
          value={value}
          onChange={onChange} // onChange is (event: ChangeEvent<HTMLTextAreaElement>) => void here
          className="bg-accent rounded-lg py-4 px-5 text-textPrimary outline-none
            resize-none placeholder:text-textSecondary placeholder:font-medium"
        />
      ) : (
        <input
          type="text"
          id={placeholderText}
          placeholder={placeholderText}
          value={value}
          onChange={onChange} // onChange is (event: ChangeEvent<HTMLInputElement>) => void here
          className="bg-accent rounded-lg py-4 px-5 text-textPrimary outline-none
            placeholder:text-textSecondary placeholder:font-medium"
        />
      )}
    </div>
  );
};

export default LabelInput;
