import React, { useState } from 'react';
import '../index.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import client2 from '../assets/jenis.jpg';
import client3 from '../assets/apaitu.jpg';
import client4 from '../assets/pengecoran.jpg';
import client5 from '../assets/keuntungan.jpg';
import client6 from '../assets/terpanjang.jpg';
import client7 from '../assets/beton.jpg';
import project from '../assets/testing01.JPG';





const portfolioItems = [
  { 
    imgSrc: client6, 
    title: 'Longest Concrete Pump in Indonesia', 
    date: ' 20 September 2024',
    content: (
      <>
      
        <p>Truck Concrete Pump dengan panjang boom 60 meter, merupakan Truck Pump dengan bentangan boom terpanjang yang ada di Indonesia serta mampu memberikan solusi alternatif untuk para Kontraktor dalam menjalankan metode pengecoran.</p>
        <p>PT Farrasindo Perkasa, Concrete Machinery Expert, menyediakan Concrete Machinery seperti, Truck Pump, Moli Pump, Stationery Pump, Placing Boom, Truck Mixer, Mobile Batching Plant, Truck Crane dll.</p>
        <p>PT. Farrasindo Perkasa sudah menjadi kontraktor andalan dari pemerintah Indonesia dan juga berbagai macam perusahaan pengembang perumahan dan juga perusahaan swasta. Kami sudah memiliki reputasi yang sangat baik di bidang pelayanan penyedia jasa concrete pump. Alat yang kami sediakan juga lengkap dengan pekerja yang sudah ahli di bidangnya. Dengan demikian, Anda tidak perlu ragu untuk menggunakan jasa kami.</p>
        <p>Jika Anda ingin menggunakan jasa concrete pump dari PT. Farrasindo Perkasa, bisa menghubungi nomor yang ada di bawah ini.</p>
        <p><strong>Untuk booking / pemesanan hubungi :</strong></p>
        <p>No.Telp: 0815 7474 7474 / 0815 7547 3390</p>
        <p>Email: marketing@farrasindo-cp.co.id, farrasindo.group@gmail.com</p>
      </>
    ),
    overlayText: '',
    city: 'Jakarta'
  },
  { 
    imgSrc: client4,
    title: 'Concrete Pump, A Giant Machine Assisting the Concrete Pouring Process', 
    date: ' 20 September 2024',
    content: (
      <>
         <p><strong>Halo, Sobat Beton!</strong></p>
         <p>Kalian pasti sudah tidak asing lagi dengan yang namanya pengecoran beton, bukan? Seperti yang kita ketahui, pengecoran beton merupakan proses yang cukup sulit dan memakan banyak waktu saat kita ingin membangun rumah. Namun, apakah kalian tahu bahwa ada mesin raksasa yang membantu dalam mempermudah proses pengecoran ini, lho!</p>
         <p>Mesin raksasa tersebut adalah Concrete Pump atau bisa kita sebut sebagai pompa beton. <strong> Concrete Pump (Pompa Beton) </strong> adalah mesin yang digunakan untuk memindahkan beton cair dari tempat pencampuran ke lokasi pengecoran dengan cara menghisap dan menyalurkannya melalui pipa. Pipa tersebut biasa dikendalikan ketika ada tekanan, tetapi untuk mengisi kembali ke dalam corong (hopper), corong tersebut harus dalam keadaan kosong.</p>
         <p>Biasanya, Concrete Pump digunakan untuk mengecor lempengan beton, lantai basement, ataupun pondasi dasar kolam renang. Pengecoran beton sendiri dilakukan dengan menggunakan beton yang terdiri dari campuran semen, pasir, dan kerikil, serta air sebagai bahan pengikat. Dengan menggunakan Concrete Pump (Pompa Beton), proses pengecoran menjadi lebih mudah dan efisien, terutama untuk proyek-proyek besar yang membutuhkan volume beton yang banyak.</p>
         <p>Dengan bentuknya yang raksasa, <strong> Concrete Pump (Pompa Beton) </strong> juga memiliki beberapa komponen penting seperti pompa hidrolik, pipa penghisap, pipa saluran, dan nozzle. Pompa hidrolik bertanggung jawab untuk memompa beton dari tempat pencampuran ke pipa penghisap. Pipa penghisap kemudian menarik beton ke dalam pipa saluran dan mengirimkannya ke nozzle. Nozzle kemudian mengarahkan aliran beton ke lokasi pengecoran yang diinginkan.</p>
         <p> <strong>Concrete Pump (Pompa Beton) </strong> memiliki beberapa keunggulan dibandingkan dengan metode pengecoran tradisional menggunakan keranjang (bucket) atau conveyor. Pertama, pompa beton dapat menjangkau area yang sulit diakses dan membawa beton ke tempat yang lebih tinggi. Kedua, pompa beton dapat menyalurkan beton dengan kecepatan dan volume yang lebih besar, sehingga dapat meningkatkan produktivitas dan menghemat waktu. Selain itu, pompa beton juga dapat mengurangi risiko cedera pekerja karena mengurangi jumlah pekerja yang harus berada di atas keranjang atau di sekitar area pengecoran.</p>
         <p>Meskipun pompa beton memiliki beberapa keunggulan, penggunaannya juga memiliki risiko. Salah satu risiko utama adalah kebocoran atau pecahnya pipa, yang dapat mengakibatkan cedera serius pada pekerja dan kerusakan pada properti. Oleh karena itu, sangat penting untuk memastikan bahwa pompa beton dan semua komponennya dalam kondisi baik sebelum digunakan. Penggunaan pompa beton harus dilakukan oleh orang yang terlatih dan berpengalaman untuk meminimalkan risiko cedera dan kerusakan.</p>
         <p>Selain dilihat dari keunggulan dan kekurangannya, saat ini ada beberapa jenis <strong> Concrete Pump (Pompa Beton) </strong> yang ada di Indonesia. Jenis tersebut telah disesuaikan dengan kebutuhan pembangunan agar dapat berfungsi secara optimal. Beberapa jenis pompa beton yaitu, Concrete Pump (Longboom, Super Longboom, Master Longboom), Mini Concrete Pump, Standard Concrete Pump, dan Portable Concrete Pump.</p>
         <p>Pada setiap jenis Concrete Pump tersebut, terdapat ciri khusus yaitu, adanya pipa yang panjangnya beragam. Hal ini tergantung dengan jangkauan horizontalnya. Melalui pompa inilah, agregat disalurkan ke tempat pengecoran. Ukuran agregat maksimum yang bisa melalui pompa ini adalah 63 mm. Namun, ukuran agregat sendiri juga bervariasi atau dapat lebih besar. Ukurannya sendiri menyesuaikan dengan spesifikasi Concrete Pump di pabrik. Karena untuk konstruksi tertentu, bisa saja memakai agregat khusus dan butuh pompa khusus juga.</p>
         <p>Bagaimana, Sobat Beton? Apakah kalian tertarik untuk menggunakan Concrete Pump (Pompa Beton) saat ingin melakukan pengecoran pada bangunan yang kalian bangun?</p>
      </>
    ), 
    overlayText: '',
    city: 'bandung'
   },
  {
     imgSrc: client3,
     title: 'What is a concrete pump',
     date: ' 20 September 2024',
     content: (
      <>
        <p>Pompa beton / concrete pump adalah alat yang digunakan untuk mendorong hasil cairan beton yang sudah diolah dari mixer truck. Biasanya, concrete pump digunakan untuk mengecor lempengan beton, lantai basement, atau bisa juga pondasi dasar kolam renang. Pada dasarnya, concrete pump digunakan untuk mengerjakan pengecoran yang sulit dilakukan secara manual.</p>
        <p>PT. FARRASINDO PERKASA memiliki Concrete Pump terbanyak di Indonesia dengan jumlah armada lebih dari 300  unit dengan berbagai macam jenis dan brand yang berbeda. Dengan beberapa tipe didalamnya, seperti Mini Pump, Standart, Long Boom, Super Long Boom dan Extra Double Super Long Boom yang sudah dipercaya menangani proyek-proyek di Indonesia.</p>
        <p>PT. FARRASINDO PERKASA sudah menjadi kontraktor andalan dari pemerintah Indonesia dan juga berbagai macam perusahaan pengembang perumahan dan juga perusahaan swasta. Kami sudah memiliki reputasi yang sangat baik di bidang pelayanan penyedia jasa concrete pump. Alat yang kami sediakan juga lengkap dengan pekerja yang sudah ahli di bidangnya. Dengan demikian, Anda tidak perlu ragu untuk menggunakan jasa kami. Jika Anda ingin menggunakan jasa concrete pump dari PT. FARRASINDO PERKASA, bisa menghubungi nomor yang ada di sini.</p>
        <p><strong>Untuk booking / pemesanan hubungi :</strong></p>
        <p>No.Telp: 0815 7474 7474 / 0815 7547 3390</p>
        <p>Email: marketing@farrasindo-cp.co.id, farrasindo.group@gmail.com</p>
      </>
     ),
     overlayText: '' 
  },

  { 
    imgSrc: client5, 
    title: 'Advantages of using a Concrete Pump', 
    date: ' 20 September 2024',
    content: (
      <>
        <p>Menggunakan Concrete Pump akan memudahkan pekerja bangunan untuk melakukan pekerjaannya. Karena, biasanya pengecoran bahan dilakukan secara manual, dengan menggunakan concrete pump hasilnya akan lebih cepat selesai dan lebih efektif pula dalam membantu pekerja menyelesaikan pekerjaannya. Dengan menggunakan pompa beton dapat membantu memudahkan para pekerja untuk bisa menjangkau area pembangunan yang sulit dijangkau, seperti lantai 2 ke atas atau lantai basement bawah tanah.</p>
        <p><strong>Keuntungan : </strong></p>
        <p>Untuk keuntungan dalam sebuah proyek didapatkan berdasarkan biaya total proyek dan dinyatakan dalam persentase. Untuk jumlah keuntungan yang didapatkan antara 8% hingga 15% dari jumlah total biaya proyek berdasarkan risiko yang dihadapi dalam proyek. </p>
        <p>PT. FARRASINDO PERKASA sudah menjadi kontraktor andalan dari pemerintah Indonesia dan juga berbagai macam perusahaan pengembang perumahan dan juga perusahaan swasta. Kami sudah memiliki reputasi yang sangat baik di bidang pelayanan penyedia jasa concrete pump. Alat yang kami sediakan juga lengkap dengan pekerja yang sudah ahli di bidangnya. Dengan demikian, Anda tidak perlu ragu untuk menggunakan jasa kami. Jika Anda ingin menggunakan jasa concrete pump dari PT. FARRASINDO PERKASA, bisa menghubungi nomor yang ada di sini.</p>
        <p><strong>Untuk booking / pemesanan hubungi :</strong></p>
        <p>No.Telp: 0815 7474 7474 / 0815 7547 3390</p>
        <p>Email: marketing@farrasindo-cp.co.id, farrasindo.group@gmail.com</p>
      </>
    ), 
    overlayText: '' 
  },
  { 
    imgSrc: client2, 
    title: 'Types of Concrete Pump',
    date: ' 20 September 2024',
    content: (
      <>
        <p>Kami memiliki beberapa jenis concrete pump. Berikut ini kami akan menjelaskan jenis jenis dari concrete pump yang biasa digunakan pada perusahaan konstruksi.</p>
        <p>1. Concrete Pump Long boom</p>
        <p>Concrete pump jenis ini biasanya diperuntukkan untuk bangunan tinggi yang bisa mencapai lantai 4 keatas seperti gedung perkantoran, mall, apartemen, dan sebagainya. Selain itu, bangunan yang memiliki ketinggian 15 meter keatas. Bar beton atau concrete pressure-nya berada di kisaran 8 mpa (80 bar) sampai 40 mpa (400 bar), tergantung dari tinggi bangunannya.</p>
        <p>2. Concrete Pump Mini</p>
        <p>Concrete pump jenis ini biasanya dipakai untuk bangunan yang letaknya berada di jalanan sempit yang hanya bisa diakses kendaraan mini truck. Biasanya, concrete pump jenis ini hanya dipakai untuk pengecoran rumah yang berada di level ketinggian 1 sampai dengan 2 lantai keatas.</p>
        <p>3. Concrete Pump Standard</p>
        <p>Concrete pump jenis ini biasanya diperuntukkan untuk bangunan yang rendah seperti ruko, rumah pribadi, restoran, dan sebagainya. Biasanya, bangunan yang menggunakan pompa beton ini ketinggian bangunannya kurang dari 20 meter. Bar beton atau concrete pressure-nya berada di kisaran 4 mpa (40 bar) sampai dengan 7 mpa (70 bar).</p>
        <p>4. Fortable</p>
        <p>Biasa disebut dengan pompa kodok, digunakan untuk bangunan proyek seperti waduk, bendungan, pelabuhan, pondasi menara telekomunikasi, dan sebagainya.</p>
        <p><strong>Untuk booking / pemesanan hubungi :</strong></p>
        <p>No.Telp: 0815 7474 7474 / 0815 7547 3390</p>
        <p>Email: marketing@farrasindo-cp.co.id, farrasindo.group@gmail.com</p>
      </>
    ), 
    overlayText: '' 
  },
  { 
    imgSrc: client7, 
    title: 'A truck batch pump or mobile batch pump is a tool used to pump concrete.', 
    date: ' 20 September 2024',
    content: (
      <>
        <p>Jika berbicara mengenai pengecoran, sudah pasti kita akan membahas mengenai beton. Beton merupakan sebuah bahan bangunan yang terbuat dari campuran antara semen, air, agregat kasar seperti kerikil atau batu pecah, dan agregat halus seperti pasir. Bahan ini biasanya digunakan untuk membuat struktur bangunan seperti lantai, dinding, kolom, dan pondasi. Beton memiliki kekuatan dan ketahanan yang tinggi terhadap tekanan dan beban berat, sehingga sering digunakan dalam konstruksi bangunan dan infrastruktur. Selain itu, beton juga memiliki sifat yang tahan terhadap kebakaran dan gempa bumi</p>
        <p>Beton ready mix adalah beton yang telah dicampur sebelumnya di pabrik beton dan dikirim ke lokasi proyek dalam keadaan siap pakai. Proses pencampuran beton ready mix dilakukan di pabrik beton dengan menggunakan alat pencampur beton yang otomatis dan terkontrol, sehingga kualitas dan kekuatan beton dapat dijamin. Berbeda dengan beton yang diproses dengan metode konvensional.</p>
        <p>Penggunaan beton ready mix memiliki beberapa keuntungan, antara lain waktu pelaksanaan pekerjaan yang lebih cepat, kualitas beton yang lebih baik karena proses pencampuran yang terkontrol, penghematan biaya karena tidak perlu menyediakan peralatan dan tenaga untuk mencampur beton secara manual, serta penghematan waktu karena pengiriman beton ready mix dapat dilakukan secara terjadwal. Oleh karena itu, beton ready mix sering digunakan dalam proyek-proyek konstruksi besar seperti pembangunan jalan raya, gedung-gedung tinggi, jembatan, dan proyek-proyek infrastruktur lainnya.</p>
        <p>Beton ready mix memiliki beberapa kelebihan yang membuatnya menjadi pilihan yang baik dalam pembangunan bangunan dan infrastruktur. Kualitas beton ready mix sudah pasti terjamin dan juga dapat menghemat waktu serta biaya dalam pembuatannya, sehingga proyek konstruksi dapat diselesaikan lebih cepat. Selain dapat menghemat waktu, tentunya proses pembuatan beton ready mix dapat menghemat tenaga dan peralatan, karena dalam pembuatannya hanya membutuhkan beberapa peralatan saja.</p>
        <p>Dalam beton ready mix, proporsi bahan dan proses pencampuran beton diatur dengan sangat baik sehingga menghasilkan beton dengan konsistensi dan kekuatan yang terjaga. Hal ini membuat beton ready mix lebih unggul daripada beton yang dicampur secara manual. Dengan kelebihan-kelebihan ini, beton ready mix menjadi pilihan yang tepat untuk proyek-proyek konstruksi yang membutuhkan kualitas dan kekuatan beton yang tinggi serta efisiensi waktu dan biaya.</p>
        <p>Meskipun memiliki banyak kelebihan, beton ready mix juga memiliki beberapa kekurangan yang perlu diperhatikan. Dalam hal biaya pengiriman, beton ready mix sendiri membutuhkan biaya lebih untuk mengirimkan truck mixer terutama jika lokasi sulit untuk dijangkau. Waktu penggunaan beton ready mix juga sangat singkat, yaitu sekitar 2 jam setelah dicampur di pabrik beton. Oleh karena itu, beton ready mix harus segera digunakan setelah tiba di lokasi proyek, jika tidak beton akan mengeras dan tidak dapat digunakan.</p>
        <p>Meskipun memiliki beberapa kekurangan, beton ready mix tetap menjadi pilihan yang populer dalam proyek konstruksi karena keuntungan-keuntungannya yang lebih banyak dan kekurangan-kekurangannya yang dapat diatasi. Penting bagi kontraktor atau pengembang untuk mempertimbangkan kelebihan dan kekurangan dari beton ready mix sebelum memutuskan untuk menggunakannya dalam proyek konstruksi.</p>
      </>
    ), 
    overlayText: '' 
  },
];



