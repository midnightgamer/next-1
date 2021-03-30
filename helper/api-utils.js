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


export async function getEventById(id) {
    const allEvents = await getAllEvent();
    return allEvents.find((event) => event.id === id);
}


export async function getFilteredEvents(dateFilter) {

    const allEvents = await getAllEvent();
    const { year, month } = dateFilter;
    let filteredEvents = allEvents.filter((event) => {
        const eventDate = new Date(event.date);
        return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });

    return filteredEvents;
}
