import { useEffect, useContext, useState } from 'react'
// import { TwitterContext } from '../../context/TwitterContext'
import Post from '../Post'

const tweets  = [{
    displayName:'Shoab',
    username: 'Shoab02',
    avatar:'image.jpeg',
    text:'gm',
    timestamp: '2022-05-31T01:30:05Z',
},
{
    displayName:'Shoab',
    username: 'Shoab02',
    avatar:'image.jpeg',
    text:'gm',
    timestamp: '2022-05-31T01:30:05Z',
},
{
    displayName:'Shoab',
    username: 'Shoab02',
    avatar:'image.jpeg',
    text:'gm',
    timestamp: '2022-05-31T01:30:05Z',
}

]


const style = {
  wrapper: `no-scrollbar`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
}


const ProfileTweets = () => {



    return (
        <div className={style.wrapper}>
            {tweets?.map((tweet, index) => (
                <Post 
                    key={index}
                    displayName="Mohammed Shoab"
                    userName={`${tweet.username.slice(0,4,)}...${tweet.username.slice(41)}`}
                    text={tweet.tweet}
                    avatar={tweet.avatar}
                    timestamp={tweet.timestamp}
                />

            ))}
        </div>
    )

}

export default ProfileTweets
