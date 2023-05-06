import React from "react";

function Text() {
  return (
    <div className="my-24 w-[35%] mx-auto text-center text-lg">
      <h1 className="my-8 font-semibold">Hello World</h1>
      <p>
        This project was made with an abundance of love and passion. Every line
        of code, every design element, and every feature was meticulously
        developed with care. <br /> <br /> 
        Built using React.js and the Spring Parallax
        library, this project seamlessly combines the power of React.js with
        captivating parallax effects.  <br /> <br /> 
        The Spring Parallax library enhances the
        visual experience by adding dynamic depth and movement to the user
        interface, creating an immersive and engaging user interaction. <br /> <br /> 
        If you enjoy the captivating effects of this project, I would be delighted to
        hear from you. Feel free to contact me to share your thoughts or explore
        potential collaborations.
      </p>
      <div className="flex gap-4 justify-center mt-8">
        <a href="https://www.linkedin.com/in/youssef-oubari-370451147/" className="text-[#051523] font-bold">Linkedin</a>
        <a href="https://github.com/yusufobr" className="text-[#051523] font-bold" >Github</a>
        <a href="https://twitter.com/OubariY" className="text-[#051523] font-bold" >Twitter</a>
        <a href="mailto:youssef.oubaari@gmail.com" className="text-[#051523] font-bold" >Gmail</a>
      </div>
    </div>
  );
}

export default Text;
