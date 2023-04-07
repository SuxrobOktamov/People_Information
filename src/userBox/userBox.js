import React, { useState } from "react";
import ScrollReveal from "scrollreveal";
import './userBox.css';
import User from "../user/user";
import Img1 from '../assets/images/person1.jpg';
import Img2 from '../assets/images/person2.jpg';
import Img3 from '../assets/images/person3.jpg';
import Img4 from '../assets/images/person4.jpg';
import Img5 from '../assets/images/person5.jpg';
import Img6 from '../assets/images/person6.jpg';
import Img7 from '../assets/images/person7.jpg';
import Img8 from '../assets/images/person8.jpg';
import Img9 from '../assets/images/person9.jpg';
import Img10 from '../assets/images/person10.jpg';

const peopleArr = [
    {
        img: Img1,
        name: "BRET",
        surName: 'Leanne Graham',
        company: 'Robel-Carkery',
        email: 'julian@kory.org',
        phone: '9493-170-9623x156',
        website: 'kale.biz',
        id: 1
    },
    {
        img: Img2,
        name: "BRET",
        surName: 'Leanne Graham',
        company: 'Robel-Carkery',
        email: 'julian@kory.org',
        phone: '9493-170-9623x156',
        website: 'kale.biz',
        id: 2
    },
    {
        img: Img3,
        name: "BRET",
        surName: 'Leanne Graham',
        company: 'Robel-Carkery',
        email: 'julian@kory.org',
        phone: '9493-170-9623x156',
        website: 'kale.biz',
        id: 3
    },
    {
        img: Img4,
        name: "BRET",
        surName: 'Leanne Graham',
        company: 'Robel-Carkery',
        email: 'julian@kory.org',
        phone: '9493-170-9623x156',
        website: 'kale.biz',
        id: 4
    },
    {
        img: Img5,
        name: "BRET",
        surName: 'Leanne Graham',
        company: 'Robel-Carkery',
        email: 'julian@kory.org',
        phone: '9493-170-9623x156',
        website: 'kale.biz',
        id: 5
    },
    {
        img: Img6,
        name: "BRET",
        surName: 'Leanne Graham',
        company: 'Robel-Carkery',
        email: 'julian@kory.org',
        phone: '9493-170-9623x156',
        website: 'kale.biz',
        id: 6
    },
    {
        img:Img7,
        name: "BRET",
        surName: 'Leanne Graham',
        company: 'Robel-Carkery',
        email: 'julian@kory.org',
        phone: '9493-170-9623x156',
        website: 'kale.biz',
        id: 7
    },
    {
        img: Img8,
        name: "BRET",
        surName: 'Leanne Graham',
        company: 'Robel-Carkery',
        email: 'julian@kory.org',
        phone: '9493-170-9623x156',
        website: 'kale.biz',
        id: 8
    },
    {
        img: Img9,
        name: "BRET",
        surName: 'Leanne Graham',
        company: 'Robel-Carkery',
        email: 'julian@kory.org',
        phone: '9493-170-9623x156',
        website: 'kale.biz',
        id: 9
    },
    {
        img:Img10,
        name: "BRET",
        surName: 'Leanne Graham',
        company: 'Robel-Carkery',
        email: 'julian@kory.org',
        phone: '9493-170-9623x156',
        website: 'kale.biz',
        id: 10
    }
]

const UserBox = () => {

    let scroll = ScrollReveal({
        duration: 3000,
        origin: "top",
        distance: "40px",
        reset: true,
        opacity: 0
      });
  
      scroll.reveal(`.user`, {
        interval: 200,
      })
  

    const [state, setState] = useState(peopleArr);

    function remove(id) {
        let Filter = state.filter(item=> !(item.id === id));
        setState(Filter)
    }
    return (
        <div className="user-list">
            {state.map((item) => (
                <User
                    key={item.id}
                    remove={()=>{remove(item.id)}}
                    img={item.img}
                    name={item.name}
                    surName={item.surName}
                    company={item.company}
                    email={item.email} 
                    phone={item.phone}
                    website={item.website}
                    />
            ))}
        </div>
    )
}

export default UserBox;

