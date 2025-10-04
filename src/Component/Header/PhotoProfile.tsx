import React from 'react';


type Props = {
  urlImage: string;
};

export default function PhotoProfile({ urlImage, }: Props): React.JSX.Element {

    const baseClasses = 'flex items-center justify-center w-14 h-14 rounded-full transition-all duration-200 ';
		const hoverClasses = `hover:bg-OrangeV hover:cursor-pointer`;

  return (
    <div className={`${baseClasses} ${hoverClasses}`}>
      <img src={urlImage} alt="User Photo" className="w-12 h-12 rounded-full" />
    </div>
  );
}     