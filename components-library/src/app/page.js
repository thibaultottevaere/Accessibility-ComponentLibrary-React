"use client";
import Select from "../../public/form/select";
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
      <nav className="w-full flex justify-between p-4 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:bg-zinc-800/30 dark:from-inherit">
        <a href="https://redwoodjs.com/docs" className="text-black dark:text-white">Redwood Documentation</a>
        <a href="https://redwoodjs.com/tutorial" className="text-black dark:text-white">Tutorial</a>
        <a href="https://community.redwoodjs.com" className="text-black dark:text-white">Community</a>
      </nav>
      <h1 className="text-4xl font-bold text-center">Welcome to your new project</h1>
    </main>
  );
}
