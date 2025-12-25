import React from "react";

const ContactExtras = () => {
return (
<section className="w-full bg-white text-gray-700 py-12 px-6">
<div className="max-w-5xl mx-auto space-y-10">

{/* Trust Message */}
<div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">
Your Enquiries Are Secure
</h3>
<p className="text-sm leading-relaxed">
We treat all enquiries with professionalism and confidentiality.
Any information submitted through this platform is used strictly
to respond to your request and is never shared with third parties.
</p>
</div>

{/* Call To Action */}
<div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
<h3 className="text-lg font-semibold text-gray-900 mb-2">
Let’s Work Together
</h3>
<p className="text-sm leading-relaxed">
Have a project in mind or need a custom solution? Tell us about
your requirements and our team will respond promptly with
professional guidance.
</p>
</div>

{/* Contact FAQs */}
<div>
<h3 className="text-lg font-semibold text-gray-900 mb-4">
Contact Information – FAQs
</h3>

<div className="space-y-4 text-sm">
<div>
<p className="font-medium text-gray-800">
How soon will I receive a response?
</p>
<p>
We typically respond to all enquiries within 24 business hours.
</p>
</div>

<div>
<p className="font-medium text-gray-800">
Do you work with international clients?
</p>
<p>
Yes. We provide services to both local and international
clients across multiple industries.
</p>
</div>

<div>
<p className="font-medium text-gray-800">
Can I request a customized service?
</p>
<p>
Absolutely. Our solutions are tailored to meet your specific
business needs.
</p>
</div>
</div>
</div>

{/* Social & Professional Presence */}
<div>
<h3 className="text-lg font-semibold text-gray-900 mb-3">
Connect With Us
</h3>
<p className="text-sm mb-2">
Stay connected with P.A BAWAYA GROUP through our official
communication channels.
</p>
<p className="text-sm font-medium">
LinkedIn • WhatsApp • Email
</p>
</div>

{/* Compliance Note */}
<div className="border-l-4 border-gray-300 pl-4">
<p className="text-sm">
P.A BAWAYA GROUP is a registered business entity operating in
compliance with applicable regulations, industry standards, and
professional best practices.
</p>
</div>

{/* Priority Support */}
<div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">
Priority Support
</h3>
<p className="text-sm">
Priority assistance is available for active projects, corporate
partners, and ongoing service engagements.
</p>
</div>

{/* Map Context Text */}
<div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">
Office Visits
</h3>
<p className="text-sm">
Our office location is accessible for scheduled visits. Kindly
contact us in advance to arrange an appointment before visiting.
</p>
</div>

{/* Closing Statement */}
<div className="bg-gray-100 rounded-lg p-6 text-center">
<p className="text-sm font-medium text-gray-800">
We look forward to building long-term business relationships
through reliable service delivery, transparency, and excellence.
</p>
</div>

</div>
</section>
);
};

export default ContactExtras