import ImageNotif from "../assets/Notifimage.png";
import Navbar from "../Components/Navbar";
import Notifcompo from "../Components/Notifcompo";

const Notifications = () => {
  // Array of notification information
  const notificationsData = [
    { titre: "Hello Heloo", date: "12/20/2000", heure: "10:30 AM" },
    { titre: "Hello Heloo", date: "12/20/2000", heure: "10:30 AM" },
    { titre: "Hello Heloo", date: "12/20/2000", heure: "10:30 AM" },
    { titre: "Hello Heloo", date: "12/20/2000", heure: "10:30 AM" },
    { titre: "Hello Heloo", date: "12/20/2000", heure: "10:30 AM" },
    { titre: "Hello Heloo", date: "12/20/2000", heure: "10:30 AM" },
    { titre: "Hello Heloo", date: "12/20/2000", heure: "10:30 AM" },
    { titre: "Hello Heloo", date: "12/20/2000", heure: "10:30 AM" },
    { titre: "Hello Heloo", date: "12/20/2000", heure: "10:30 AM" },
    { titre: "Hello Heloo", date: "12/20/2000", heure: "10:30 AM" },
    { titre: "Hello Heloo", date: "12/20/2000", heure: "10:30 AM" },
    { titre: "Hello Heloo", date: "12/20/2000", heure: "10:30 AM" },
  ];

  return (
    <>
      <div className="h-[100vh] flex flex-col">
        <Navbar></Navbar>

        <div className="px-[4vw] h-full w-full flex-1 flex flex-row items-center justify-evenly">
          <div className="w-full p-4">
            <h1 className="text-5xl font-bold mb-10">Notifications:</h1>

            <div className="overflow-auto max-h-[40vh] px-3 py-2">
              {notificationsData.map((notification, index) => (
                <Notifcompo
                  key={index}
                  titre={notification.titre}
                  date={notification.date}
                  heure={notification.heure}
                />
              ))}
            </div>
          </div>

          <div className="flex-shrink-0">
            <img
              className="hidden h-[35vw] rounded-md shadow-md sm:block"
              src={ImageNotif}
              alt="Notif Image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Notifications;
