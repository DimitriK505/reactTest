import React from 'react'
import HelloWorld from '../Components/HelloWorld'

function Home(){
    return (
        <div>
            <h1 className="font-bold text-2xl">This si the home page</h1>
            <p>
                <HelloWorld name="Dimitrios K"/>
            </p>
        </div>
    )
}

export default Home