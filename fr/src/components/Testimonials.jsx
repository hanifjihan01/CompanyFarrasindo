import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import anita from '../assets/bunita.jpg'; 
import hairuddin from '../assets/pakudin.jpg';
import tono from '../assets/tonobaruae.PNG';
import asep from '../assets/pakasepfp3.jpg';
import jazuli from '../assets/pakjazulinew.jpg';
import alamsyah from '../assets/alamsyahbaru.PNG';
import '../index.css'; 

function Testimonials() {
  const testimonials = [
    {
      project: "Perumahan Taman Asri - Tanggerang",
      name: "Ibu Anita (Project Owner)",
      comment: "Saya tau Citipump dari Tokopedia dan reviewnya bagus-bagus. Yang jelas puas banget, ini orderan saya yang kedua dan yang pertama tuh hasilnya bagus banget.",
      image: anita,
    
    },
    {
      project: "Hotel Wellness & Resort - Bogor",
      name: "Bapak Hairuddin (Project Owner)",
      comment: "Timnya tangguh dan mesinnya semua lengkap, kerjasama dan komunikasi yang terjalin sangat baik sehingga mempermudah proyek untuk selesai.",
      image: hairuddin
    },
    {
      project: "Rumah - Bintaro",
      name: "Bapak Tono (Project Contractor)",
      comment: "Pompa Betonnya bagus dan secara servis memuaskan. Dan pastinya akan pakai pompa dari Citipump lagi.",
      image: tono
    },
    {
      project: "Villa Pribadi - Bogor",
      name: "Bapak Asep (Project Contractor)",
      comment: "Kualitas dan harganya sangat baik dibanding kompetitor yang lain.",
      image: asep
    },
    {
      project: "Proyek Rumah Tinggal - Meruya",
      name: "Bapak Jazuli (Project Contractor)",
      comment: "Kebetulan sudah pernah pakai untuk proyek sebelumnya, dan saya jadi percaya karena hasilnya terbukti baik.",
      image: jazuli
    },
    {
      project: "Proyek Perumahan Cluster - Meruya",
      name: "Bapak Alamsyah (Project Contractor)",
      comment: "Karena lokasi yang dekat dari proyek dan kualitasnya yang bagus.",
      image: alamsyah
    },
  ];

  


  return (
    <div className="testimonial-background py-5">
      <div className="container">
        <div className="testimonial-section">
          <div className="text-container">
            <h2>What our customers are saying</h2>
          </div>
          <div className="testimonial-container">
            <div className="testimonial-cards">
              {testimonials.concat(testimonials).map((testimonial, index) => (
                <div className="card h-100" key={index}>
                  <img src={testimonial.image} className="card-img-top" alt={testimonial.name} />
                  <div className="card-body">
                    <h5 className="card-title">{testimonial.project}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{testimonial.name}</h6>
                    <p className="card-text">"{testimonial.comment}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
