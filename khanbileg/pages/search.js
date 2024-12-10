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

export default function Users() {
    const [users, setsUsers] = useState(usersdata);
    const [search, setSearch] = useState(" ");

   const filteredUsers = users.filter((user) =>
    user.Name.toLowerCase().includes(search.toLowerCase())
   );

   console.log("search", search);
   console.log("filtered", filteredUsers);

   return(
    <div className="min-h-screen bg-gray-100 p-8">
        <h1 className="text-2xl font-bold mb-4 text-center">
            Хэрэглэгчийн жагсаалт
        </h1>
        <div className="mb-6">
            <input 
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Хэрэглэгчийн нэрээр хайна уу ..."
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
        </div>
        <div className="grid gap-4">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <div
              key={user.id}
              className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center"
            >
              <div>
                <p className="text-lg font-medium">{user.name}</p>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">Хэрэглэгч олдсонгүй.</p>
        )}
        </div>
    </div>
   )
}