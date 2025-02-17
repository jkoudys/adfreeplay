import React, { useState } from 'react';

const WheelOfLetters = () => {
    const [letters, setLetters] = useState(['A', 'B', 'C', 'D', 'E', 'F', 'G']);
    const [input, setInput] = useState('');
    const [words, setWords] = useState([]);

    const handleInputChange = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input) {
            setWords([...words, input]);
            setInput('');
        }
    }

    return (
        <div>
            <div className="wheel">
                {letters.map((letter, index) => (
                    <div key={index} className="letter">{letter}</div>
                ))}
            </div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={input} onChange={handleInputChange} />
                <button type="submit">Submit</button>
            </form>
            <div className="words">
                {words.map((word, index) => (
                    <div key={index} className="word">{word}</div>
                ))}
            </div>
        </div>
    );
}

export default WheelOfLetters;