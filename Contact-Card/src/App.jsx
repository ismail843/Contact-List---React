import React, { useState } from "react";
import Card from "./assets/components/Card";

const App = () => {
  const [first, setFirst] = useState("");
  const [gender, setGender] = useState("");
  const [color, setColor] = useState("");
  const [animal, setAnimal] = useState("");
  const [alluser, setAlluser] = useState([]);

  const SubmitHandler = (e) => {
    e.preventDefault();
    const olduser = [...alluser];
    olduser.push({ first, gender, color, animal });
    console.log(olduser);

    setAlluser(olduser);
  };
  const DeleteHandler = (idx)=>{
    // console.log("deleted");
    const copyuser = [...alluser]
    copyuser.splice(idx,1)
    setAlluser(copyuser)
    

  }

  return (
    <div className="min-h-screen bg-gray-100 w-full items-center justify-center ">
      <form
        onSubmit={SubmitHandler}
        className="bg-white p-6 rounded-xl shadow-lg 
                   w-full max-w-full grid grid-cols-2 gap-4"
      >
        <input
          value={first}
          onChange={(e) => {
            setFirst(e.target.value);
          }}
          type="text"
          placeholder="Enter Name"
          className="col-span-2 px-4 py-2 border rounded-md 
                     text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          value={gender}
          onChange={(e) => {
            setGender(e.target.value);
          }}
          type="text"
          placeholder="Enter Gender"
          className="px-4 py-2 border rounded-md 
                     text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          value={color}
          onChange={(e) => {
            setColor(e.target.value);
          }}
          type="text"
          placeholder="Favorite Color"
          className="px-4 py-2 border rounded-md 
                     text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          value={animal}
          onChange={(e) => {
            setAnimal(e.target.value);
          }}
          type="text"
          placeholder="Favorite Animal"
          className="col-span-2 px-4 py-2 border rounded-md 
                     text-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          type="submit"
          className="col-span-2 bg-blue-600 text-white text-lg 
                     py-2 rounded-md hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>

      <div
        className="
  min-h-screen bg-gray-100 p-6
  grid gap-6
  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
"
      >
        {alluser.map(function (elem, idx) {
          return (
            <div className="bg-red-400  p-4 h-65 text-center flex flex-wrap w-60  text-2xl rounded-2xl ">
              <h1 className="w-46 h-10 underline text-black-600  text-center">
                {elem.first}
              </h1>
              <h2 className="w-46 h-10 underline text-black-600 text-center">
                {elem.gender}
              </h2>
              <h2 className="w-46 h-10 underline text-black-600 text-center">
                {elem.color}
              </h2>
              <h2 className="w-46 h-10 underline text-black-600 text-center">
                {elem.animal}
              </h2>
              <button 
              onClick={()=>{
                DeleteHandler()
              }}
              className="bg-red-600 text-center w-28 rounded-2xl active:scale-95 text-white">
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
