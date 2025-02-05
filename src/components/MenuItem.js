import React from 'react';


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ title, description, imageName, price }) => {
    return (
        <div className="row mb-3">
            {/* Image Column */}
            <div className="col-5 text-center">
                <div className="img-container">
                    <img src={`images/${imageName}`} alt={title} className="img-fluid" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                </div>
            </div>

            {/* Details Column */}
            <div className="col-7">
                <div className="row">
                    <p className="item-name">{title}</p>
                    <p className="item-description">{description}</p>
                </div>

                {/* Price & Button Row */}
                <div className="row align-items-center">
                    <div className="col-8">
                        <p className="item-price">${price}</p>
                    </div>
                    <div className="col-4 text-start">
                        <button type="button" className="button">Add</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;
