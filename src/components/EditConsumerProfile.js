import React, { useState } from 'react'
import EditProfile from './EditProfile'
import FormImage from './FormImage'

export default function CEditProfileMain() {
    const [image, setImage] = useState('image/consumer-form-register.svg')
    return (
        <div className="form-bg container-fluid f-center">
            <div className="container">               
                <div className="form-container row no-gutters">
                   <FormImage image={image} />
                   <EditProfile />
                </div>
               
            </div>
        </div>
    )
}
