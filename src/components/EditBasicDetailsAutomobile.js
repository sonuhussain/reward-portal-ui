import React, { useState } from 'react'
import EditAutomobileRegistration from './EditAutomobileRegistration'
import FormImage3 from './FormImage3'

export default function EditBasicDetailsAutomobile() {
    const [image, setImage] = useState('image/automobile-register.svg')
    return (
        <div className="form-bg container-fluid f-center">
            <div className="container">               
                <div className="form-container row no-gutters">
                <div className="col-md-7 no-gutters">
                   <FormImage3 image={image} />
                </div>
                   <div className="col-md-5 no-gutters">
                        <EditAutomobileRegistration />
                    </div>
                </div>
               
            </div>
        </div>
    )
}
