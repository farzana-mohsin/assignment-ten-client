const Timeline = () => {
  return (
    <div className='container mx-auto my-10'>
      <h2 className='text-3xl md:text-5xl font-bold text-center my-16'>
        Exhibitions & Events
      </h2>
      <ul className='timeline timeline-snap-icon max-md:timeline-compact timeline-vertical'>
        <li>
          <div className='timeline-middle'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='h-5 w-5'
            >
              <path
                fillRule='evenodd'
                d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                clipRule='evenodd'
              />
            </svg>
          </div>
          <div className='timeline-start md:text-end mb-10 w-1/2'>
            <time className='font-mono italic'>May 15 - May 31</time>
            <div className='text-lg font-black'>Summer Session 1</div>
            <p>
              Crown Art students and staff initiate and engage in a wide range
              of events and projects. Some of these are hosted by the Crown Art
            </p>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className='timeline-middle'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='h-5 w-5'
            >
              <path
                fillRule='evenodd'
                d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                clipRule='evenodd'
              />
            </svg>
          </div>
          <div className='timeline-end mb-10 w-1/2'>
            <time className='font-mono italic'>Jan 15 - April 15</time>
            <div className='text-lg font-black'>Regular Session</div>
            <p>
              At Crown Art School we are teaching different art techniques to
              students of all ages. During my lessons I try to bring out the
              inner artists of students to help build their skills.
            </p>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className='timeline-middle'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='h-5 w-5'
            >
              <path
                fillRule='evenodd'
                d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                clipRule='evenodd'
              />
            </svg>
          </div>
          <div className='timeline-start md:text-end mb-10 w-1/2'>
            <time className='font-mono italic'>May 22 - July 02</time>
            <div className='text-lg font-black'>Special Programs</div>
            <p>
              Special Programs Here at Crown Art Special Programs our goal is to
              give students access to the arts. Whether you’re a visiting
              college student, high school student or working professional, our
              programs will give you introductory exposure to the performing,
              cinematic or media arts, as well as advanced-level training to
              grow your craft. Individual courses and semester-long programs are
              offered in New York City and abroad. We partner with universities
              and organizations around the globe to give you the highest caliber
              of training!
            </p>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className='timeline-middle'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='h-5 w-5'
            >
              <path
                fillRule='evenodd'
                d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                clipRule='evenodd'
              />
            </svg>
          </div>
          <div className='timeline-end mb-10 w-1/2'>
            <time className='font-mono italic'>June 10 - July 10</time>
            <div className='text-lg font-black'>Summer Session 2</div>
            <p>
              Crown Art offers undergraduate, graduate, and non-credit courses
              for students looking to continue their studies or kickstart a new
              project. Courses include academic study of the arts as well as
              professional, conservatory training across disciplines.
              <br />
              <br />
              Enroll in individual courses of your choice or register for a
              summer intensive with a pre-designed curriculum. You can build
              your resume with an internship or take classes to put you on a new
              career path.
            </p>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className='timeline-middle'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              className='h-5 w-5'
            >
              <path
                fillRule='evenodd'
                d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z'
                clipRule='evenodd'
              />
            </svg>
          </div>
          <div className='timeline-start md:text-end mb-10 w-1/2'>
            <time className='font-mono italic'>Aug 1 - Aug 10</time>
            <div className='text-lg font-black'>Encountering Pain</div>
            <p>
              This event will explore a range of international and
              interdisciplinary approaches that can help us.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Timeline;
