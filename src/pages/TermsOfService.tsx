import { Link } from "react-router-dom";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-cream pt-24 pb-16 px-4">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm">
        <h1 className="text-3xl md:text-4xl font-serif text-espresso mb-8">Terms of Service</h1>
        
        <div className="prose prose-stone text-coffee/80 max-w-none space-y-6">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <p>
            Welcome to Good Grounds Coffee. These terms and conditions outline the rules and regulations for the use of Good Grounds Coffee's website.
          </p>

          <h2 className="text-xl font-bold text-espresso mt-6 mb-2">1. Terms</h2>
          <p>
            By accessing this website we assume you accept these terms and conditions. Do not continue to use Good Grounds Coffee if you do not agree to take all of the terms and conditions stated on this page.
          </p>

          <h2 className="text-xl font-bold text-espresso mt-6 mb-2">2. License</h2>
          <p>
            Unless otherwise stated, Good Grounds Coffee and/or its licensors own the intellectual property rights for all material on Good Grounds Coffee. All intellectual property rights are reserved. You may access this from Good Grounds Coffee for your own personal use subjected to restrictions set in these terms and conditions.
          </p>

          <h2 className="text-xl font-bold text-espresso mt-6 mb-2">3. Product Descriptions</h2>
          <p>
            We do not warrant that product descriptions or other content of this site is accurate, complete, reliable, current, or error-free. If a product offered by us itself is not as described, your sole remedy is to return it in unused condition.
          </p>

          <h2 className="text-xl font-bold text-espresso mt-6 mb-2">4. Pricing</h2>
          <p>
            Prices for our products are subject to change without notice. We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time.
          </p>
          
          <h2 className="text-xl font-bold text-espresso mt-6 mb-2">5. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of the State of Kansas and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
          </p>
        </div>

         <div className="mt-12 pt-8 border-t border-gray-100 flex justify-between items-center">
            <Link to="/" className="text-accent hover:text-gold font-medium">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
