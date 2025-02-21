import React from 'react';

const Testimonial = () => {
    const testimonials = [
        {
            id: 1,
            name: "John Doe",
            comment: "Amazing bicycles! The quality and service are top-notch.",
            image: "path-to-john-doe-image.jpg",
        },
        {
            id: 2,
            name: "Jane Smith",
            comment: "I love my new bike. It's perfect for my daily commute.",
            image: "path-to-jane-smith-image.jpg",
        },
    ];

    return (
        <div className="py-12 bg-gray-100">
            <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
                {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-lg text-center">
                        <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-20 h-20 rounded-full mx-auto mb-4"
                        />
                        <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                        <p className="text-gray-600">{testimonial.comment}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonial;