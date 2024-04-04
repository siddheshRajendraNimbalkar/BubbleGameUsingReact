import Main from './components/Main'
import Boll from './components/Boll'
import { useEffect, useState } from 'react';

const App = () => {
  const [boxval, setboxval] = useState<number>(0)
  const [boxran, setBoxran] = useState<number>(Math.floor(Math.random() * 10));
  const [score, setScore] = useState<number>(0);
  const [time, setTime] = useState(60);
  const [game, setGame] = useState(true)

  useEffect(() => {
    if (boxran == boxval) {
      setScore(prevScore => prevScore + 10);
      setBoxran(Math.floor(Math.random() * 10));
    }
  }, [boxran, boxval])


  useEffect(() => {
    if (time == 0) {
      { `${setTime(0)}` }
      setGame(false)
    } else {
      const timer = setTimeout(() => {
        { `${setTime(pretime => pretime - 1)}` }
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [time])

  return (
    <div className='bg-zinc-900 h-screen w-full flex justify-center items-center'>
      <div className='h-4/5 w-5/6 bg-zinc-300 rounded-[15px]'>
        <Main boxval={boxval} boxran={boxran} setBoxran={setBoxran} setScore={setScore} score={score} setTime={setTime} time={time} />
        <div className="p-4">
          {game ?
            <Boll setboxval={setboxval} boxran={boxran} /> :
            <div className='h-96 w-full flex justify-center items-center text-8xl font-bold'>
              Game Over
            </div>
          }

        </div>
        <div className=""></div>
      </div>
      <button onClick={() => { alert(boxval) }}>jdcdsjksc</button>
    </div>

  )
}

export default App