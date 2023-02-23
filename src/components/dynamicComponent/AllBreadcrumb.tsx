import Link from 'next/link'
import React from 'react'

export default function AllBreadcrumb({arr}:any) {
  return (
    <section className="w-full bg-gray-100 py-24">
    <section className=" main-container w-full flex items-center justify-between ">
      <div className="w-1/5 h-full center ">
        <span className="w-full h-full items-start justify-end -rotate-90  ">
          <p className="text-gray-400 font-normal text-3xl uppercase -ml-16 ">
            {arr?.sidefirstH1}
          </p>
          <p className="text-gray-400  font-bold text-7xl uppercase -ml-10 ">
            {arr?.sidesecH1}
          </p>
        </span>
      </div>
      <div style={{backgroundImage:`url(${arr?.img.src})`}} className="w-4/5 h-[60vh] bg-center bg-cover bg-no-repeat relative">
          <span className=" absolute top-1/2 -left-16 h-48 w-80 bg-white -translate-y-1/2 shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex flex-col items-start justify-center gap-4 px-8">
          <h1 className="text-3xl font-bold capitalize ">{arr.title}</h1>
          <Link href={"/"}>
          <h1 className="text-lg text-gray-600 capitalize  ">home <span className="text-red-600">{`>>`}</span>  </h1>
          </Link>
          </span>
      </div>
    </section>
  </section>
  )
}
