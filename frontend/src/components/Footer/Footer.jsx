// import { Input } from "@/components/ui/input"
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

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Wheat className="mr-2" />
              AgriPrice Predictor
            </h2>
            <nav>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/contact"
                    className="hover:text-green-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contact us
                  </a>
                </li>
                <li>
                  <a
                    href="/faq"
                    className="hover:text-green-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    FAQs
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy"
                    className="hover:text-green-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/terms"
                    className="hover:text-green-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Terms of Service
                  </a>
                </li>
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
        <div className="mt-8 pt-8 border-t border-green-700 text-center text-sm">
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
