import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-blue text-white py-4">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Your Company Name. All rights reserved.
        </p>
        <div>
          <a href="/terms" className="text-white hover:underline mr-4">
            Terms of Use
          </a>
          <a href="/privacy" className="text-white hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
