import axios from "axios"
import { NextPage } from "next"
import NoResults from "../components/NoResults"
import VideoCard from "../components/VideoCard"
import { Video } from "../types"

export const getServerSideProps = async () => {

  const { data }  = await axios.get('http://localhost:3000/api/post')

  return {
    props: {
      videos: data
    }
  }
}

interface IProps {
  videos: Video[]
}

const Home: NextPage<IProps> = ({videos}) => {

  console.log('videos', videos)

  return(
    <div className="flex flex-col gap-10 videos h-full">
      {
        videos.length ? (
          videos.map((video: Video) => (
            <VideoCard post={video} key={video._id} />
          ))
        ) : (
          <NoResults text={'No Videos'} />
        )
      }
    </div>
  )
}

export default Home