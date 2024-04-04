import { useEffect, useState } from 'react';
import RndomNumber from './RndomNumber';

const Boll = ({ setboxval , boxran }: { setboxval: any , boxran : Number}) => {
  const [BollValues, setBollValues] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const BollValue = ({ setboxval }: { setboxval: any }) => {
      return (
        <div
          className="h-10 w-10 bg-slate-900 text-white flex justify-center items-center rounded-full hover:bg-slate-800 cursor-pointer"
          onClick={(e) => {
            hell(e, setboxval);
          }}
        >
          <RndomNumber />
        </div>
      );
    };
    const bollArray = [];
    for (let i = 0; i < 140; i++) {
      bollArray.push(<BollValue key={i} setboxval={setboxval} />);
    }
    setBollValues(bollArray);
  }, [boxran]);

  return (
    <div className='flex gap-4 flex-wrap'>
      {BollValues}
    </div>
  );
};

const hell = (e: any, setboxval: any) => {
  const newValue = e.target.innerHTML;
  setboxval(newValue);
};



export default Boll;
