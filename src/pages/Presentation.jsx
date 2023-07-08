import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import {Slider } from '../components/slider';
import { LoginCard } from '../components/loginCard';
import {Footer} from '../components/footer';

export const Presentation = () => {
    return (
        <div>
            <Slider />
            <div>
                <LoginCard/>
            </div>

<Footer/>
        </div>
      )
};