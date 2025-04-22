import PageLayout from "@/components/page-layout"

export default function TermsPage() {
  return (
    <PageLayout title="Terms & Privacy" subtitle="Our commitment to protecting your data and defining our relationship">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Terms of Service</h2>
            <p className="mb-4">
              Welcome to OceanIntel. By accessing our website and services, you agree to be bound by these Terms of
              Service.
            </p>

            <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-3">1. Subscription and Services</h3>
            <p className="mb-4">
              OceanIntel provides subscription-based access to fishing intelligence, forecasts, and related services. By
              subscribing to OceanIntel, you gain access to our proprietary Pelagix™ model and associated features based
              on your subscription tier.
            </p>

            <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-3">2. Account Responsibilities</h3>
            <p className="mb-4">
              You are responsible for maintaining the confidentiality of your account credentials and for all activities
              that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
            </p>

            <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-3">3. Payment and Billing</h3>
            <p className="mb-4">
              Subscription fees are charged on a recurring basis according to the plan you select. You may cancel your
              subscription at any time, and your access will continue until the end of your current billing period.
            </p>

            <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-3">4. Intellectual Property</h3>
            <p className="mb-4">
              All content, features, and functionality of OceanIntel, including but not limited to the Pelagix™ model,
              are owned by OceanIntel and are protected by copyright, trademark, and other intellectual property laws.
            </p>

            <h2 className="text-2xl font-bold text-blue-900 mt-10 mb-4">Privacy Policy</h2>

            <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-3">1. Information We Collect</h3>
            <p className="mb-4">
              We collect information you provide directly to us, such as your name, email address, and payment
              information. We also collect information about your use of our services, including fishing locations,
              preferences, and catch data.
            </p>

            <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-3">2. How We Use Your Information</h3>
            <p className="mb-4">
              We use your information to provide, maintain, and improve our services, to process your transactions, to
              communicate with you, and to personalize your experience. Your fishing data helps us improve our
              predictive models and provide more accurate forecasts.
            </p>

            <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-3">3. Data Security</h3>
            <p className="mb-4">
              We implement appropriate security measures to protect your personal information. However, no method of
              transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute
              security.
            </p>

            <h3 className="text-xl font-semibold text-blue-800 mt-6 mb-3">4. Your Rights</h3>
            <p className="mb-4">
              You have the right to access, correct, or delete your personal information. You may also object to or
              restrict certain processing of your information. To exercise these rights, please contact us at
              privacy@oceanintel.com.
            </p>

            <p className="mt-10 text-sm text-gray-500">Last updated: April 21, 2023</p>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
