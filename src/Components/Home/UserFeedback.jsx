import { useState } from "react";

function UserFeedback() {

  const [tooltip, setTooltip] = useState(null);
  const [tooltipContent, setTooltipContent] = useState('');
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const [feedbacks, setFeedbacks] = useState([
    {
      name: 'Mark Stevens',
      photo: 'https://i.ibb.co.com/M53MNYR/runner-3.jpg.jpg',
      feedback: 'RunRoute gave us an edge in health and technology, they are more like an extended family.'
    },
    {
      name: 'John Matthews',
      photo: 'https://i.ibb.co.com/Z6Fk2t6/runner-3.png',
      feedback: 'RunRoute Force Elevate Your Running The Expertise Training'
    },
    {
      name: 'Ravi Handa',
      photo: 'https://i.ibb.co.com/f4GyPjw/runner-1.png',
      feedback: 'RunRoute constantly endeavors to improve their interface and customer experience.'
    },
    {
      name: 'Satish Talim',
      photo: 'https://i.ibb.co.com/c2PRBRS/runner-2.png',
      feedback: 'RunRoute offered me access in a way that just didn’t exist before.'
    },
    {
      name: 'Saurov Kakoti',
      photo: 'https://i.ibb.co.com/gDYryC0/runner-1.jpg',
      feedback: 'Their careful selection and vetting of sponsors and deals has enabled me to invest with confidence.'
    },
    {
      name: 'M. Asif',
      photo: 'https://i.ibb.co.com/44NBB23/runner-2.jpg',
      feedback: 'I like for Each deal and sponsor are carefully screened before presenting to investors.'
    }
  ]);

  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-evenly text-center gap-y-8 gap-5 my-12 bg-base-200 rounded-2xl py-8 max-w-[1380px] mx-auto'>
      <div className='lg:col-span-3 md:col-span-2 col-span-1 text-5xl font-semibold mb-4 text-left'>
        <h1 className="text-3xl md:text-5xl font-semibold text-center">
          Here Our Runner Feedback
        </h1>
      </div>
      {feedbacks.map((feedback, index) => (
        <div key={index} className="card card-compact bg-base-100 max-w-96 shadow-xl border pt-3 mx-auto">
          <figure>
            <img src={feedback.photo} alt="Runner Photo" className='rounded-full w-24 h-24' />
          </figure>
          <div className="card-body ">
            <h2 className="card-title font-bold">{feedback.name}</h2>
            <p>{feedback.feedback}</p>
            <div className="card-actions justify-center mt-4">
              <button disabled className="btn btn-sm text-lg px-8">Feedback</button>
            </div>
          </div>
        </div>
      ))}


      {/* <div>
        <label htmlFor="smy-drawer-4" className="drawer-button btn px-1 outline-cyan-500 outline-2 outline outline-offset-1 border-none hover:outline-cyan-400 w-12 h-12 rounded-full overflow-hidden">
          <img className="max-w-full max-h-full" src='https://i.ibb.co.com/44NBB23/runner-2.jpg' alt="Feedback User Photo" />
        </label>
        <h3 data-tooltip-id="my-tooltip" className='w-max mx-auto text-2xl font-semibold my-2'>M. Asif</h3>
        <p className='max-w-[78%] mx-auto'>I like for Each deal and sponsor are carefully screened before presenting to investors.</p>
      </div> */}


    </div>
  )
}

export default UserFeedback
