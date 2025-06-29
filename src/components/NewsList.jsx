// ====== src/components/NewsList.jsx ======
import React, { useState } from "react";
import NewsModal from "./NewsModal";
import { Button } from "react-bootstrap";

function NewsList() {
  const [selectedNews, setSelectedNews] = useState(null);

  const newsItems = [
    {
      id: 1,
      title: "Оновлення фонду бібліотеки",
      summary: "Додано нові підручники та посібники з сучасних дисциплін.",
      full: `
        <h5 class="text-primary">Оновлення фонду бібліотеки</h5>
        <p>У червні 2025 року бібліотека НУПП поповнилась новими навчальними матеріалами та підручниками з технічних і гуманітарних дисциплін.</p>
        <ul class="list-group mb-3">
          <li class="list-group-item">📘 Алгоритми та структури даних — 15 примірників</li>
          <li class="list-group-item">📙 Архітектура комп’ютера — 10 примірників</li>
          <li class="list-group-item">📗 Історія української культури — 20 примірників</li>
        </ul>
        <div class="alert alert-info mt-3">
          Для отримання книги звертайтесь до чергового бібліотекаря або подавайте заявку онлайн.
        </div>`
    },
    {
      id: 2,
      title: "Тренінг з інформаційної грамотності",
      summary: "Бібліотека провела тренінг для першокурсників.",
      full: `
        <p>У травні бібліотека провела тренінг з основ інформаційної грамотності, де студенти дізналися про користування електронними каталогами, науковими базами даних та бібліографічними посиланнями.</p>
        <p>Захід відбувся у читальній залі №2 і зібрав понад 60 учасників.</p>`
    },
    {
      id: 3,
      title: "Виставка наукових праць викладачів",
      summary: "Відкрита виставка у головному холі бібліотеки.",
      full: `
        <p>З 10 по 20 червня у бібліотеці діє виставка наукових праць викладачів університету. В експозиції представлено понад 100 публікацій з технічних та гуманітарних напрямів.</p>
        <p>Запрошуємо всіх бажаючих ознайомитись!</p>`
    },
    {
      id: 4,
      title: "Цифровізація бібліотечного фонду",
      summary: "Оцифровано 500 одиниць літератури.",
      full: `
        <p>У рамках проекту цифровізації бібліотеки було оцифровано понад 500 підручників і навчальних посібників. Електронні версії доступні у внутрішній системі університету.</p>`
    },
    {
      id: 5,
      title: "Літературний клуб: зустріч з письменником",
      summary: "Зустріч зі знаним автором відбулася у читальній залі.",
      full: `
        <p>У бібліотеці відбулася зустріч студентів із сучасним українським письменником Іваном Гончаренком. Він презентував свою нову книгу та поділився історіями про літературну творчість.</p>`
    },
    {
      id: 6,
      title: "Ніч у бібліотеці 2025",
      summary: "Інтерактивна подія з вікторинами та кінопоказом.",
      full: `
        <p>Бібліотека НУПП долучилася до міжнародної ініціативи «Ніч у бібліотеці». У програмі були вікторини, квести, виступи студентських колективів і показ фільму про наукову діяльність університету.</p>`
    },
    {
      id: 7,
      title: "Бібліотека для першокурсників",
      summary: "Проведено ознайомчу екскурсію.",
      full: `
        <p>Для студентів першого курсу проведено екскурсії бібліотекою. Вони ознайомилися з фондами, ресурсами, читальними залами та порядком користування літературою.</p>`
    },
    {
      id: 8,
      title: "Ремонт приміщення та оновлення інтер'єру",
      summary: "Бібліотека змінилась: нові меблі та дизайн.",
      full: `
        <p>У червні завершено оновлення інтер'єру бібліотеки. Встановлено нові полиці, робочі місця для студентів та комфортні крісла у читальних залах. Відвідувачі вже висловлюють схвальні відгуки.</p>`
    }
  ];

  return (
    <section className="container my-4">
      <h2 className="mb-4">Останні новини</h2>
      <div className="row">
        {newsItems.map((news) => (
          <div key={news.id} className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 shadow">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{news.title}</h5>
                <p className="card-text">{news.summary}</p>
                <Button
                  variant="primary"
                  onClick={() => setSelectedNews(news)}
                  className="mt-auto align-self-start"
                >
                  Докладніше
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedNews && (
        <NewsModal news={selectedNews} onClose={() => setSelectedNews(null)} />
      )}
    </section>
  );
}

export default NewsList;
