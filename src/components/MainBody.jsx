import React from 'react'
import image from '../assets/picture1.jpg' // Ensure this path is correct

const MainBody = () => {
  return (
    <div className="w-full h-screen flex flex-row  justify-between items-center">
    <div className="w-full md:w-[50%]  ml-14 ">
        <h1 className="text-6xl font-extrabold mt-[-3rem] mb-4">Welcome to my Portfolio</h1>
        <p className="text-lg leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, vel alias, provident, praesentium dolorem quod culpa nesciunt fugiat porro laborum non mollitia amet qui fugit voluptatem dolores corrupti exercitationem error quas ratione nemo assumenda asperiores ut minus. Tempora, porro molestiae.
        </p>
      </div>
      <div className="w-full md:w-[30%] bg-[#C2B9B4] h-auto rounded-2xl flex justify-start mr-32">
        <img 
          src={image} 
          alt="Portfolio image" 
          className="w-full max-h-[500px] object-contain rounded-full "
        />
      </div>
    </div>
  )
}

export default MainBody;
