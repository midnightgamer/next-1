export async function getAllEvent() {
    const response = await fetch('https://delte-d402a-default-rtdb.firebaseio.com/events.json');
    const data = await response.json();
    const events = [];

    for (const key in data) {
        events.push({id: key, ...data[key]})
    }

    return events;
}

export async function getFeaturedEvents() {
    const allEvents = await getAllEvent();
    return allEvents.filter((event) => event.isFeatured);
}
