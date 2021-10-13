import React, { useState } from 'react'
import FormImage3 from './FormImage3'
import EditProfileAutomobile from './EditProfileAutomobile'

export default function EditProfileAutomobileStep3() {
    const [image, setImage] = useState('image/automobile-register.svg')
    return (
        <div className="form-bg container-fluid f-center">
            <div className="container">               
                <div className="form-container row no-gutters">
                <div className="col-md-7 no-gutters">
                   <FormImage3 image={image} />
                </div>
                   <div className="col-md-5 no-gutters">
                        <EditProfileAutomobile />
                    </div>
                </div>
                </div>
            </div>
        
    )
}
