const rumahadat = [
    {
        nama : 'Krong Bade',
        asal : 'Aceh',
        gambar :'https://www.ruparupa.com/blog/wp-content/uploads/2021/09/Rumah-Krong-Bade-Aceh.jpeg',
        teks :'Rumah Krong Bade dari Aceh ini berbentuk memanjang dari timur ke barat menyerupai persegi panjang. Di bagian depan rumah dilengkapi dengan tangga untuk masuk ke dalam rumah. Umumnya, tangga pada  rumah adat Aceh ini jumlahnya ganjil, yaitu sekitar 7 hingga 9 anak tangga. '
    },
    {
        nama : 'Bolon',
        asal : 'Sumatra Utara',
        gambar : 'https://www.ruparupa.com/blog/wp-content/uploads/2021/09/Rumah-Bolon-Sumatera-Utara.jpeg',
        teks :'Pada rumah adat Bolon ini, terdapat dua bagian yang berbeda, yaitu Jabu Bolon dan juga Jabu Parsakitan. Jabu Bolon biasa menjadi tempat untuk keluarga besar, sedangkan Jabu Parsakitan adalah tempat untuk membicarakan masalah adat. Keunikan dari rumah adat Sumatera Utara ini adalah tidak ada sekatan antara setiap ruangan. Jadinya, semua anggota keluarga tidur bersama di dalam ruangan besar.'
    },
    {
        nama : 'Gadang',
        asal : 'Sumatra Barat',
        gambar : 'https://www.ruparupa.com/blog/wp-content/uploads/2021/09/Sumatera-Barat-Rumah-Gadang.jpeg',
        teks : 'Rumah adat satu ini terlihat mewah, bukan? Berasal dari Sumatera Barat, rumah ini memiliki beberapa atap yang runcing dan menjulang ke atas. Rumah adat Gadang terbuat dari ijuk dan bentuknya mirip seperti tanduk kerbau, yang melambangkan kemenangan suku Minang dalam perlombaan adu kerbau di Jawa.'
    },
    {
        nama :'Selaso Jatuh Kembar',
        asal :'Riau',
        gambar : 'https://www.ruparupa.com/blog/wp-content/uploads/2021/09/Riau-Rumah-Adat-Selaso-Jatuh.jpeg',
        teks : 'Rumah ini memiliki arti rumah dengan dua selasar. Masyarakat Riau tidak menjadikan Rumah Selaso Jatuh Kembar sebagai tempat tinggal mereka, tetapi hanya menggunakannya untuk acara adat.'
    },
    {
        nama : 'Atap Limas Potong',
        asal : 'Kepulauan Riau',
        gambar : 'https://www.ruparupa.com/blog/wp-content/uploads/2021/09/Kepulauan-Riau-Rumah-Atap-Limas-Potong.jpeg',
        teks : 'Rumah adat dari Kepulauan Riau ini terlihat sangat sederhana. Berbentuk seperti rumah panggung, yang memanjang ke belakang dengan dinding kayu tersusun secara vertikal. Atap dari rumah adat Limas Potong memiliki lima bumbungan dengan menggunakan seng berwarna merah.'
    },
    {
        nama : 'Bubungan Lima',
        asal : 'Bengkulu',
        gambar : 'https://www.ruparupa.com/blog/wp-content/uploads/2021/09/Bengkulu-Rumah-Bubungan-Lima.jpeg',
        teks : 'Rumah adat dari Bengkulu ini memiliki tiang penopang dan menggunakan kayu khusus untuk membuatnya, yaitu kayu Medang Kemuning. Untuk memasuki rumah ini, Anda juga harus menggunakan tangga, yang berada pada bagian depan rumah. Sama seperti rumah adat dari Riau, masyarakat Bengkulu menggunakan rumah ini untuk acara adat saja, bukan untuk menjadi tempat tinggal.'
    },
    {
        nama : 'Panggung',
        asal : 'Jambi',
        gambar : 'https://www.ruparupa.com/blog/wp-content/uploads/2021/09/Jambi-Rumah-Panggung.jpeg',
        teks : 'Rumah adat provinisi dari Jambi ini adalah desain yang tertua di daerah tersebut, dengan bentuk persegi panjang. Rumah Adat Panggung dilengkapi dengan tangga di depan rumah. Orang-orang sering menyebutkan bagian atap dari Rumah Panggung ini sebagai “Gajah Mabuk” karena bentuknya yang menyerupai perahu dengan ujung melengkung. Biasanya, rumah adat dari Jambi digunakan untuk tempat tinggal dan juga tempat bermusyawarah.'
    },
    {
        nama : 'Nuwo Sesat',
        asal : 'Lampung',
        gambar : 'https://www.ruparupa.com/blog/wp-content/uploads/2021/09/Lampung-Rumah-Nuwo-Sesat.jpeg',
        teks : 'Rumah adat Provinsi Lampung memiliki nama Nuwo Sesat. Ciri khas dari rumah ini adalah bentuknya panggung dan di sisi-sisinya terdapat ornamen yang khas. Biasanya, ukuran dari rumah ini sangat besar, tetapi saat ini banyak yang membuat Rumah Nuwo Sesat berukuran lebih kecil. Namun, rumah ini tidak dibangun sebagai tempat tinggal. Sama seperti rumah adat lainnya,  Rumah Nuwo Sesat ini hanya dibangun untuk acara adat dan melakukan musyawarah. '
    },
    {
        nama : 'Limas',
        asal : 'Sumatra Selatan',
        gambar : 'https://www.ruparupa.com/blog/wp-content/uploads/2021/09/Sumatera-Selatan-Rumah-Limas.jpeg',
        teks : 'Rumah adat satu ini memiliki bentuk yang sesuai dengan namanya, yaitu menyerupai limas. Tamu yang berkunjung ke rumah ini harus singgah ke ruang atas atau teras rumah. Hal ini merupakan tradisi masyarakat Sumatera Selatan agar dapat merasakan budaya mereka, yang tampak pada ukiran di dalamnya.'
    },
    {
        nama : 'Rakit',
        asal : 'Bangka Belitung',
        gambar : 'https://www.ruparupa.com/blog/wp-content/uploads/2021/09/Rumah-rakit-bangka-belitung.jpeg',
        teks : 'Karena Bangka Belitung memiliki banyak yang tergenang air atau di tepi laut, warga setempat harus menyesuaikan diri, yaitu dengan membangun rumah di atas air juga yang dinamakan Rumah Rakit. Bentuk rumah adat provinsi Bangka belitung terlihat sangat unik karena merupakan perpaduan rumah Melayu dengan aksen arsitektur Tionghoa. Pembuatan rumah ini menggunakan bambu khusus dan bahan lainnya, yang tentunya kuat dan membuatnya dapat mengapung di atas air. Rumah Rakit ini biasa menjadi tempat tinggal warga.'
    },
    {
        nama : 'Baduy',
        asal : 'Banten',
        gambar : 'https://www.ruparupa.com/blog/wp-content/uploads/2021/09/Banten-Rumah-Baduy.jpeg',
        teks : 'Rumah adat dari Banten ini merupakan tempat tinggal suku Baduy, yang merupakan suku asli di wilayah tersebut. Biasanya, suku Baduy membuat rumah ini menggunakan bambu dan ijuk untuk atapnya. Suku Baduy juga memiliki asas kekeluargaan yang amat kental. Inilah yang membuat mereka membangun rumah secara gotong royong sebagai tempat tinggal.'
    },
    {
        nama : 'Kebaya',
        asal : 'DKI Jakarta',
        gambar : 'https://www.ruparupa.com/blog/wp-content/uploads/2021/09/DKI-Jakarta-Rumah-Kebaya.jpeg',
        teks : 'Rumah Kebaya dari DKI Jakarta mengusung corak khas suku Betawi. Atap dari rumah ini menyerupai pelana terlipat dan memiliki corak-corak yang khas seperti kebaya. Rumah Kebaya memiliki teras yang luas bertujuan untuk menjadi tempat santai keluarga dan menyambut tamu.  '
    },
    {
        nama : 'Kesepuhan',
        asal : 'Jawa Barat',
        gambar : 'https://www.ruparupa.com/blog/wp-content/uploads/2021/09/Jawa-Barat-Rumah-Kasepuhan.jpeg',
        teks : 'Rumat adat dari Jawa Barat ini merupakan peninggalan dari Kerajaan Islam di wilayah tersebut. Rumah yang sering disebut Keraton Kasepuhan ini sebenarnya merupakan perluasan dari Keraton Pakungwati. Tidak heran bila pintu utama keraton terlihat unik dan menawan.'
    },
    {
        nama : 'Joglo',
        asal : 'Jawa Tengah',
        gambar : 'https://www.ruparupa.com/blog/wp-content/uploads/2021/09/Jawa-Tengah-Rumah-Joglo.jpeg',
        teks : 'Mungkin Anda sudah sering mendengar rumah adat dari Jawa Tengah yang sering disebut sebagai Rumah Joglo ini. Biasanya, bagian depan rumah akan ada pendopo untuk menjamu tamu. Rumah adat Jawa Tengah ini memiliki empat tiang penopang. Selain itu, Anda juga bisa melihat sentuhan kejawen dari suku Jawa di sisi-sisi rumah.'
    },
    {
        nama : 'Joglo',
        asal : 'DI Yogyakarta',
        gambar : 'https://www.ruparupa.com/blog/wp-content/uploads/2021/09/DI-Yogyakarta-Rumah-Joglo.jpeg',
        teks : 'Sama seperti Rumah Joglo di Jawa Tengah, rumah dari DI Yogyakarta ini juga memiliki 4 tiang penopang dan terdiri dari dua bagian, yaitu rumah induk dan rumah tambahan. Bagian induk adalah tempat utama seperti rumah pada umumnya yang memiliki pendopo, teras, dan lain-lain. Sedangkan rumah tambahan, berisi pelengkap untuk rumah induk. '
    },
    {
        nama : 'Joglo',
        asal : 'Jawa Timur',
        gambar : 'https://www.ruparupa.com/blog/wp-content/uploads/2021/09/Jawa-Timur-Rumah-Joglo.jpeg',
        teks : 'Memang merupakan ciri khas dari Rumah Joglo memiliki 4 tiang penopang. Ini pula yang terlihat dari rumah adat Jawa Timur. Ciri khas dari Rumah Joglo ini terletak pada bentuk dan ukurannya yang unik dan juga makna seni yang tinggi. Umumnya, rumah joglo di daerah ini tidak hanya digunakan sebagai tempat tinggal, tetapi juga untuk menyimpan peninggalan sejarah.'
    },
    {
        nama : 'Panjang',
        asal : 'Kalimantan Barat',
        gambar : 'https://www.ruparupa.com/blog/wp-content/uploads/2021/09/Kalimantan-Barat-Rumah-Panjang.jpeg',
        teks : 'Rumah adat Provinsi Kalimantan Barat ini mempunyai ukuran yang besar dan terdiri dari dua bagian, yaitu bangunan atas dan bawah. Rumah ini sangat unik karena memadukan kesan modern dan tradisional sekaligus. Arsitektur Rumah Panjang bertema budaya Suku Dayak pada beberapa sisi bangunannya.'
    },
    {
        nama : 'Lamin',
        asal : 'Kalimantan Timur',
        gambar : 'https://www.ruparupa.com/blog/wp-content/uploads/2021/09/Kalimantan-Timur-Rumah-Lamin.jpeg',
        teks : 'Rumah Lamin dari Kalimantan Timur juga tidak kalah uniknya. Gaya arsitektur yang khas dan juga luas bangunannya menjadi ciri khas dari Rumah Lamin. Pada bagian atap rumah terdapat ornamen kepala naga dari kayu. Di sisi-sisi bangunannya juga terdapat ukiran atau lukisan budaya yang unik. '
    },
    {
        nama : 'Bubungan Tinggi',
        asal : 'Kalimantan Selatan',
        gambar : 'https://www.ruparupa.com/blog/wp-content/uploads/2021/09/Kalimantan-Selatan-Rumah-Bubungan-Tinggi.jpeg',
        teks : 'Menggunakan konsep panggung dan terbuat dari kayu ulin tentunya membuat rumah ini memiliki ketahanan yang kuat, dan akan lebih kuat lagi jika terkena air. Uniknya lagi, atap dari rumah ini memiliki sudut kemiringan 45 derajat. Keren sekali, bukan?'
    },
    {
        nama : 'Betang',
        asal : 'Kalimantan Tengah',
        gambar : 'https://www.ruparupa.com/blog/wp-content/uploads/2021/09/Kalimantan-Tengah-Rumah-Betang.jpeg',
        teks : 'Rumah Betang dari Kalimantan Tengah ini seperti panggung dengan kayu tinggi yang menopangnya dengan tujuan untuk menghindari banjir. Karena rumah ini sangat besar dan panjang, penghuninya dapat mencapai 150 orang loh, Ruppers.'
    },
    {
        nama : 'Baloy',
        asal : 'Kalimantan Utara',
        gambar : 'https://www.ruparupa.com/blog/wp-content/uploads/2021/09/Kalimantan-Utara-Rumah-Baloy.jpeg',
        teks : 'Rumah adat Provinsi Kalimantan Utara ini sangat unik loh, Ruppers. Bagaimana tidak rumah ini harus menghadap ke arah utara dan pintu utamanya di arah sebaliknya, yaitu selatan. Selain itu, Rumah Baloy memiliki empat bagian, yaitu lamin dalom, ambir tengah, ambir kanan, dan juga ambir kiri.'
    },
    {
        nama : 'Dulohupa',
        asal : 'Gerontalo',
        gambar : 'https://www.ruparupa.com/blog/wp-content/uploads/2021/09/Gorontalo-Rumah-Dulohupa.jpeg',
        teks : 'Rumah Dulohupa ini memiliki tiang kayu sebagai penopang dan juga penghias. Di kedua sisi rumah terdapat tangga,yang merupakan lambang dari tangga adat Gorontalo, yaitu Tolitihu.'
    },
    {
        nama : 'Boyang',
        asal : 'Sulawesi Barat',
        gambar : 'https://www.ruparupa.com/blog/wp-content/uploads/2021/09/Sulawesi-Barat-Rumah-Boyang.jpeg',
        teks : 'Rumah Boyang dari Sulawesi Barat berkonsep seperti panggung dengan tiang-tiang penopangnya. Tiang penopang tersebut tidak menancap ke dalam tanah melainkan berdiri di atas batu datar agar rumah tidak tumbang. '
    },
    {
        nama : 'Sauroja',
        asal : 'Sulawesi Tengah',
        gambar : 'https://www.ruparupa.com/blog/wp-content/uploads/2021/09/Sulawesi-Tengah-Rumah-Souraja.jpeg',
        teks : 'Rumah adat Provinsi Sulawesi Tengah ini memiliki tiga ruangan di dalamnya. Ruang pertama merupakan ruang depan untuk menerima tamu. Sedangkan pada ruang kedua terdapat ruang tengah, yang juga merupakan ruang tamu. Ruangan ini punya tujuan agar penghuninya bisa saling lebih dekat. Untuk ruang terakhir, merupakan ruang rahasia.'
    },
    {
        nama : 'Walewangko',
        asal : 'Sulawesi Utara',
        gambar : 'https://www.ruparupa.com/blog/wp-content/uploads/2021/09/Sulawesi-Utara-Rumah-Walewangko.jpeg',
        teks : 'Rumah Walewangko ini merupakan rumah adat yang mendominasi di Sulawesi Utara. Sama seperti rumah adat provinsi lainnya, Rumah Walewangko ini juga memiliki arsitektur yang unik dan filosofi yang sangat kental dengan adat penduduknya.'
    },
    {
        nama : 'Buton',
        asal : 'Sulawesi Tenggara',
        gambar : 'https://www.ruparupa.com/blog/wp-content/uploads/2021/09/Sulawesi-Tenggara-Rumah-Buton.jpeg',
        teks : 'Rumah Buton ini terbagi ke dalam tiga strata sesuai pemilik rumahnya. Pertama adalah Kamali (Malige), yang biasanya berfungsi sebagai tempat tinggal keluarga sultan. Kedua, Tare Pata Pale, yaitu untuk pejabat pengadilan. Terakhir, adalah Tare Talu Pale untuk masyarakat biasa.'
    },
    {
        nama : 'Tongkonan',
        asal : 'Sulawesi Selatan',
        gambar : 'https://www.ruparupa.com/blog/wp-content/uploads/2021/09/Sumatera-Selatan-Rumah-Limas-1.jpeg',
        teks : 'Anda pastinya sering mendengar Rumah Tongkonan ini. Rumah ini merupakan rumah adat suku Toraja yang berada di Sulawesi Selatan. Tongkonan berfungsi sebagai tempat tinggal masyarakat dan juga tempat acara adat. Arsitekturnya yang unik dan khas ini membuat rumah ini terlihat indah.'
    },
    {
        nama : 'Gapura Candi Gentar',
        asal : 'Bali',
        gambar : 'https://www.ruparupa.com/blog/wp-content/uploads/2021/09/Bali-Gapura-Candi-Bentar.jpeg',
        teks : 'Rumah adat Provinsi Bali ini terdiri dari dua bagian, yaitu rumah huniannya dan juga Gapura Candi Bentar. Arah bangunan, letak, dimensi pekarangan, dan beberapa aspek lainnya, harus mengikuti aturan khusus yang berlaku sesuai aturan agama. Hal inilah yang menjadi keunikan dari Rumah Gapura Candi Bentar.'
    },
    {
        nama : 'Musalaki',
        asal : 'Nusa Tenggara Timur',
        gambar : 'https://www.ruparupa.com/blog/wp-content/uploads/2021/09/Nusa-Tenggara-Timur-Rumah-Musalaki.jpeg',
        teks : 'Rumah Musalaki ini biasanya menjadi tempat tinggal bagi kepala suku atau pemimpin daerah dan juga untuk menyelenggarakan acara adat. Rumah adat ini juga menjadi tempat untuk bermusyawarah dan melakukan ritual. Uniknya, Rumah Musalaki berdiri di atas batu besar, yang berfungsi sebagai pondasinya untuk mengurangi risiko keretakan, jika terjadi bencana alam.'
    },
    {
        nama : 'Dalam Loka',
        asal : 'Nusa Tenggara Barat',
        gambar : 'https://www.ruparupa.com/blog/wp-content/uploads/2021/09/Nusa-Tenggara-Barat-Rumah-Dalam-Loka.jpeg',
        teks : 'Rumah Dalam Loka terlihat cukup besar dan megah karena merupakan kediaman raja di daerah tersebut. Di rumah ini, hanya terdapat satu pintu besar sebagai akses keluar masuk.'
    },
    {
        nama : 'Baileo',
        asal : 'Maluku',
        gambar : 'https://www.ruparupa.com/blog/wp-content/uploads/2021/09/Maluku-Rumah-Baileo.jpeg',
        teks : 'Rumah adat lain yang tidak kalah unik adalah Rumah Baileo dari Maluku. Tidak ada dinding di rumah ini dan berbentuk panggung. Untuk menyangganya, ada 9 tiang di rumah ini dengan batu pamali yang melengkapinya. Biasanya, warga setempat juga menggunakan batu pamali ini sebagai tempat sesaji bagi roh leluhurnya.'
    },
    {
        nama : 'Sasadu',
        asal : 'Maluku Utara',
        gambar : 'https://www.ruparupa.com/blog/wp-content/uploads/2021/09/Maluku-Utara-Rumah-Sasadu.jpeg',
        teks : 'Sasadu merupakan rumah adat Suku Sahu. Desain rumah ini menggambarkan tentang kisah hidup bermasyarakat Suku Sahu. Selain memiliki keunikan dari sisi arsitektur, rumah ini juga menyimpan banyak filosofi. '
    },
    {
        nama : 'Kariwari',
        asal : 'Papua',
        gambar : 'https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_750/https://www.ruparupa.com/blog/wp-content/uploads/2022/02/Rumah-Adat-Kariwari.jpg',
        teks : 'Kariwari adalah rumah adat asal provinsi Papua yang didiami oleh suku Tobati-Enggros. Bentuknya cenderung lebih modern dibandingkan dengan rumah adat lainnya di Pulau Papua. Atap dari rumah ini berbentuk segi delapan, serta tiga tingkat lantai yang dipercaya oleh masyarakat dapat menjaga rumah dari cuaca ekstrem. Lantai pertama dari rumah ini biasanya berfungsi untuk melatih remaja laki-laki untuk menjadi pria dewasa yang kuat dan bertanggung jawab. Kemudian, lantai kedua biasanya menjadi tempat berkumpulnya para kepala adat untuk mendiskusikan hal penting terkait desa. Terakhir, lantai tiga digunakan untuk sembahyang kepada para leluhur dan Tuhan.'
    },
    {
        nama : 'Mod Aki Aksa',
        asal : 'Papua Barat',
        gambar : 'https://www.ruparupa.com/blog/wp-content/uploads/2021/09/Papua-Barat-Rumah-Mod-Aki-Aksa.jpeg',
        teks : 'Rumah Mod Aki Aksa ini termasuk rumah adat terunik loh, Ruppers. Bagian atapnya terbuat dari ilalang dengan lantai dari anyaman rotan. Dinding-dindingnya tersusun dari kayu dan terlihat saling mengikat satu sama lain.'
    },
    {
        nama : 'Honai',
        asal : 'Papua Pegunungan Tengah',
        gambar : 'https://www.ruparupa.com/blog/wp-content/uploads/2021/09/Papua-Rumah-Honai.jpeg',
        teks : 'Berikutnya ada rumah adat dari Provinsi Papua bernama Rumah Honai. Rumah ini berbentuk mengerucut dengan bagian atas ditutupi jerami kering. Atapnya mirip dengan batok kelapa dan tidak terlalu tinggi agar dapat menghangatkan bagian dalam rumahnya. Rumah ini khusus untuk tempat tidur dan beristirahat, sedangkan aktivitas lainnya seperti mandi dan makan berada di tempat yang berbeda.'
    },
    {
        nama : 'Jew',
        asal : 'Papua Selatan',
        gambar : 'https://www.ruparupa.com/blog/wp-content/uploads/2022/02/asmat03-e1645174394147.jpg',
        teks : 'Dari provinsi baru yang ada di Pulau Papua ini, yaitu Papua Selatan, ternyata juga ada rumah adat, lho. Rumah adat dari Papua Selatan ini bernama Rumah Jew, yang ditempati oleh Suku Asmat. Rumah Jewberukuran besar dengan panjang 15 meter dan lebar 10 meter. Wajar saja, karena rumah ini ditempati oleh anggota Suku Asmat yang sangat banyak jumlahnya. Uniknya lagi, hanya laki-laki belum menikah yang boleh tinggal di rumah ini, lho. Para wanita serta anak laki-laki dibawah 10 tahun tidak boleh masuk ke dalamnya. Nah, nantinya di dalam rumah ini, para laki-laki tersebut akan belajar dari seniornya tentang berbagai keterampilan hingga pendidikan.'
    },
    {
        nama : 'Karapao',
        asal : 'Papua Tengah',
        gambar : 'https://www.ruparupa.com/blog/wp-content/uploads/2021/09/rumah-adat-papua-tengah-karapao.jpeg',
        teks : 'Beralih ke provinsi baru selanjutnya, yaitu Papua Tengah. Di provinsi ini, terdapat rumah adat bernama Karapao yang didiami oleh suku Kamoro. Bentuknya seperti rumah panggung persegi panjang, yang ukurannya disesuaikan dengan jumlah anak-anak di desa tersebut. Rumah Karapao berfungsi sebagai tempat adat istiadat serta untuk pembelajaran bagi para anak-anak suku Kamoro. Uniknya, pintu di rumah adat satu ini dibuat dengan menyesuaikan jumlah anak-anak yang akan belajar, lho. Misalnya, ada 20 anak yang belajar, maka akan dibuat 20 pintu pula. Keren sekali, bukan?'
    }
];

export default rumahadat;