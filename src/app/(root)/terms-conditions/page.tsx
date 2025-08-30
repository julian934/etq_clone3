'use client'
import React from 'react'
import NavBar from '@/app/components/ui/navRedux/navbar'
import LowerBanner from '@/app/components/ui/lowerBanner/lowerbanner'
import Footer from '@/app/components/ui/footer/footer'

type Props = {}

const TermsAndConditions = (props: Props) => {
  return (
    <div className=" mx-auto p-6 text-gray-800 bg-white">
      <NavBar/>
      <div className='max-w-[60vw] flex flex-col justify-self-center py-4' >
      <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>

<p className="mb-4">Last updated: August 5, 2025</p>

<p className="mb-4">
  Please read these terms and conditions (&quot;terms&quot;, &quot;terms and conditions&quot;) carefully before using [yourwebsite.com] website (the &quot;service&quot;) operated by [Your Company Name] (&quot;us&quot;, &quot;we&quot;, &quot;our&quot;).
</p>

<h2 className="text-2xl font-semibold mt-6 mb-2">1. Conditions of Use</h2>
<p className="mb-4">
  We will provide their services to you, which are subject to the conditions stated below. Every time you visit this website or use its services, you accept the following conditions. This is why we urge you to read them carefully.
</p>

<h2 className="text-2xl font-semibold mt-6 mb-2">2. Privacy Policy</h2>
<p className="mb-4">
  Before you continue using our website, we advise you to read our privacy policy regarding our user data collection. It will help you better understand our practices.
</p>

<h2 className="text-2xl font-semibold mt-6 mb-2">3. Communications</h2>
<p className="mb-4">
  By using this website, you consent to receive electronic communications from us. If you subscribe to our newsletter or contact form, you may receive regular emails. You can opt out at any time.
</p>

<h2 className="text-2xl font-semibold mt-6 mb-2">4. Copyright</h2>
<p className="mb-4">
  Content published on this website (digital downloads, images, texts, graphics, logos) is the property of [Your Company Name] and/or its content creators and protected by international copyright laws.
</p>

<h2 className="text-2xl font-semibold mt-6 mb-2">5. Applicable Law</h2>
<p className="mb-4">
  By visiting this website, you agree that the laws of [Your State/Country], without regard to principles of conflict laws, will govern these terms and conditions.
</p>

<h2 className="text-2xl font-semibold mt-6 mb-2">6. User Accounts</h2>
<p className="mb-4">
  If you create an account on our website, you are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account. We reserve the right to terminate accounts that are abusive or violate our policies.
</p>

<h2 className="text-2xl font-semibold mt-6 mb-2">7. Modifications</h2>
<p className="mb-4">
  We reserve the right to update or change our terms and conditions at any time. Continued use of the service after such changes constitutes your acceptance of the new terms.
</p>

<h2 className="text-2xl font-semibold mt-6 mb-2">8. Contact Us</h2>
<p className="mb-4">
  If you have any questions about these Terms, please contact us at [your email or support page].
</p>

      </div>
    <LowerBanner/>
    <Footer/>
  </div>
  )
}

export default TermsAndConditions