import Scene from '@/components/Scene';
import React, { useEffect, useState } from 'react';
import 'tailwindcss/tailwind.css';

function Index() {
  const data = {
    message: 'Hello World Yo',
    devs: ['one', 'Two', 'Three', 'Four'],
    message1:
      'this is the second card of the code that is given here and this card looks good',
  };

  const [message, setMessage] = useState('Loading.....');
  const [message1, setMessage1] = useState();
  const [devs, setDevs] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:8080/api/home").then(
  //     response => response.json()
  //   ).then(
  //     data => {
  //       setMessage(data.message);
  //       setMessage1(data.message1);
  //       setDevs(data.devs);
  //     }
  //   );
  // }, []);

  return (
    <>
      <div className="flex flex-col bg-gradient-to-l from-orange-700 to-black min-h-screen py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row mt-12 mx-auto max-w-7xl">
          <div className="flex-1 text-white items-center mb-12 md:mb-0">
            <div>{data.message1}</div>
            <div className="max-w-full md:max-w-sm h-fit rounded-xl overflow-hidden shadow-lg mt-6 md:mt-20 mb-6 md:mb-10 bg-white hover:translate-x-5 hover:translate-y-5 hover:tracking-tight hover:duration-1000">
              <img
                className="w-full h-48 md:h-72 object-cover opacity-70 hover:opacity-100 mb-5 px-2 pt-2"
                src="https://cdn.pixabay.com/photo/2023/10/15/11/38/street-8316703_1280.jpg"
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-black">{data.message}</div>
                <p className="text-gray-700 text-base mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div className="flex flex-wrap justify-around">
                {data.devs.map((dev, index) => (
                  <div key={index} className="mb-2">
                    <span className="inline-block text-white bg-blue-500 hover:bg-blue-700 rounded-full px-4 py-2 text-sm font-bold">
                      #{dev}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex-1 text-white md:ml-12">
            <div>{data.message1}</div>
            <div className="max-w-full md:max-w-sm h-fit rounded-xl overflow-hidden shadow-lg mt-6 md:mt-20 mb-6 md:mb-10 bg-white hover:translate-x-5 hover:translate-y-5 hover:tracking-tight hover:duration-1000">
              <img
                className="w-full h-48 md:h-72 object-cover opacity-70 hover:opacity-100 mb-5 px-2 pt-2"
                src="https://cdn.pixabay.com/photo/2023/10/15/11/38/street-8316703_1280.jpg"
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-black">{data.message}</div>
                <p className="text-gray-700 text-base mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div className="flex flex-wrap justify-around">
                {data.devs.map((dev, index) => (
                  <div key={index} className="mb-2">
                    <span className="inline-block text-white bg-blue-500 hover:bg-blue-700 rounded-full px-4 py-2 text-sm font-bold">
                      #{dev}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* <div className='h-screen w-screen'><Scene/></div> */}
      </div>
    </>
  );
}

export default Index;
