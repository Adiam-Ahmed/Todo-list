import React from 'react';

const FAQs = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div>
        <p className='text-[#00df9a] font-bold pt-1 text-center flex flex-col justify-center'>FREQUENTLY ASKED QUESTIONS</p>
        <p className='text-black text-center flex flex-col justify-center md:text-5xl sm:text-4xl text-3xl font-bold md:py-6'>Got Questions? We've Got Answers!</p>

        {/* Individual FAQ Items */}
        <div className="max-w-[800px] mx-auto mb-8">
          {/* FAQ 1 */}
          <div className="mb-6">
            <h2 className="text-[#00df9a] text-xl font-bold mb-2">1. How do I create a new task in Zentask?</h2>
            <p className="text-black">Creating a new task is simple! Navigate to the 'New Task' section, enter your task details, and hit the 'Add Task' button. Voila!</p>
          </div>

          {/* FAQ 2 */}
          <div className="mb-6">
            <h2 className="text-[#00df9a] text-xl font-bold mb-2">2. Can I update the details of an existing task?</h2>
            <p className="text-black">Absolutely! Click on the task you want to update, make your changes, and hit 'Update.' Your task details will be seamlessly updated.</p>
          </div>

          {/* FAQ 3 */}
          <div className="mb-6">
            <h2 className="text-[#00df9a] text-xl font-bold mb-2">3. Is there a way to categorize my tasks?</h2>
            <p className="text-black">Certainly! Zentask allows you to categorize tasks with tags. Simply add tags to your tasks for easy organization and quick reference.</p>
          </div>

          {/* FAQ 4 */}
          <div className="mb-6">
            <h2 className="text-[#00df9a] text-xl font-bold mb-2">4. How do I delete a completed task?</h2>
            <p className="text-black">Deleting completed tasks is a breeze. Just select the task, click on 'Delete,' and watch it disappear from your task list. Clean and clutter-free!</p>
          </div>

          {/* FAQ 5 */}
          <div className="mb-6">
            <h2 className="text-[#00df9a] text-xl font-bold mb-2">5. Can I use Zentask on multiple devices?</h2>
            <p className="text-black">Absolutely! Zentask is cloud-based, allowing you to access your tasks from any device. Stay in sync and manage your tasks seamlessly on the go.</p>
          </div>

          {/* FAQ 6 */}
          <div className="mb-6">
            <h2 className="text-[#00df9a] text-xl font-bold mb-2">6. How can I get motivational quotes in Zentask?</h2>
            <p className="text-black">Zentask provides inspirational quotes to keep you motivated. The quotes are integrated seamlessly—just focus on your tasks, and let the motivation flow!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
