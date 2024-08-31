import React from 'react';

function About() {

    return (
        <div class="py-16 bg-linen">
            <div class="container m-auto bg-linen px-6 text-gray-600 md:px-12 xl:px-6">
                <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div class="md:5/12 lg:w-5/12">
                        {/* <img src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png" alt="image" loading="lazy" width="" height="" /> */}
                        <img src="./professional-photo.png" alt="image" loading="lazy" width="" height="" />
                    </div>
                    <div class="md:7/12 lg:w-6/12">
                        <h2 class="text-2xl text-gray-900 font-bold md:text-4xl">About Me</h2>
                        <p class="mt-6 text-gray-600">I am a Full Stack Web Developer that specializes in Frontend Development and UI/UX design.
                            I love exciting and challenging opportunities to grow in becoming a great, successful professional.
                            I recently invested in myself and completed a coding bootcamp course through the University of Texas at Austin.
                            I received my certification and wish to continue to grow in my knowledge and become a strong web developer.</p>
                        {/* <p class="mt-4 text-gray-600"> Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.</p> */}
                    </div>
                </div>
            </div>
        </div>
    )

    // return (
    //     <section>
    //         <div className="center" id="about">
    //             <h1 className="page-header">About Me</h1>
    //         </div>
    //         <div className="center">
    //             <img
    //                 src="./professional-photo.png"
    //                 alt="about-me"
    //                 className="photo"
    //             />
    //         </div>
    //         <div>
    //             <p>I am a Full Stack Web Developer that specializes in Frontend Development and UI/UX design.
    //                 I love exciting and challenging opportunities to grow in becoming a great, successful professional.
    //                 I recently invested in myself and completed a coding bootcamp course through the University of Texas at Austin.
    //                 I received my certification and wish to continue to grow in my knowledge and become a strong web developer.
    //             </p>
    //         </div>
    //     </section>
    // );
}

export default About;