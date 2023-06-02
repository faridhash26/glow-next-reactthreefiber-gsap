"use client";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

import RendererScene from "@/components/three/RendererScene";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full h-full">
      <div className=" fixed top-0 left-0 outline-none w-full h-full">
        <RendererScene />
      </div>
      <div className="flex items-center flex-col w-full relative">
        <section className="text-[7vmin] w-[90%] h-[1000px] flex items-center justify-between text-[#a3a2c9] p-x-[10%] ">
          <h1>برنامه نویس وب</h1>
          <h1>فرید هاشمیان</h1>
        </section>
        <section className="  w-[90%] justify-start h-[1000px] flex items-center   p-x-[10%] ">
          <div className="flex flex-col items-center">
            <h2 className="text-[7vmin]">درباره من</h2>
            <p className="text-[3vmin]">علاقه مند به طراحی ۳ بعدی در وب سایت</p>
          </div>
        </section>
        <section className="text-[7vmin]  w-[90%] justify-start   h-[1000px] flex items-center  text-[#3b876c] p-x-[10%] ">
          <a className=" cursor-pointer " href="https://github.com/faridhash26">
            <AiFillGithub />
          </a>
          <a
            className=" cursor-pointer "
            href="https://www.linkedin.com/in/farid-hash"
          >
            <AiFillLinkedin />
          </a>
        </section>
      </div>
    </main>
  );
}
