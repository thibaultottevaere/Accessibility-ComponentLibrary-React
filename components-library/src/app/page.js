"use client";
import Input from "../../public/form/input";
import Errors from "../../public/form/errors";
import Submit from "../../public/form/submit";
export default function Home() {
  const onSubmit = (props) => {
    console.log(props.get('select'))
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.js</code>
        </p>
        
      </div>
      <form className="w-full" action={onSubmit}>
        <select className="w-full p-5 text-black">
          <option>test1</option>
          <option>test2</option>
          <option>test3</option>
          <option>test4</option>
          <option>test5</option>
        </select>

        <Submit
          style={"flex w-9/12 border border-gray-300 justify-center py-2 px-4 rounded-lg"}
          value={'Submit form'}
        />
      </form>
    </main>
  );
}
