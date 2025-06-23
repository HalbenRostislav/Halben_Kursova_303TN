// ====== src/components/Gallery.jsx ======
import React, { useEffect } from "react";
import $ from "jquery";
import "jquery-ui-dist/jquery-ui";

function Gallery() {
  useEffect(() => {
    $(".gallery-img").hover(function () {
      $(this).effect("bounce", { times: 2 }, 300);
    });
  }, []);

  const galleryItems = [
    { id: 1, text: "Читальна зала", file: "reading-room.jpg" },
    { id: 2, text: "Презентація книг", file: "book-presentation.jpg" },
    { id: 3, text: "Сучасні ресурси", file: "modern-resources.jpg" },
    { id: 4, text: "Електронні каталоги", file: "e-catalog.jpg" },
    { id: 5, text: "Нові надходження", file: "new-books.jpg" },
    { id: 6, text: "Студенти у бібліотеці", file: "students-library.jpg" },
    { id: 7, text: "Захід у бібліотеці", file: "event.jpg" },
    { id: 8, text: "Співпраця з викладачами", file: "teachers.jpg" },
  ];

  return (
    <section className="container my-4">
      <h2 className="mb-4">Галерея</h2>
      <div className="row">
        {galleryItems.map((item) => (
          <div key={item.id} className="col-6 col-md-3 mb-4 d-flex flex-column align-items-center">
            <img
              src={require(`../assets/gallery/${item.file}`)}
              alt={item.text}
              className="gallery-img"
            />
            <p className="text-center mt-2 small">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
