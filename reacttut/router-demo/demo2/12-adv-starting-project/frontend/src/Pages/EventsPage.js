

import { json, useLoaderData } from "react-router";
import EventsList from "../components/EventsList";

function EventsPage() {
  const data=useLoaderData();
  if (data.isErrror){
    return <p>{data.message}</p>
  }
    const events=data.events;
  
return <EventsList events={events} />;
  
  
}

export default EventsPage;
export async function loader() {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // return{ isError: true, message:"could not fetch events."}
    throw json({message: "events not available"},{status:500,});
  } else { 
    return response;
  }
}
