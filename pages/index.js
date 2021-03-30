import {getFeaturedEvents} from "../dummy-data";
import EvenList from "../components/Events/EventList";

export default function Home() {
    const featuredEvent = getFeaturedEvents();
    return (
        <div>
            <EvenList items={featuredEvent}/>
        </div>
    )
}
