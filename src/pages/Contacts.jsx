import React from "react";

function Contacts() {
  return (
    <section className="container my-4">
      <h2 className="mb-3">Контакти</h2>
      <p><strong>Адреса:</strong> м. Київ, вул. Університетська, 1</p>
      <p><strong>Email:</strong> library@university.ua</p>
      <p><strong>Телефон:</strong> +380 44 123 4567</p>
      <div className="mt-3">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2539.961312319398!2d30.516635215896546!3d50.44481157947401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cfcbf352e3e3%3A0x3ee02da2630bb7d9!2z0JrRgNCw0YHQv9C10LrRgiDQn9C10YDQvdC40LrQvtCz0L4!5e0!3m2!1suk!2sua!4v1683123456789!5m2!1suk!2sua"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

export default Contacts;