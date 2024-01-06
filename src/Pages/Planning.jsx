import Notifcompo from "../Components/Notifcompo2";
import pfp from "../assets/Profile.png"
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import Navbar from "../Components/Navbar";

const planning = () => {
    const notificationsData = [
        { pfp : pfp , name: "Hello Heloo", date: "01/06/2024", heure: "10:30 AM" },
        { pfp : pfp , name: "Hello Heloo", date: "01/07/2024", heure: "10:30 AM" },
        { pfp : pfp , name: "Hello Heloo", date: "01/08/2024", heure: "10:30 AM" },
        { pfp : pfp , name: "Hello Heloo", date: "12/20/2000", heure: "10:30 AM" },
        { pfp : pfp , name: "Hello Heloo", date: "12/20/2000", heure: "10:30 AM" },
        { pfp : pfp , name: "Hello Heloo", date: "12/20/2000", heure: "10:30 AM" },
        { pfp : pfp , name: "Hello Heloo", date: "12/20/2000", heure: "10:30 AM" },
        { pfp : pfp , name: "Hello Heloo", date: "12/20/2000", heure: "10:30 AM" },
        { pfp : pfp , name: "Hello Heloo", date: "12/20/2000", heure: "10:30 AM" },
        { pfp : pfp , name: "Hello Heloo", date: "12/20/2000", heure: "10:30 AM" },
        { pfp : pfp , name: "Hello Heloo", date: "12/20/2000", heure: "10:30 AM" },
        { pfp : pfp , name: "Hello Heloo", date: "12/20/2000", heure: "10:30 AM" },
    ];

    const localizer = momentLocalizer(moment);

    const events = notificationsData.map((event, index) => ({
        id: index + 1,
        title: event.name,
        start: new Date(`${event.date} ${event.heure}`),
        end: new Date(`${event.date} ${event.heure}`),
    }));

    return ( 
        <>
            <div className="h-[100vh] flex flex-col">
                <Navbar></Navbar>

                <div className="px-[4vw] h-full w-full flex-1 flex flex-row items-center justify-evenly">
                    <div className="w-[50vw] p-4">
                        <h1 className="text-5xl font-bold mb-10 px-3">Rendez-vous Prochains</h1>

                        <div className="overflow-auto h-[40vh] px-3 py-2">
                            {notificationsData.map((notification, index) => (
                                <Notifcompo
                                key={index}
                                pfp={notification.pfp}
                                name={notification.name}
                                date={notification.date}
                                heure={notification.heure}
                                />
                            ))}
                        </div>

                        <div className="bg-[#00083E] mx-3 mt-5 w-[25vw] h-12 rounded-xl p-3">
                            <p className="text-[#FFFFFF] text-center">Ajouter un Rendez-vous</p>
                        </div>
                    </div>

                    <div className="">
                    <Calendar
                        localizer={localizer}
                        events={events}
                        startAccessor="start"
                        endAccessor="end"
                        style={{ height: 500 }}
                    />
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default planning;