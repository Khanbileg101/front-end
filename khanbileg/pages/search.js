import { useState } from "react";

const usersdata = [
    {id: 1, Name: "Amartuvshin",email: "medhgu",},
    {id: 2, Name: "Anar", email: "medhgu"},
    {id: 3, Name: "Anar-Erdene", email: "medhgu"},
    {id: 4, Name: "Batmend", email: "medhgu"},
    {id: 5, Name: "Tugs-Asralt", email: "medhgu"},
    {id: 6, Name: "B.Temuujin", email: "medhgu"},
    {id: 7, Name: "SH.Temuujin", email: "medhgu"},
    {id: 8, Name: "E.Temuujin", email: "medhgu"},
    {id: 9, Name: "Temuulen", email: "medhgu"},
    {id: 10, Name: "Tergel", email: "medhgu"},
    {id: 11, Name: "Khanbileg", email: "khanbileg7@gmail.com"},
    {id: 12, Name: "Tselmeg", email: "medhgu"},
    {id: 13, Name: "Choi-odser", email: "medhgu"},
    {id: 14, Name: "Shine-Erdene", email: "medhgu"},
    {id: 15, Name: "Enkhjav", email: "medhgu"},
    {id: 16, Name: "Enkhtugs", email: "medhgu"},
    {id: 17, Name: "Enkhtugs", email: "medhgu"},
    {id: 18, Name: "Emily", email: "medhgu"},
    {id: 19, Name: "Dalaisuren", email: "medhgu"},
    {id: 20, Name: "Ochir-Erdene", email: "medhgu"},
]

export default function Home() {
    const [users, setsUsers] = useState(usersdata);
    const [search, setSearch] = useState(" ");

   const filteredUsers = users.filter((user) =>
    user.Name.toLowerCase().includes(search.toLowerCase())
   );

   console.log("search", search);
   console.log("filtered", filteredUsers);

   
}