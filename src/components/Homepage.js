import React from 'react'
import { useEffect } from 'react'
import anime from '../anime.js'

function Homepage() {
    const text = ` "People who succeed have momentum. The more they succeed, the more they want to succeed and the more they find a way to succeed. Similarly, when someone is failing, the tendency is to get on a downward spiral that can even become a self-fulfilling prophecy." -Tony Robbins`
    useEffect(() => {
        const textDiv = document.querySelector('#text')
        textDiv.innerHTML = textDiv.textContent.replace(/\S/g,'<span>$&</span>')
        console.log(textDiv)
        const animation = anime.timeline({
            targets:'.text span',
            easeing: 'easeInOutExpo',
            loop: true
        })
        animation.add({
            rotate: ()=> anime.random(-360,360),
            translateX : ()=> anime.random(-500,500),
            translateY : () => anime.random(-500,500),
            duration: 5000,
            delay: anime.stagger(20)
        }).add({
            rotate: 0,
            translateX :0,
            translateY : 0,
            duration: 5000,
            delay: anime.stagger(20)
        })
    }, [])
    return (
        <>
            <div className='homepage'>
                <div className="text" id='text'>
                    {text}
                </div>
            </div>
            <div className='author'>@Rootrsk</div>
        </>
    )
}

export default Homepage
