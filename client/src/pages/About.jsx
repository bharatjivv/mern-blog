import CallToAction from '../components/CallToAction';

export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
            About This Blog
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p> Welcome to The Blog site — a platform thoughtfully created as part of an assignment project. </p>
            <p> This blog has been designed to showcase both front-end and back-end development skills, with a focus on clean design, user-friendly navigation, and content management. It represents my approach to building a complete web application from scratch, emphasizing not only technical proficiency but also attention to detail and user experience. </p>
            
            <h3>The goal behind this project is to demonstrate:</h3>
            <p>
              Full-Stack Development Expertise: From setting up the server and database to building a responsive and dynamic frontend.
              Content Management: Easy-to-update articles, dynamic routing, and optimized loading for a smooth reading experience.
              Best Practices: Clean, maintainable code following modern web development standards.
              Creativity and Professionalism: Delivering a product that is both functional and visually appealing.
              Every feature and design choice has been made with real-world application in mind, simulating the challenges and solutions involved in building a live blog site.
              Thank you for visiting!
              Feel free to explore and see the work in action.
            </p>
          </div>
        </div>
        <div className='mt-10'>
          <CallToAction />
        </div>
      </div>
    </div>
  );
}