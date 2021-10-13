import React, { useState } from 'react'
import AutomobileRegistration from './AutomobileRegistration'
import FormImage3 from './FormImage3'

export default function ConsumerRegistrationShop() {
    const [image, setImage] = useState('image/automobile-register.svg')
    return (
        <div className="form-bg container-fluid f-center">
            <div className="container">               
                <div className="form-container row no-gutters">
                <div className="col-md-7 no-gutters">
                   <FormImage3 image={image} />
                </div>
                   <div className="col-md-5 no-gutters">
                        <AutomobileRegistration />
                    </div>
                </div>
               
            </div>
        </div>
    )
}
