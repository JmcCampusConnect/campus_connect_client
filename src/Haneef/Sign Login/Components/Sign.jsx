import React from 'react';

function Sign({ activeTab }) 
{
    return (
        <>
            {activeTab === 'Sign In' && (
                <div className='flex flex-col gap-4'>
                    <span>Sign In to Your Account</span>
                    <input></input>
                    <input></input>
                    <button></button>
                </div>
            )}
        </>
    )
}

export default Sign;