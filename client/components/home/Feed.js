
import { BsStars } from 'react-icons/bs'
import TweetBox from './TweetBox'
import Post from '../Post'

const style = {
    wrapper: `flex-[2] border-r border-l border-[#38444d] overflow-y-scroll`,
    header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
    headerTitle: `text-xl font-bold`,
  }


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



function Feed() {
  
    return (
    <div className={`${style.wrapper} no-scrollbar`}>
        <div className={style.header}>
            <div className={style.headerTitle}>Home</div>
            <BsStars />

        </div>
        <TweetBox/>

        {tweets.map((tweet, index) => (
            <Post
                key = {index}
                displayName={tweet.displayName}
                userName={`${tweet.username.slice(0,4)}...${tweet.username | -4 }`}
                text={tweet.tweet}
                avatar={tweet.profileImage}
                timestamp={tweet.timestamp}
            />
        ))}
    </div>
    )
}



export default Feed
