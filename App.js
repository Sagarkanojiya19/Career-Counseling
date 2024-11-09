import React from 'react';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import {

Alert, AlertDescription, AlertTitle, AlertDialog, AlertDialogAction

} from '@/components/ui/alert';

import {

Card, CardHeader, CardTitle, CardContent, CardFooter

} from '@/components/ui/card';

import {

LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line

} from 'recharts';


// Components

import StudentProfile from './StudentProfile';

import CareerExplorer from './CareerExplorer';

import DigitalPortfolio from './DigitalPortfolio';

import VirtualCounseling from './VirtualCounseling';

import Analytics from './Analytics';


const App = () => {

return (

<Router>

<div className="flex flex-col h-screen">

<header className="bg-gray-900 text-white py-4 px-6">

<nav className="flex justify-between items-center">

<Link to="/" className="text-xl font-bold">

Career Counseling Platform

</Link>

<ul className="flex space-x-4">

<li><Link to="/profile">Student Profile</Link></li>

<li><Link to="/explore">Career Explorer</Link></li>

<li><Link to="/portfolio">Digital Portfolio</Link></li>

<li><Link to="/counseling">Virtual Counseling</Link></li>

<li><Link to="/analytics">Analytics</Link></li>

</ul>

</nav>

</header>


<main className="flex-1 p-8">

<Routes>

<Route path="/" element={<Home />} />

<Route path="/profile" element={<StudentProfile />} />

<Route path="/explore" element={<CareerExplorer />} />

<Route path="/portfolio" element={<DigitalPortfolio />} />

<Route path="/counseling" element={<VirtualCounseling />} />

<Route path="/analytics" element={<Analytics />} />

</Routes>

</main>


<footer className="bg-gray-900 text-white py-4 px-6 text-center">

&copy; 2023 Career Counseling Platform

</footer>

</div>

</Router>

);

};


// Home component

const Home = () => {

return (

<div className="grid grid-cols-2 gap-8">

<Card>

<CardHeader>

<CardTitle>Welcome to the Career Counseling Platform</CardTitle>

</CardHeader>

<CardContent>

<p>Explore your interests, discover potential careers, and plan your future.</p>

</CardContent>

<CardFooter>

<Link to="/profile" className="btn btn-primary">Get Started</Link>

</CardFooter>

</Card>


<Card>

<CardHeader>

<CardTitle>Key Features</CardTitle>

</CardHeader>

<CardContent>

<ul className="space-y-4">

<li>Personalized career assessments</li>

<li>Intelligent career recommendations</li>

<li>Digital portfolio builder</li>

<li>Virtual counseling sessions</li>

<li>Analytics and progress tracking</li>

</ul>

</CardContent>

</Card>

</div>

);

};


export default App;