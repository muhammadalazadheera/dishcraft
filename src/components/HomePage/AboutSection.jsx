import React from "react";

function AboutSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:p-10">
      <div className="">
        <img
          className="rounded-tr-4xl rounded-bl-4xl rotate-90"
          src="https://i.ibb.co.com/vFdm97M/XXXL-removebg-preview.png"
          alt=""
        />
      </div>
      <div className="mt-10 md:mt-35 px-4 md:px-0">
        <h1 className="text-5xl font-extrabold text-[#b75d69]">About Us</h1>
        <p className="mt-2">
          We are a team of food enthusiasts dedicated to bringing you the best
          culinary experiences. From our carefully curated recipes to our
          innovative kitchen tools, we strive to inspire and empower home cooks
          everywhere. Join us on a journey of flavor and creativity as we
          explore the world of food together.
          <br /><br />
          Our mission is to make cooking enjoyable and accessible for everyone,
          regardless of skill level. We believe that great food has the power to
          bring people together and create lasting memories. By sharing our
          passion for cooking, we hope to inspire you to try new recipes,
          experiment with flavors, and discover the joy of creating delicious
          meals at home. <br /><br />
          Thank you for being a part of our community, and we can't wait to see
          what you create in your kitchen!
        </p>
      </div>
    </div>
  );
}

export default AboutSection;
