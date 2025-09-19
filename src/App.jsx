
import { Suspense } from 'react';
import './App.css'
import Countries from './components/Countries/Countries'

const countriesInfoPromise = fetch("https://openapi.programming-hero.com/api/all")
.then(res => res.json());
// --(01)-- API থেকে ডাটা পাওয়ার জন্য একটা প্রমিজ তৈরী করলাম। এবং সেই প্রমিজ কে JSON Format এ কনর্ভাট করলাম।


function App() { 
  return (
    <>
      <h1>React Core Concepts</h1>
      <Suspense fallback={<p>Data from API is loading ....</p>}>
      {/* --(02)-- API থেকে ডাটা লোড হওয়ার জন্য সে সময় লাগে ওই সময়ে ইউজার কে কোন একটা মেসেজ দেখানোর জন্য সাসপেন্স ব্যবহার করা হয়। */}
        
        <Countries countriesInfoPromise={countriesInfoPromise}>
        {/* --(03)-- আগে বানানো প্রমিজ কে component এর props আকারে মেইন component ফাইলের মধ্যে পাঠালাম */}

        </Countries>
        

      </Suspense>

        
    </>
  )
}

export default App
