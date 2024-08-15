'use client';

import { useRouter } from 'next/navigation'
import './about.css'

const About = () => {
    const router = useRouter()
    
    return(
        <div>
            <p>This is an about page.</p>
        </div>
    )
}

export default About