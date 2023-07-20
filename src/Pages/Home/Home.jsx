import React from "react";
import {Button} from '../../Components/Button/Button';
import './Home.css';
import Footer from '../../Components/Footer/Footer';
import TextBox from '../../Components/Info_text_box/Text';

function Pag1() {
    return (
    <div className="Pag1">
        <TextBox />
        <Button />
        <Footer />
    </div>
    )
};

export default Pag1;