'use client'
import MiniClander from "@/src/mini-calendar";

export default function Home() {
  return (
    <>
   <MiniClander onChange={console.log} />
   <MiniClander defaultValue={new Date('2022-2-1')} onChange={console.log}/>
   </>
  );
}
