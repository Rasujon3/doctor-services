import React from "react";

const Blogs = () => {
  return (
    <div
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
      className="container mt-2"
    >
      <div className="accordion" id="accordionExample">
        <div className="accordion-item mb-2">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Q1. Difference between authorization and authentication?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Context API is that the thanks to create global variables which
              will be passed round the component tree. Context API is an
              alternate to passing props manually in a very component tree.
              Something that's also called Prop drilling. The Context API may be
              a React structure that enables you to exchange unique details and
              assists in solving prop-drilling from all levels of your
              application. Context is primarily used when some data must be
              accessible by many components at different nesting levels. Apply
              it sparingly because it makes component reuse tougher. If you
              merely want to avoid passing some props through many levels, the
              component composition is often an easier solution than context.
            </div>
          </div>
        </div>
        <div className="accordion-item mb-2">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Q2. Why are you using firebase? What other options do you have to
              implement authentication??
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Semantic HTML tags provide information about the contents of those
              tags that goes beyond just how they look on a page. Text that is
              enclosed in the code tag is immediately recognized by the browser
              as some type of coding language.A semantic element clearly
              describes its meaning to both the browser and the developer.
              Examples of non-semantic elements: div and span tag - Tells
              nothing about its content. Examples of semantic elements: form ,
              table , and article tag - Clearly defines its content.It makes web
              pages more informative and adaptable, allowing browsers and search
              engines to better interpret content.
            </div>
          </div>
        </div>
        <div className="accordion-item mb-2">
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Q3. What other services does `firebase` provide other than
              authentication?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Inline element doesn't start on a new line and only occupy just
              the width it requires. You can't set the width or height.
              inline-block It's formatted just like the inline element, where it
              doesn't start on a new line. BUT, you can set width and height
              values.The major difference is that inline-block allows to set a
              width and height on the element. Also, with display: inline , top
              and bottom margins & paddings are not respected, and with display:
              inline-block they are.Use inline if you want to apply a style to a
              short span of text, and use block for rectangles areas with
              width/height. As for inline-block, it's used naturally for images.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
