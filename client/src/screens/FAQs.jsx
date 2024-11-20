import React from "react";
import QnA from "../components/QnA";
import useDocumentTitle from "../hooks/useDocumentTitle";
import Heading from "../partials/Heading";

const FAQs = () => {
    useDocumentTitle("FAQs - HSJN FinWisdom Pvt Ltd");

    return (
        <>
            <Heading heading="Frequently Asked Questions" image="/illustrations/3.png" />

            <div className="container">
                <div className="row">
                    <div className="col-lg-10 col-12 mx-auto jelly">
                        <QnA
                            Q="What makes HSJN FinWisdom's Technical Analysis Courses unique?"
                            A="Our courses are crafted by seasoned experts, combining theoretical knowledge with practical insights. Dive into dynamic learning experiences that empower you to navigate the markets with confidence."
                            id="1"
                        />
                    </div>
                    <div className="col-lg-10 col-12 mx-auto">
                        <QnA
                            Q="How do I enroll in Technical Analysis Courses at HSJN FinWisdom?"
                            A="Enrolling in our Technical Analysis Courses is easy! Simply navigate to the Courses section, choose the program that suits your needs, and follow the registration process. Once enrolled, you'll gain immediate access to our comprehensive learning materials."
                            id="3"
                        />
                    </div>
                    <div className="col-lg-10 col-12 mx-auto">
                        <QnA
                            Q="What is the duration of the Technical Analysis Courses?"
                            A="The duration of our courses varies, typically ranging from a few weeks to a couple of months, depending on the specific program."
                            id="5"
                        />
                    </div>
                    <div className="col-lg-10 col-12 mx-auto">
                        <QnA
                            Q="Are there any prerequisites for enrolling in the courses?"
                            A="No prerequisites are needed for our introductory courses. However, some advanced courses may require a basic understanding of financial markets."
                            id="6"
                        />
                    </div>
                    <div className="col-lg-10 col-12 mx-auto">
                        <QnA
                            Q="Can I access the courses on mobile devices?"
                            A="Yes, our courses are designed to be accessible on various devices, including mobile phones and tablets."
                            id="7"
                        />
                    </div>
                    <div className="col-lg-10 col-12 mx-auto">
                        <QnA
                            Q="Is there a certification upon completion of the course?"
                            A="Yes, participants receive a certificate upon successful completion of the course."
                            id="8"
                        />
                    </div>
                    <div className="col-lg-10 col-12 mx-auto">
                        <QnA
                            Q="How can I contact HSJN FinWisdom for further inquiries?"
                            A="You can reach us through our contact page on the website, or email us directly at support@hsjnfinwisdom.com."
                            id="9"
                        />
                    </div>
                    <div className="col-lg-10 col-12 mx-auto">
                        <QnA
                            Q="Do you offer any discounts for group enrollments?"
                            A="Yes, we offer discounts for group enrollments. Please contact us for more details."
                            id="10"
                        />
                    </div>
                    <div className="col-lg-10 col-12 mx-auto">
                        <QnA
                            Q="What payment methods do you accept?"
                            A="We accept various payment methods, including credit/debit cards, net banking, and e-wallets."
                            id="11"
                        />
                    </div>
                    <div className="col-lg-10 col-12 mx-auto">
                        <QnA
                            Q="Are there any follow-up sessions after the course?"
                            A="Yes, we offer follow-up sessions and support to help you apply what you've learned."
                            id="12"
                        />
                    </div>
                </div>
            </div>

            <p className="text-muted container justify">
                <br />
                At HSJN FinWisdom, we believe in transparency and empowering our community with the
                knowledge and tools they need. If you have any more questions, feel free to reach
                out to us through our email:{" "}
                <a href="mailto:contact@hsjnfinwisdom.com" className="text-decoration-none text-success">
                    contact@hsjnfinwisdom.com
                </a>
            </p>
        </>
    );
};

export default FAQs;
