import Container from "@/Components/Shared/Container";
import React from "react";

export default function QandA() {
  return (
    <div className="max-w-[800px] mx-auto sm:h-[400px] mt-20">
      <h2 className="text-center text-primary text-3xl font-semibold mb-10">
        Questions & Answers
      </h2>

      <div className="collapse collapse-plus bg-gray-200 border border-base-300 mb-3 duration-700">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title font-semibold">
          How do I create an account?
        </div>
        <div className="collapse-content text-sm">
          Click the Log in button in the top right corner and follow the
          registration process.
        </div>
      </div>
      <div className="collapse collapse-plus bg-gray-200 border border-base-300 mb-3 duration-700">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold">
          I forgot my password. What should I do?
        </div>
        <div className="collapse-content text-sm">
          Click on Forgot Password on the login page and follow the instructions
          sent to your email.
        </div>
      </div>
      <div className="collapse collapse-plus bg-gray-200 border border-base-300 mb-3 duration-700">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold">
          How do I update my profile information?
        </div>
        <div className="collapse-content text-sm">
          Go to My Account settings and select Edit Profile to make changes.
        </div>
      </div>

      <div className="collapse collapse-plus bg-gray-200 border border-base-300 mb-3 duration-700">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold">How can I book car?</div>
        <div className="collapse-content text-sm">
          Go to All Labourers page and select View Details then you can book
          car.
        </div>
      </div>
    </div>
  );
}
