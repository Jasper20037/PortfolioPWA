// Component for testimonials section of the page
import React from "react";
// styling
import "./feedback.css";
// Import swiperjs for carousel of feedback
import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Variable for feedback
const feedback = [
  {
    id: 1,
    title: "Learning Outcome 1",
    teacher: "Jan Salge",
    feedback:
      "FED Products: Product website Axe, but not showing us the actual page (asked, and then you show). Pokemon game, talking about it, nothing there yet but intention to make it a real game. MP Products:Product poster: Use chatgpt as a brainstorming method, poster looks ok but seemingly no iterations or communication Early blade runner challenge! That is cool! I am curious to see what you can do in 3D, but you did not show much and we do not see passion in what you show yet. You have to learn to wow people a bit UCD: Passionate idea documentation is the same as with your group. Make sure to point out and document clearly what you did yourself!",
    grade: "Undefined",
    date: "22-10-2023",
  },
  {
    id: 2,
    title: "Learning Outcome 2",
    teacher: "Jan Salge",
    feedback:
      "Commenting your code is important, so make sure that anything non-trivial is commented. Using git but not yet the advanced tools.",
    grade: "Undefined",
    date: "22-10-2023",
  },
  {
    id: 3,
    title: "Learning Outcome 3",
    teacher: "Jan Salge",
    feedback: "Iterations are not documented yet.",
    grade: "Undefined",
    date: "22-10-2023",
  },
  {
    id: 4,
    title: "Learning Outcome 4",
    teacher: "Jan Salge",
    feedback:
      "Define what kind of professional you want to be? How do you reach that goal? What did you do to get better and to find out that this is what you want to do. Make also sure to show a really deep and cool product for that passion that you found",
    grade: "Undefined",
    date: "22-10-2023",
  },
];

const Feedbacks = () => {
  return (
    <section id="feedback">
      <h5>Previous review on learning outcomes</h5>
      <h2>Feedback</h2>

      {/* Swiper is a component of swiperjs, it acts like a conatiner for the Swiperslide */}
      <Swiper
        className="container testimonial__container"
        // Swiper modules for pagination (dots underneath the carousel)
        modules={[Pagination]}
        // Amount in px
        spaceBetween={40}
        slidesPerView={1}
        // makes it possible to click on the dots to go to that sppecific slide
        pagination={{ clickable: true }}
      >
        {/* Mapping data from "feedback" array to display on page */}
        {feedback.map(({ id, title, teacher, feedback, grade, date }) => {
          return (
            // Swiperslide is a swiperjs component, i use it to make a carousel of feedback
            <SwiperSlide key={id} className="testimonial">
              <h3>{title}</h3>
              <p className="teacher__fedback">{feedback}</p>
              <article className="testimonial__info">
                <small>Feedback by: {teacher}</small>
                <small>Grade: {grade}</small>
                <small>Date of feedback: {date}</small>
              </article>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Feedbacks;
