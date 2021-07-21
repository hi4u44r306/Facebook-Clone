import React from 'react';
import './StoryReel.css';
import Story from './Story';


function StoryReel() {
    return (
        <div className='storyReel'>
            <Story
            image="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" 
            profileSrc="https://i.pinimg.com/originals/6b/aa/98/6baa98cc1c3f4d76e989701746e322dd.png" 
            title="Victor Hsu"/>
            <Story image="https://images.unsplash.com/photo-1508004526072-3be43a5005f6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHBpY3R1cmV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" profileSrc="https://i.pinimg.com/originals/6b/aa/98/6baa98cc1c3f4d76e989701746e322dd.png" title="Sunny Baby"/>
            <Story image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" profileSrc="https://i.pinimg.com/originals/6b/aa/98/6baa98cc1c3f4d76e989701746e322dd.png" title="Sunny Chen"/>
            <Story image="https://www.befunky.com/images/wp/wp-2014-08-milky-way-1023340_1280.jpg?auto=webp&format=jpg&width=1136&crop=16:9" profileSrc="https://i.pinimg.com/originals/6b/aa/98/6baa98cc1c3f4d76e989701746e322dd.png" title="Kezia"/>
            <Story image="https://media.macphun.com/img/uploads/customer/how-to/579/15349456005b7d69405aabf4.32904503.jpg?q=85&w=1340" profileSrc="https://i.pinimg.com/originals/6b/aa/98/6baa98cc1c3f4d76e989701746e322dd.png" title="Bew"/>
        </div>
    )
}

export default StoryReel
