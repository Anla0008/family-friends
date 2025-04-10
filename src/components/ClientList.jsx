"use client";
import AnimalCard from "./AnimalCard";

const ClientList = ({ data }) => {
    console.log(data);
    return (
        <ul className="flex flex-wrap gap-3 my-4">
            {data.animals.map((animal) => (
                <AnimalCard key={animal.id} animal={animal}></AnimalCard>
            ))}
        </ul>
    );
};

export default ClientList;