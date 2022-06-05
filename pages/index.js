import Home from "../app/components/screens/home/Home";
import {API_URL} from "../app/constants";
import axios from "axios";


export default function HomePage(props) {
  return <Home {...props}/>
}

export const getStaticProps = async () => {

  const links = await axios.get(`${API_URL}/links`).then(({data}) => data)
  const me = await axios.get(`${API_URL}/me`).then(({data}) => data)

  return {
    props: {
      links, me
    },
    revalidate: 60
  }
}
