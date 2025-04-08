import ClientList from "./ClientList";

const ServerList = async () => {
    const data = await fetch("https://api.petfinder.com/v2/animals", {
        headers: {
            Authorization: `Bearer ${process.env.API_TOKEN}`,
        },
    });
    const animals = await data.json();

    console.log("Data fra API i ServerList:", animals); // Log for at tjekke hvad vi modtager fra API'et

    return <ClientList data={animals} />;
};

export default ServerList;