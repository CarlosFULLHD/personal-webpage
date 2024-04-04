import { useEffect, useState } from 'react';

const CountdownTimer = () => {
  const targetDate = new Date('2024-04-30T00:00:00');
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const initialTimeLeft = targetDate.getTime() - new Date().getTime();
    setTimeLeft(initialTimeLeft);

    const interval = setInterval(() => {
      setTimeLeft(targetDate.getTime() - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
<div className=""> 
    <span className='font-bold text-xl'>
      {days}d {hours}h {minutes}m {seconds}s
    </span>  
</div>
  );
};

export default CountdownTimer;