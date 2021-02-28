import React from 'react'
import { useEffect } from 'react'
import anime from '../anime.js'

function Homepage() {
    const text = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum ex voluptatibus consequatur assumenda sequi     saepe ut eius earum minus deserunt expedita temporibus laboriosam delectus ipsa ducimus, necessitatibus veritatis animi quod.
        Asperiores amet similique molestias est, repellendus accusamus, quibusdam illo sed voluptate voluptates delectus explicabo, ipsum eius. Excepturi enim consequuntur labore magni ea cupiditate aperiam, quis fugiat amet unde ut facilis?
        A voluptate doloremque consequuntur commodi odit fugiat, rem vel soluta ipsa eius nihil! Fugiat nesciunt fuga perferendis repudiandae error, quae odio, dolorum id suscipit soluta accusantium adipisci quis dolorem accusamus?`
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
        <div className='homepage'>
            <div className="text" id='text'>
                {text}
            </div>
        </div>
    )
}

export default Homepage
