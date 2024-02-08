import React from 'react'
import logo from "../assests/YenTask.png"
import UserAuthentication from "../assests/user-authentication.jpg"
import CloudTask from "../assests/cloudTask.jpeg"
import quotes from "../assests/quotes.jpg"
import DataAnalytics from  "../assests/Data.jpg"
import task from "../assests/task.jpg"

const Data = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
    <img className= "w-[500px] mx-auto my-4"src ={logo} alt =""/>
    <div className='flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold '>CardBoard</p>
        <h1 className= 'md:text-4xl sm:text 3xl text 2xl font-bold py-2'>Manage your board </h1>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, 
        content here', making it look like readable English. Many desktop publishing packages and web page editors now use 
        Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. 
        Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        <button className='bg-black text-[#00df9a] w-(200px) rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Try it Now!</button>
    </div>
    </div>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
    <img className= "w-[500px] mx-auto my-4"src ={UserAuthentication} alt =""/>
    <div className='flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold '>User Authentication</p>
        <h1 className= 'md:text-4xl sm:text 3xl text 2xl font-bold py-2'>User Authentication</h1>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
        The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, 
        content here', making it look like readable English. Many desktop publishing packages and web page editors now use 
        Implement user authentication using a service like Firebase Authentication or Auth0. This will allow users to create accounts, 
        log in, and secure their task data..</p>
        <button className='bg-black text-[#00df9a] w-(200px) rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Try it Now!</button>
    </div>
    </div>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
    <img className= "w-[500px] mx-auto my-4"src ={CloudTask} alt =""/>
    <div className='flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold '>User Authentication</p>
        <h1 className= 'md:text-4xl sm:text 3xl text 2xl font-bold py-2'>Cloud Storage for Task Data</h1>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
          The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, 
          content here', making it look like readable English. Many desktop publishing packages and web page editors now use 
          Use a cloud database like Firebase Realtime Database or Firestore to store and retrieve task data. 
          This ensures that users can access their tasks from any device. (injected humour and the like).</p>
        <button className='bg-black text-[#00df9a] w-(200px) rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Try it Now!</button>
    </div>
    </div>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
    <img className= "w-[500px] mx-auto my-4"src ={quotes} alt =""/>
    <div className='flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold '>You Go Gals n Pals?</p>
        <h1 className= 'md:text-4xl sm:text 3xl text 2xl font-bold py-2'>Empowering You with Inspiration</h1>
        <p>At Yen Task Manager Plus, we understand that you're more than just a task list. We're here to support you on your journey, 
          and that's why we've integrated an API to bring you inspirational quotes. As you navigate through your tasks, 
          let these quotes serve as a source of motivation and encouragement, reminding you that every completed task 
          is a step closer to your goals. Stay inspired, stay productive!</p>
        <button className='bg-black text-[#00df9a] w-(200px) rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Try it Now!</button>
    </div>
    </div>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
    <img className= "w-[500px] mx-auto my-4"src ={DataAnalytics} alt =""/>
    <div className='flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold '>May the numbers with you</p>
        <h1 className= 'md:text-4xl sm:text 3xl text 2xl font-bold py-2'>Data Analytics</h1>
        <p>At Yen Task Manager Plus, we believe in the power of insights. Our Data Analytics feature goes beyond task management, 
        providing you with valuable data to elevate your productivity. Track completion rates, analyze your task patterns, and 
        discover your most productive moments. With Yen Analytics, empower yourself with knowledge to make informed decisions, 
        refine your workflow, and achieve even greater success in your tasks. Your journey, your data, your productivity—
        unleash the potential within!</p>
        <button className='bg-black text-[#00df9a] w-(200px) rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Try it Now!</button>
    </div>
    </div>
    <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
    <img className= "w-[500px] mx-auto my-4"src ={task} alt =""/>
    <div className='flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold '>ToDo if not obvio</p>
        <h1 className= 'md:text-4xl sm:text 3xl text 2xl font-bold py-2'>Serenity in Task Management</h1>
        <p>Effortlessly create, organize, and update your tasks with Zentask. Craft your to-do list with ease, finding peace in simplicity. 
        Create tasks that align with your goals, delete the unnecessary, and seamlessly update details as your priorities shift. 
        Zentask empowers you to find serenity in task management—making every creation, deletion, and 
        update a mindful step towards achieving your inner balance."!</p>
        <button className='bg-black text-[#00df9a] w-(200px) rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Try it Now!</button>
    </div>
    </div>



    </div>
  )
}

export default Data