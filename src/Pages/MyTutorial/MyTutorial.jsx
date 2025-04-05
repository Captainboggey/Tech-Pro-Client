import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import MyTutorialCard from './MyTutorialCard';

const MyTutorial = () => {
    const { user } = useContext(AuthContext)
    const [tutorials, setTutorials] = useState([])
    useEffect(() => {
        fetch(`http://localhost:4000/becomeTeacher?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setTutorials(data))
    }, [user?.email])
    return (
        <div>
            <h2 className="text-center text-4xl my-10">My Tutorials</h2>
            <div className='my-10 '>
                {
                    tutorials.map(tutorial=><MyTutorialCard tutorial={tutorial} key={tutorial._id}></MyTutorialCard>)

                }

            </div>
        </div>
    );
};

export default MyTutorial;