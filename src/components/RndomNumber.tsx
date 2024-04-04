import { useState } from "react";

const RndomNumber = () => {
    const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 10));
    return randomNumber
}

export default RndomNumber