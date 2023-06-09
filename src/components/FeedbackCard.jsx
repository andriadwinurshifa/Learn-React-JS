import React from 'react'
import { rendang } from '../assets';

const FeedbackCard = () => {
  return (
<div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div class="md:flex">
    <div class="md:flex-shrink-0">
      <img  src={rendang} className="h-48 w-full object-cover md:h-full md:w-48" />
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Makanan</div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Rendang</a>
      <p class="mt-2 text-gray-500">Salah satu makanan yang terbuat dari danging sapi dengan ditembahkan banyak rempah rempah sehingga membuat rasanya khas</p>
    </div>
  </div>
</div>
  )
}

export default FeedbackCard