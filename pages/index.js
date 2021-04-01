import {getFeaturedEvents} from "../helper/api-utils";
import EvenList from "../components/Events/EventList";
import Head from "next/head";

function Home(props) {
    return (
        <div>
            <Head>
                <title>NextJS</title>
            </Head>
            <EvenList items={props.events}/>
        </div>
    )
}


export async function getStaticProps() {
    const featuredEvent = await getFeaturedEvents();
    return {
        props: {
            events: featuredEvent
        },
        revalidate: 1800
    }
}

export default Home;
