import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-cream pt-24 pb-16 px-4">
      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm">
        <h1 className="text-3xl md:text-4xl font-serif text-espresso mb-8">Privacy Policy</h1>
        
        <div className="prose prose-stone text-coffee/80 max-w-none space-y-6">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <p>
            At Good Grounds Coffee, we respect your privacy and are committed to protecting your personal data. 
            This Privacy Policy tells you how we look after your personal data when you visit our website 
            and tells you about your privacy rights.
          </p>

          <h2 className="text-xl font-bold text-espresso mt-6 mb-2">1. Information We Collect</h2>
          <p>
            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
            <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
            <li><strong>Financial Data:</strong> includes bank account and payment card details (processed securely by our payment providers).</li>
            <li><strong>Transaction Data:</strong> includes details about payments to and from you and other details of products you have purchased from us.</li>
          </ul>

          <h2 className="text-xl font-bold text-espresso mt-6 mb-2">2. How We Use Your Data</h2>
          <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
          </ul>

          <h2 className="text-xl font-bold text-espresso mt-6 mb-2">3. Data Security</h2>
          <p>
            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.
          </p>

          <h2 className="text-xl font-bold text-espresso mt-6 mb-2">4. Contact Us</h2>
          <p>
            If you have any questions about this privacy policy or our privacy practices, please contact us at:{" "}
            <a href="mailto:goodgroundscafe@gmail.com" className="text-accent hover:underline">goodgroundscafe@gmail.com</a>
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 flex justify-between items-center">
            <Link to="/" className="text-accent hover:text-gold font-medium">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
