//import React from 'react';
import './../css/fields/Fields.css';
import { useNavigate } from 'react-router-dom';

interface Field {
    id: number;
    name: string;
    description?: string;
    image: string;
    rating: number;
    place: string;
}

interface FieldsCartProps {
    field: Field;
    number: string;
}



function FieldsCart({ field, number }: FieldsCartProps) {
    const fieldId = field.id;
    const rating = field.rating;
    const renderStars = () => {
        const stars = [];
        const filledStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        for (let i = 1; i <= 5; i++) {
            if (i <= filledStars) {
                stars.push(
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#E0D163" viewBox="0 0 24 24" stroke='#000000' strokeWidth='0.5'>
                        <path d="M12 .587l3.668 7.568 8.332 1.209-6 5.82 1.416 8.28L12 18.897l-7.416 3.89L6 16.164l-6-5.82 8.332-1.209z" />
                    </svg>
                );
            } else if (i === filledStars + 1 && hasHalfStar) {
                stars.push(
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#E0D163" viewBox="0 0 24 24" stroke='#000000' strokeWidth='0.5'>
                        <defs>
                            <linearGradient id="halfStarGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="50%" style={{ stopColor: '#E0D163' }} />
                                <stop offset="50%" style={{ stopColor: '#C0C0C0' }} />
                            </linearGradient>
                        </defs>
                        <path d="M12 .587l3.668 7.568 8.332 1.209-6 5.82 1.416 8.28L12 18.897l-7.416 3.89L6 16.164l-6-5.82 8.332-1.209z" fill="url(#halfStarGradient)" />
                    </svg>
                );
            } else {
                stars.push(
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#C0C0C0" viewBox="0 0 24 24">
                        <path d="M12 .587l3.668 7.568 8.332 1.209-6 5.82 1.416 8.28L12 18.897l-7.416 3.89L6 16.164l-6-5.82 8.332-1.209z" />
                    </svg>
                );
            }
        }
        return stars;
    };
    const navigate = useNavigate(); // Hook burada çağrılır
    return (

        <div className='fieldspage-list-fields-section-card'>
            <div>
                <img className='fieldspage-list-fields-section-card-images' src={field.image} alt="No photo found" />
            </div>

            <div className='fieldspage-list-fields-section-card-informations'>
                <div className='fieldspage-list-fields-section-card-informations-number'>
                    <span>{number} </span>
                </div>
                <div className='fieldspage-list-fields-section-card-informations-name'>

                    {field.name.toUpperCase()}

                </div>
                <div className='fieldspage-list-fields-section-card-informations-place'>
                    <div >
                        <span className="material-symbols-outlined" style={{ fontSize: '1.024rem', color: '#1D3C4E' }}>
                            location_on
                        </span>
                    </div>
                    <div style={{ fontSize: '13px', opacity: 0.47, paddingLeft: '1px' }}>
                        {field.place}
                    </div>


                </div>
                <div className='fieldspage-list-fields-section-card-informations-rating'>
                    {renderStars()}
                </div>
                <div className='fieldspage-list-fields-section-card-informations-button'>
                    <button className='fieldspage-list-fields-section-card-informations-button-go' onClick={() => navigate('/fields/field-details/'+fieldId)}>
                        <div style={{}}>
                            Tesise git
                        </div>
                        <div style={{ paddingLeft: '30px', paddingTop: '5px' }}>
                            <span className="material-symbols-outlined" style={{ fill: 'white', fontSize: '30px' }}>
                                arrow_right
                            </span>
                        </div>
                    </button>
                </div>

            </div>
        </div>
    );
}

export default FieldsCart;
