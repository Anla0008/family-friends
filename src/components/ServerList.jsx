import ClientList from "./ClientList";

const ServerList = async () => {
    const data = await fetch("https://api.petfinder.com/v2/animals", {
        headers: {
            Authorization: `Bearer ${process.env.API_TOKEN}`,
        },
    });
    const animals = await data.json();
    console.log(animals);

    return <ClientList data={animals}></ClientList>;
};

export default ServerList;