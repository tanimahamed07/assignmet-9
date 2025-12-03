import { Fade } from "react-awesome-reveal";

const FAQ = () => {
  return (
    <div className="max-w-5xl mx-auto mt-[100px] p-5 md:p-10">
      {/* Title Animation */}
      <Fade triggerOnce>
        <h1 className="text-4xl md:text-5xl text-primary font-bold text-center mb-10">
          F/Q (Frequently Asked Questions)
        </h1>
      </Fade>

      {/* FAQ Items Animation */}
      <Fade cascade damping={0.12} triggerOnce>
        <div className="space-y-4">
          {/* Question 1 */}
          <div className="collapse collapse-plus bg-base-200 shadow-md">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-semibold">
              1. Do you provide home service?
            </div>
            <div className="collapse-content">
              <p>
                Yes, we provide professional home service for pet grooming, pet
                sitting, training, and more — all at your doorstep.
              </p>
            </div>
          </div>

          {/* Question 2 */}
          <div className="collapse collapse-plus bg-base-200 shadow-md">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-semibold">
              2. How long does pet grooming take?
            </div>
            <div className="collapse-content">
              <p>
                Usually it takes 30 minutes to 1.5 hours depending on your pet's
                size, coat condition, and the chosen grooming package.
              </p>
            </div>
          </div>

          {/* Question 3 */}
          <div className="collapse collapse-plus bg-base-200 shadow-md">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-semibold">
              3. Does my pet need to be vaccinated?
            </div>
            <div className="collapse-content">
              <p>
                Yes, for safety reasons we recommend all pets to be vaccinated
                before receiving any of our services.
              </p>
            </div>
          </div>

          {/* Question 4 */}
          <div className="collapse collapse-plus bg-base-200 shadow-md">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-semibold">
              4. What are the payment methods?
            </div>
            <div className="collapse-content">
              <p>
                You can pay using Cash, Mobile Banking (Bkash/Nagad), Card, or
                Online Payment. Multiple options are available for your
                convenience.
              </p>
            </div>
          </div>

          {/* Question 5 */}
          <div className="collapse collapse-plus bg-base-200 shadow-md">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-semibold">
              5. How can I book a service?
            </div>
            <div className="collapse-content">
              <p>
                You can book instantly through our website’s “Book Now” form.
                You may also contact us via phone or WhatsApp for quick booking.
              </p>
            </div>
          </div>

          {/* Question 6 */}
          <div className="collapse collapse-plus bg-base-200 shadow-md">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-semibold">
              6. Can I reschedule or cancel a booking?
            </div>
            <div className="collapse-content">
              <p>
                Yes, you can reschedule or cancel a booking up to 24 hours
                before the service time. Please contact us via phone or email
                for assistance.
              </p>
            </div>
          </div>

          {/* Question 7 */}
          <div className="collapse collapse-plus bg-base-200 shadow-md">
            <input type="checkbox" />
            <div className="collapse-title text-xl font-semibold">
              7. Are your pet sitters trained and experienced?
            </div>
            <div className="collapse-content">
              <p>
                Absolutely! All our pet sitters are trained, certified, and have
                years of experience in pet care. They treat your pets with love
                and attention.
              </p>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default FAQ;
