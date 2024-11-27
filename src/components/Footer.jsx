import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r bg-[#64748B] mt-10 text-white py-10">
      <div className="container mx-auto px-5 flex flex-col lg:flex-row justify-between items-center">
        {/* Contact Info */}
        <div className="text-center lg:text-left mb-5 lg:mb-0">
          <h2 className="text-2xl font-bold">Let's Connect!</h2>
          <p className="mt-3">
            Email: <a href="aitisamahmed24@gmail.com" className="underline">aitisamahmed24@gmail.com</a>
          </p>
          <p>
            Phone: <a href="92 + 3471536817" className="underline">+3471536817</a>
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center gap-5">
          <a href="https://github.com/M-Aitisam" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0C5.372 0 0 5.372 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.262.793-.582 0-.286-.01-1.04-.016-2.04-3.338.725-4.042-1.614-4.042-1.614-.546-1.385-1.332-1.754-1.332-1.754-1.088-.744.083-.729.083-.729 1.205.085 1.838 1.237 1.838 1.237 1.07 1.835 2.808 1.305 3.492.997.108-.775.418-1.305.76-1.605-2.665-.303-5.466-1.333-5.466-5.93 0-1.31.469-2.382 1.236-3.222-.124-.303-.535-1.523.118-3.176 0 0 1.007-.322 3.3 1.23.956-.266 1.98-.398 3-.403 1.02.005 2.044.137 3 .403 2.292-1.552 3.297-1.23 3.297-1.23.655 1.653.244 2.873.12 3.176.77.84 1.235 1.912 1.235 3.222 0 4.606-2.805 5.624-5.475 5.92.43.37.813 1.096.813 2.21 0 1.594-.015 2.877-.015 3.27 0 .322.192.7.8.58C20.565 21.796 24 17.298 24 12c0-6.628-5.372-12-12-12z" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/aitisam-ahmed-9395b62a0/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.75 19h-2.5v-8h2.5v8zm-1.25-9.25c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm12.25 9.25h-2.5v-4c0-1.1-.9-2-2-2s-2 .9-2 2v4h-2.5v-8h2.5v1.5c.58-.86 1.62-1.5 2.75-1.5 1.93 0 3.5 1.57 3.5 3.5v4z" />
            </svg>
          </a>
          
        </div>

      </div>
        {/* Copyright */}
        <div className="mt-5 lg:mt-0 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Aitisam Ahmed. All Rights Reserved.
          </p>
        </div>
    </footer>
  );
};

export default Footer;
