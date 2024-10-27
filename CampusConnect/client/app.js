import React from 'react';
import TutorProfile from './components/TutorProfile';
import StudentProfile from './components/StudentProfile';
import Messaging from './components/Messaging';
import StudyGroup from './components/StudyGroup';
import Calendar from './components/Calendar';

const App = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">CampusConnect</h1>
            <TutorProfile />
            <StudentProfile />
            <Messaging />
            <StudyGroup />
            <Calendar />
        </div>
    );
};

export default App;
