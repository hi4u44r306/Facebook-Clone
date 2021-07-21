import React from 'react';
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';

function Feed() {
    return (
        <div className="feed"> 
            <StoryReel/>
            <MessageSender/>
            
            <Post
                profilePic="https://w7.pngwing.com/pngs/464/324/png-transparent-github-fork-source-code-microsoft-githuboctocat-carnivoran-computer-wallpaper-fictional-character.png"
                message='WOW this works'
                timestamp='This is timestamp'
                username='Victor'
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2M4GdfJERkdmJeI3Tpn10MN1bwEaHtkGl7A&usqp=CAU"
            />
            <Post
                profilePic="https://w7.pngwing.com/pngs/464/324/png-transparent-github-fork-source-code-microsoft-githuboctocat-carnivoran-computer-wallpaper-fictional-character.png"
                message='WOW this works'
                timestamp='This is timestamp'
                username='Victor'
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2M4GdfJERkdmJeI3Tpn10MN1bwEaHtkGl7A&usqp=CAU"
            />
        </div>
    )
}

export default Feed
