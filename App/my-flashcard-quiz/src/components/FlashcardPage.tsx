import React from 'react'

export default function FlashcardPage() {
  return (
    <div>
      <div className="flex justify-between items-center py-4 bg-blue-900 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
  <div className="flex-shrink-0 ml-10 cursor-pointer">
    <i className="fas fa-drafting-compass fa-2x text-orange-500"></i>
    <span className="ml-1 text-3xl text-blue-200 font-semibold">Flippy Cards</span>
  </div>
  <i className="fas fa-bars fa-2x visible md:invisible mr-10 md:mr-0 text-blue-200 cursor-pointer"></i>
  <ul className="hidden md:flex overflow-x-hidden mr-10 font-semibold">
    <li className="mr-6 p-1 border-b-2 border-orange-500">
      <a className="text-blue-200 cursor-default" href="#">Home</a>
    </li>
    <li className="mr-6 p-1">
      <a className="text-white hover:text-blue-300" href="#">About</a>
    </li>
    <li className="mr-6 p-1">
      <a className="text-white hover:text-blue-300" href="#">Contacts</a>
    </li>
  </ul>
</div>
<div className="w-full p-6 bg-blue-100 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
  <div className="w-48 mx-auto pt-6 border-b-2 border-orange-500 text-center text-2xl text-blue-700">EXPLORE THE FLASHCARDS</div>
  <div className="p-2 text-center text-lg text-gray-700">We offer the best exploration of Flash cards solutions.</div>
  <div className="flex justify-center flex-wrap p-10">
  </div>
</div>
<div className='flex items-center justify-center bg-gradient-to-r from-green-300 via-blue-500 to-purple-600'>
  <img src="https://images.prismic.io/quizlet-web/ZGYyODQyNGItNmE1Ny00OWI5LTljZTItZTY3OTkzMzIwNTcw_661f6517-b2eb-4844-9662-d98ba5fb5b2e_04flashcards.gif?auto=compress,format&amp;rect=0,0,800,1079&amp;w=800&amp;h=1079" alt="" className="size-96 rounded-sm"/>
</div>
<div className="w-full p-6 bg-blue-100 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
  <div className="w-48 mx-auto pt-6 border-b-2 border-orange-500 text-center text-2xl text-blue-700">ABOUT</div>
  <div className="p-2 text-center text-lg text-gray-700">Fun to Learn Through Flashcards.</div>
  <div className="flex justify-center flex-wrap p-10">
  </div>
  </div>
  <div className='flex items-center justify-center bg-gradient-to-r from-green-300 via-blue-500 to-purple-600'>
  <img src="https://images.prismic.io/quizlet-web/NjY5ODJkY2MtMGNmMi00ZjI2LWIyMjEtMDc0MzE5YWMzNzdh_31c85d7d-9e36-40a4-9fae-5027c355ddee_flashcards-1.gif?auto=compress,format&rect=0,0,1000,680&w=1000&h=680" alt="" className="size-96"/>
</div>
    </div>
  )
}
