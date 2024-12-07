import Link from "next/link";

// components/Footer.jsx
const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-6 py-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* About Section */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Company</h2>
              <p className="text-gray-400 text-sm">
                Building modern and intuitive solutions to empower your business and elevate user experience.
              </p>
            </div>
  
            {/* Quick Links */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
              <ul className="space-y-2 text-sm">
                <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="/about" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="/services" className="text-gray-400 hover:text-white">Services</a></li>
                <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
  
            {/* Contact Info */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Contact</h2>
              <ul className="text-sm space-y-2">
                <li className="text-gray-400">Email: info@example.com</li>
                <li className="text-gray-400">Phone: +123 456 7890</li>
                <li className="text-gray-400">Address: 123 Main Street, City</li>
              </ul>
            </div>
  
            {/* Social Media */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22.23 5.924c-.806.356-1.676.597-2.587.706.93-.556 1.641-1.434 1.976-2.48-.872.518-1.84.894-2.867 1.095a4.515 4.515 0 0 0-7.7 4.112A12.817 12.817 0 0 1 3.102 4.892a4.518 4.518 0 0 0-.613 2.27c0 1.564.796 2.944 2.007 3.754-.741-.024-1.438-.227-2.047-.568v.057c0 2.185 1.553 4.007 3.612 4.422-.379.103-.777.159-1.186.159-.29 0-.573-.028-.849-.082.574 1.793 2.239 3.1 4.213 3.136a9.038 9.038 0 0 1-5.605 1.93c-.364 0-.722-.021-1.075-.062a12.753 12.753 0 0 0 6.92 2.025c8.307 0 12.857-6.881 12.857-12.857 0-.196-.004-.392-.013-.586a9.22 9.22 0 0 0 2.27-2.348l.002-.003z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5.05 3.72 9.2 8.5 9.9v-7h-2.5v-2.9h2.5V9.7c0-2.48 1.49-3.85 3.77-3.85 1.1 0 2.26.2 2.26.2v2.4h-1.27c-1.25 0-1.64.78-1.64 1.58v1.9h2.8l-.45 2.9h-2.35v7C18.28 21.2 22 17.05 22 12z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.004 12l.122-.13c1.048-1.091 2.104-2.152 3.177-3.185a1.717 1.717 0 0 0 .216-.287c.192-.296.1-.519-.19-.654a1.026 1.026 0 0 0-.815-.025 9.267 9.267 0 0 0-.96.502c-1.22.805-2.417 1.647-3.604 2.505-.683.48-.693 1.163-.03 1.64l4.913 3.424a1.172 1.172 0 0 0 .88.244c.585-.054.894-.39.846-.967-.024-.295-.193-.53-.419-.715a49.14 49.14 0 0 1-3.374-2.519l.003-.002z"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
  
          <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
            © 2024 Your Company. All rights reserved.
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  