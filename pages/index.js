import {getFeaturedEvents} from "../helper/api-utils";
import EvenList from "../components/Events/EventList";

function Home(props) {
    return (
        <div>
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
