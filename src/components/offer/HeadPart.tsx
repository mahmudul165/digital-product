

import Head from 'next/head';

export default function HeadPart() {
  return (
    <div className="flex justify-center items-center h-screen bg-purple-50 p-5">
      <Head>
        <title>All-in-One Digital Business Solution</title>
        <meta name="description" content="All-in-One Digital Business Solution" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex justify-between w-full max-w-5xl">
        <div className="border-2 border-dashed border-purple-400 p-5 text-center bg-white">
          <div className="text-red-600">
            <span className="line-through">রেহাই পাবে</span>
            <span className="line-through">টাকা</span>
          </div>
          <div className="text-green-700 font-bold">
            আজকের জন্য মাত্র <span>৮০০/= টাকা</span>
          </div>
          <div className="flex justify-around my-5">
            <span>22</span><span>Hours</span>
            <span>25</span><span>Minutes</span>
            <span>29</span><span>Seconds</span>
          </div>
          <button className="bg-purple-600 text-white px-5 py-2 rounded mt-2">আজকার কার্যক্রম</button>
        </div>

        <div className="flex flex-col items-end">
          <div className="bg-orange-50 p-2 mb-5">
            🚀 All-in-One E-commerce Pack
            <br />
            ব্যবসা জোরে না না ডিজিটাল - রকেটপ্যাক
            <br />
            একাধিক, এক টাকা পরিমাণ
          </div>
          <div className="bg-purple-600 text-white p-5 rounded text-right">
            <h2 className="text-xl mb-2">All-in-One Digital Business Solution</h2>
            <p className="mb-2">Grow your Business Solution with 5000+ Premium Digital Resources, Tools & Lifetime Access - All in One Pack</p>
            <button className="bg-white text-purple-600 px-5 py-2 rounded">Get Instant Access</button>
            {/* Placeholder for image */}
            <div className="w-40 h-40 bg-gray-200 mt-2"></div>
          </div>
        </div>
      </main>
    </div>
  );
}