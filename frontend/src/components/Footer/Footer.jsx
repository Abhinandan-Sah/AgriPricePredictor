import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Twitter,
  Facebook,
  Linkedin,
  Wheat,
  Carrot,
  Banana,
} from "lucide-react";
import { Link } from "react-router-dom";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Optional: for smooth scrolling
  });
};

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Wheat className="mr-2" />
              AgriPrice Predictor
            </h2>
            <nav>
              <ul className="space-y-2">
                <Link
                  to="/retrain"
                  onClick={scrollToTop}
                  className="hover:text-green-300"
                >
                  <li>Admin Retrain Model</li>
                </Link>
                <Link
                  to="/contact"
                  onClick={scrollToTop}
                  className="hover:text-green-300"
                >
                  <li>Contact us</li>
                </Link>
                <Link
                  to="/faq"
                  onClick={scrollToTop}
                  className="hover:text-green-300"
                >
                  <li>FAQs</li>
                </Link>
                <Link
                  to="/privacy"
                  onClick={scrollToTop}
                  className="hover:text-green-300"
                >
                  <li>Privacy Policy</li>
                </Link>
                <Link
                  to="/terms"
                  onClick={scrollToTop}
                  className="hover:text-green-300"
                >
                  <li>Terms of Service</li>
                </Link>
              </ul>
            </nav>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Commodities</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Wheat className="mr-2" /> Pulses
              </li>
              <li className="flex items-center">
                <Carrot className="mr-2" /> Onion
              </li>
              <li className="flex items-center">
                <Banana className="mr-2" /> Potato
              </li>
            </ul>
            <h3 className="text-xl font-semibold mt-6 mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-300">
                <Twitter />
              </a>
              <a href="#" className="hover:text-green-300">
                <Facebook />
              </a>
              <a href="#" className="hover:text-green-300">
                <Linkedin />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Feedback</h3>
            <form className="space-y-4">
              <Textarea
                placeholder="Your feedback on our price predictions..."
                className="w-full p-2 text-gray-900 rounded"
              />
              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700"
              >
                Submit Feedback
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-5 pt-5 border-t border-green-700 text-center text-sm">
          <p>
            &copy; 2023 AgriPrice Predictor. A project of the Department of
            Consumer Affairs, Ministry of Consumer Affairs, Food and Public
            Distribution.
          </p>
        </div>
      </div>
    </footer>
  );
}
