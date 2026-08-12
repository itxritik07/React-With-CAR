import React, { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

const Appp = () => {
    const [length, setLength] = useState(8);
    const [numAllowed, setNumAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [password, setPassword] = useState("");


    const passRef = useRef(null);

    const passwordGenerator = useCallback(() => {
        let pass = "";
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        if (numAllowed) str += "0123456789"
        if (charAllowed) str += "!@#$%^&*()_+-=[]{}|;:,.<>?"

        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(char)
        };
        setPassword(pass);
    }, [length, numAllowed, charAllowed, setPassword]);

    const copyPassToClipBoard = useCallback(() => {
        passRef.current?.select()
        passRef.current?.setSelectionRange(0, 50)
        window.navigator.clipboard.writeText(password)
    }, [password]);

    useEffect(() => {
        passwordGenerator()
    }, [length, numAllowed, charAllowed, passwordGenerator]);


    return (
        <>
            <div className='text-center px-4 py-5 my-8 rounded-lg w-full max-w-200 mx-auto  bg-[#612D53] shadow-xl/20'>
                <h1 className='text-[#F3F4F4] text-4xl font-bold mb-3'>Password Generator</h1>
                <div className='flex items-center rounded-lg overflow-hidden mb-4 '>
                    <input
                        className='outline-none bg-white py-1 px-3 w-full text-[#612D53]'
                        type="text"
                        placeholder='password'
                        value={password}
                        readOnly
                        ref={passRef}
                    />
                    <button
                        className='bg-[#013e37] text-white px-4 py-1 cursor-pointer   hover:animate-pulse '
                        onClick={copyPassToClipBoard}
                    >
                        copy
                    </button>
                </div>

                <div className="flex justify-center items-center text-sm gap-x-4 bg-[#853953] p-2 rounded-md">
                    <div className="flex items-center gap-x-1 ">
                        <input
                            className='cursor-pointer '
                            type="range"
                            min={8}
                            max={50}
                            value={length}
                            onChange={(e) => { setLength(e.target.value) }}
                        />
                        <label className='text-white font-semibold'>Length: ({length})</label>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <input
                            type="checkbox"
                            defaultChecked={setNumAllowed}
                            id='numberIput'
                            onChange={() => {
                                setNumAllowed((prev) => !prev)
                            }}
                        />
                        <label className='text-white font-semibold' htmlFor="numberInput">Numbers</label>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <input
                            type="checkbox"
                            defaultChecked={charAllowed}
                            id='characterInput'
                            onChange={() => {
                                setCharAllowed((prev) => !prev)
                            }}
                        />
                        <label className='text-white font-semibold' htmlFor="characterInput">Characters</label>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Appp
