import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between p-8 bg-gray-900 text-white">
        <div className="mb-4 md:mb-0">
            <ul>
                <Link to="#"><li className="mb-2">Contact us</li></Link>
                <Link to="#"><li className="mb-2">FAQs</li></Link>
                <Link to="#"><li className="mb-2">Privacy Policy</li></Link>
                <Link to="#"><li className="mb-2">Terms of Service</li></Link>
            </ul>
        </div>
        <div className="mb-4 md:mb-0">
            <p className="mb-2">Follow Us</p>
            <div className="flex space-x-4">
                <Link to="#"><i className="fab fa-twitter"></i></Link>
                <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                <Link to="#"><i className="fab fa-linkedin-in"></i></Link>
            </div>
        </div>
        <div>
            <p className="mb-2">Feedback</p>
            <textarea className="w-full p-2 mb-4 text-gray-900 rounded" placeholder="Your feedback..."></textarea>
            <button className="w-full p-2 text-white bg-green-600 rounded">Submit</button>
        </div>
    </div>
  )
}

export default Footer