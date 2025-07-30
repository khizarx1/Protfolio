import React from 'react'
import profileImg from '../../../assets//images/profile.JPG'

function Profilepic({ customClass }) {
    return (
        <div className={`p-2 rounded-full border-4 border-white bg-[#0AF9F4] ${customClass}`}
            style={{boxShadow: `0 0 50px #0AF9F4`}}
        >
            <img src={profileImg} alt="profile photo"
                className='w-full h-full object-right-top object-cover rounded-full'
            />
        </div>
    )
}

export default Profilepic