"use client";
import NavElement from "../../public/navigation/navElement";
import Title from "../../public/text/title";
import Button from "../../public/form/button";
import Select from "../../public/form/select";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.js</code>
        </p>
      </div>
      <Select
        id="framework"
        label="Select a framework"
        name="framework"
        options={["React", "Vue", "Next"]}
        required={true}
        role="select"
        selectStyle="w-full flex justify-center"
        style="w-full p-4 mt-4 text-lg font-bold text-center bg-gray-800 rounded-xl"
      />
      
      <NavElement
        element="a" 
        itemStyle="w-full flex justify-center text-black bg-gray-200 rounded-xl p-4 cursor-pointer" 
        linkStyle="" 
        listStyle="w-full flex justify-center flex-wrap gap-4" 
        navStyle="w-full flex"
        options={[{label:"React", text:"React", link:""}, {label:"Vue", text:"Vue", link:""}, {label:"Next", text:"Next", link:""}]}
        style="w-full p-4 mt-4 text-lg font-bold text-center bg-gray-200 rounded-xl"
        label="framework"
      />
      <Title
        label="title"
        element="h1"
        title="Welcome to your new project"
        style="text-4xl font-bold text-center"
      />
      <Button
        text="Get Started"
        style="bg-blue-200 text-black p-4 rounded-xl"
        type="button"
        name="button"
      />
    </main>
  );
}