const ArticlePage = () => {
  const [portfolioIndex, setPortfolioIndex] = useState(6); 
  const [searchQuery, setSearchQuery] = useState(''); 
  const [selectedPortfolio, setSelectedPortfolio] = useState(null); 
  const [isAnimating, setIsAnimating] = useState(false); 
  const [selectedCity, setSelectedCity] = useState(''); 
  
 

  const handleShowMoreClick = () => {
    setPortfolioIndex(portfolioItems.length); 
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value); 
  };

  const handlePortfolioClick = (item) => {
    setIsAnimating(true);
    setTimeout(() => {
      setSelectedPortfolio(item);
    }, 300); 
  };

  const handleGoBackClick = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setSelectedPortfolio(null);
    }, 300); 
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };


  const filteredPortfolios = portfolioItems.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.content.toLowerCase().includes(searchQuery.toLowerCase())  &&
    (selectedCity === '' || item.city.toLowerCase() === selectedCity.toLowerCase())
    
  );

  const visiblePortfolios = filteredPortfolios.slice(0, portfolioIndex);
  

  return (

    
    
    <div className="portfolio-page">
      <Header />

      
      <div
        className="portfolio-background"
        style={{
          backgroundImage: `url(${project})`,
          width: '100%',
          height: '500px',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
        }}
      >
        <div className="portfolio-title-overlay">
        <h2 className="background-title"><b>Article</b></h2>
        </div>
      </div>
      <div className="container">
        <section id="portfolio" className="py-5">
          {!selectedPortfolio ? (
            <>
            
              <div className="portfolio-grid">
                {visiblePortfolios.map((item, index) => (
                  <div className="portfolio-card" key={index}>
                    <div className="portfolio-img-container">
                      <img src={item.imgSrc} alt={`Portfolio ${index}`} className="portfolio-img" />
                      <div className="overlay-text">{item.overlayText}</div>
                      
                    </div>
                    
                    <div className="portfolio-card-body">
                      <h3 className="portfolio-card-title">
                        <a
                          href="#"
                          className="portfolio-link"
                          onClick={() => handlePortfolioClick(item)}
                        >
                          {item.title}
                        
                         
                          
                          
                          
                        </a>
                      </h3>
                      
                    </div>
                  </div>

                  
                ))}
              </div>
              
              {portfolioIndex < filteredPortfolios.length && (
                <div className="text-center mt-3">
                  <button className="btn small-btn" onClick={handleShowMoreClick}>Selengkapnya</button>
                </div>
              )}
            </>
          ) : (
            <div className={`blank-section ${isAnimating ? 'fade-in' : ''}`}>
              <h2><strong>{selectedPortfolio.title}</strong></h2>
              <div className="portfolio-date">
                {selectedPortfolio.date}
              </div>
              <div className="large-image-container">
                <img src={selectedPortfolio.imgSrc} alt={selectedPortfolio.title} className="large-image" />
              </div>
              
              <div className="portfolio-content">
                {selectedPortfolio.content}
              </div>
              <button className="btn small-btn" onClick={handleGoBackClick}>Go Back</button>
            </div>
            
          )}
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ArticlePage;
