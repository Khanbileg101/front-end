import { useState } from "react";

export default function Home() {
    const [grid, setGrid] = useState(true);

    const data = [
        {
            id: 1,
            title: "Test 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec ex sit amet purus hendrerit iaculis eu vel sem. Vivamus vitae tristique libero, eget tincidunt diam. Nulla a tempor purus, nec euismod velit. Nam bibendum lacinia lacus, et tempus mauris vehicula vitae. Vivamus justo tortor, laoreet sit amet arcu sed, pulvinar imperdiet diam. Mauris aliquet eget erat vitae laoreet. Donec eu aliquet nisl.",
        },

        {
            id: 2,
            title: "Test 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec ex sit amet purus hendrerit iaculis eu vel sem. Vivamus vitae tristique libero, eget tincidunt diam. Nulla a tempor purus, nec euismod velit. Nam bibendum lacinia lacus, et tempus mauris vehicula vitae. Vivamus justo tortor, laoreet sit amet arcu sed, pulvinar imperdiet diam. Mauris aliquet eget erat vitae laoreet. Donec eu aliquet nisl.",
        },

        {
            id: 3,
            title: "Test 3",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nec ex sit amet purus hendrerit iaculis eu vel sem. Vivamus vitae tristique libero, eget tincidunt diam. Nulla a tempor purus, nec euismod velit. Nam bibendum lacinia lacus, et tempus mauris vehicula vitae. Vivamus justo tortor, laoreet sit amet arcu sed, pulvinar imperdiet diam. Mauris aliquet eget erat vitae laoreet. Donec eu aliquet nisl.",
        }
    ]
    return(
      <div className="p-6 max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold">Нийтлэлүүд</h1>
            <button onClick={() => setGrid}></button>
        </div>
      </div>
    );
}