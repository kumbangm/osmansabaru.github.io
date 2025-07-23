const data = [
      { nama: "ACHMAD AMINATUL FIRDAUS", gugus: "BARATRA", status: "DITERIMA" },
      { nama: "ADHIKA PRATAMA", gugus: "GUNATRA", status: "DITERIMA" },
      { nama: "ADHIM RAHMATULLAH LAIL", gugus: "ANGINARA", status: "DITERIMA" },
      { nama: "ADINDA HERDYANA NUR A.", gugus: "KALAWIRA", status: "TIDAK DITERIMA" },
      { nama: "AHMAD HUSEN RIFA'I", gugus: "KELANA", status: "TIDAK DITERIMA" },
      { nama: "AIN NAUFAL RIFAI", gugus: "11.9", status: "TIDAK DITERIMA" },
      { nama: "AISYA ROHMATUSZZAHRO", gugus: "KELANA", status: "TIDAK DITERIMA" },
      { nama: "AISYAH NADIATUS SYARIFAH", gugus: "PETRAWANGSA", status: "DITERIMA" },
      { nama: "ALFIA RAHMA", gugus: "SAWITRI", status: "TIDAK DITERIMA" },
      { nama: "ALMIRA FITRIANA PUTRI R.", gugus: "GUNATRA", status: "TIDAK DITERIMA" },
      { nama: "AMELIA AISYAH H.", gugus: "ANGINARA", status: "TIDAK DITERIMA" },
      { nama: "ANASTASYA KUSUMA W.", gugus: "11.4", status: "TIDAK DITERIMA" },
      { nama: "ANGELICA PUTRI A.", gugus: "SAMUDRAYA", status: "TIDAK DITERIMA" },
      { nama: "ANGGI REDIANSYAHPUTRI", gugus: "SAWITRI", status: "TIDAK DITERIMA" },
      { nama: "ANGGUN FITRIA P.", gugus: "GUNATRA", status: "TIDAK DITERIMA" },
      { nama: "ANNISA NAJWA I.", gugus: "KALAWIRA", status: "TIDAK DITERIMA" },
      { nama: "ANUGERAH NURLAILATUL M.", gugus: "MANDAKA", status: "TIDAK DITERIMA" },
      { nama: "APRILLIA CHARTADHINI", gugus: "KELANA", status: "DITERIMA" },
      { nama: "ARIANE FIDELA CALISTA", gugus: "SAMUDRAYA", status: "TIDAK DITERIMA" },
      { nama: "ATHA FAIRUZ A.", gugus: "GUNATRA", status: "TIDAK DITERIMA" },
      { nama: "AUREL VEGA INDAH PUTRI", gugus: "LANGSENA", status: "TIDAK DITERIMA" },
      { nama: "AYEESA MARWA ZAHRIFAH", gugus: "BARATRA", status: "TIDAK DITERIMA" },
      { nama: "BAGAS FITRI MAULA HUEAIFAH", gugus: "DRIYANA", status: "TIDAK DITERIMA" },
      { nama: "BAGUS OKA WAHYU W.", gugus: "ANGINARA", status: "DITERIMA" },
      { nama: "BALQIS FITRIA MAULA H.", gugus: "GUNATRA", status: "TIDAK DITERIMA" },
      { nama: "CALISTA AYUDYA S.", gugus: "KALAWIRA", status: "TIDAK DITERIMA" },
      { nama: "CHRISANT NATHANIA A. P.", gugus: "PETRAWANGSA", status: "DITERIMA" },
      { nama: "DAMUL IZZI", gugus: "MANDAKA", status: "DITERIMA" },
      { nama: "DANIS JULIANISA PUTRI", gugus: "NAGANTARA", status: "TIDAK DITERIMA" },
      { nama: "DEVINA DWI SAFITRI", gugus: "SAWITRI", status: "TIDAK DITERIMA" },
      { nama: "DEVITA DWI PRAMESWARY", gugus: "DRIYANA", status: "TIDAK DITERIMA" },
      { nama: "DINDA AULIA RAHMADANI P.", gugus: "LANGSENA", status: "TIDAK DITERIMA" },
      { nama: "DINDA GISCA SISILIA", gugus: "SAMUDRAYA", status: "TIDAK DITERIMA" },
      { nama: "DWI BAGAS PUTRA A.", gugus: "DRIYANA", status: "DITERIMA" },
      { nama: "DWI SHAVA N.A.", gugus: "PETRAWANGSA", status: "TIDAK DITERIMA" },
      { nama: "EYSHA KIRANIA AZ ZAHRA", gugus: "BARATRA", status: "DITERIMA" },
      { nama: "FARIS ANDIKA F.", gugus: "ANGINARA", status: "TIDAK DITERIMA" },
      { nama: "FIOREN RAISSA MOYNA", gugus: "NAGANTARA", status: "DITERIMA" },
      { nama: "FIRSYAH YUNITA DWI A.", gugus: "MANDAKA", status: "TIDAK DITERIMA" },
      { nama: "GEYSHA ADIBAH ISLAMI KAMAL", gugus: "PETRAWANGSA", status: "DITERIMA" },
      { nama: "GRISELDA ARDIS W.", gugus: "DRIYANA", status: "TIDAK DITERIMA" },
      { nama: "GRISELDA YASMINE Q.", gugus: "MANDAKA", status: "TIDAK DITERIMA" },
      { nama: "HANI NUR DEWANTI", gugus: "BARATRA", status: "DITERIMA" },
      { nama: "INTAN AULIA RAHMAN", gugus: "NAGANTARA", status: "DITERIMA" },
      { nama: "IRHAMILLA AZZA ERINA", gugus: "SAWITRI", status: "TIDAK DITERIMA" },
      { nama: "ISNA ZASKIA SYARIFAH A.", gugus: "BARATRA", status: "DITERIMA" },
      { nama: "IZZAH BILLA NURO", gugus: "ANGINARA", status: "TIDAK DITERIMA" },
      { nama: "JESSICA ZORA AMELIA P.", gugus: "KELANA", status: "DITERIMA" },
      { nama: "JIHAN AMIRA ZAHRA", gugus: "LANGSENA", status: "DITERIMA" },
      { nama: "KAYLA KINARA MAHESWARI", gugus: "KELANA", status: "TIDAK DITERIMA" },
      { nama: "KHAIRA SYIFA A.", gugus: "KELANA", status: "TIDAK DITERIMA" },
      { nama: "KHANZA APRILIA S. A.", gugus: "NAGANTARA", status: "DITERIMA" },
      { nama: "LEILANI ZAHRO", gugus: "DRIYANA", status: "TIDAK DITERIMA" },
      { nama: "LENTERA PUTRI PERTIWI", gugus: "SAWITRI", status: "TIDAK DITERIMA" },
      { nama: "M. ARIEFO REZA P.", gugus: "PETRAWANGSA", status: "TIDAK DITERIMA" },
      { nama: "M. RESHA AL HABIBI", gugus: "DRIYANA", status: "TIDAK DITERIMA" },
      { nama: "M. REYHAN AL HABIBI", gugus: "SAWITRI", status: "TIDAK DITERIMA" },
      { nama: "M. TAUFIQ A.", gugus: "LELANA", status: "DITERIMA" },
      { nama: "MARVELLINO RAFFANDHIKA H.", gugus: "CAHYADIPA", status: "DITERIMA" },
      { nama: "MARYAM AMARA SASMI", gugus: "DRIYANA", status: "TIDAK DITERIMA" },
      { nama: "MAY LANI ALIFIA MAHARANI", gugus: "ANGINARA", status: "TIDAK DITERIMA" },
      { nama: "NABILA NASYIWA MAHARANI", gugus: "ANGINARA", status: "DITERIMA" },
      { nama: "NADIA AQILAH N.", gugus: "LANGSENA", status: "TIDAK DITERIMA" },
      { nama: "NAILA HABIBATUL M.", gugus: "KELANA", status: "DITERIMA" },
      { nama: "NAILA WASIUL FAJRIAH", gugus: "GUNATRA", status: "TIDAK DITERIMA" },
      { nama: "NAIRA ZERLINA FAIZAH", gugus: "SAMUDRAYA", status: "TIDAK DITERIMA" },
      { nama: "NAOMITA HUDAYANI", gugus: "SAWITRI", status: "TIDAK DITERIMA" },
      { nama: "NATARINA TAMEIKA Y.", gugus: "KELANA", status: "TIDAK DITERIMA" },
      { nama: "NATASYA CAHYA A.", gugus: "NAGANTARA", status: "TIDAK DITERIMA" },
      { nama: "NAURA SYAKIRA SUKMA P.", gugus: "KELANA", status: "DITERIMA" },
      { nama: "NAURAH NOVITA MUFID", gugus: "ANGINARA", status: "DITERIMA" },
      { nama: "NAYYIFA TIFANI AGUSTINA", gugus: "BARATRA", status: "TIDAK DITERIMA" },
      { nama: "NEZYA VIANTAMA FIRDAUS", gugus: "LANGSENA", status: "DITERIMA" },
      { nama: "NIKI DWI Y. N.", gugus: "LANGSENA", status: "TIDAK DITERIMA" },
      { nama: "NUGRAHENI HIDAYAH", gugus: "GUNATRA", status: "TIDAK DITERIMA" },
      { nama: "OLIVIA PUTRI ERI A.", gugus: "LELANA", status: "TIDAK DITERIMA" },
      { nama: "OLIVIA RAMADHANI P.", gugus: "ANGINARA", status: "TIDAK DITERIMA" },
      { nama: "OLLIEVIETA ISNAIDIRA M.", gugus: "NAGANTARA", status: "TIDAK DITERIMA" },
      { nama: "PUTRI BALQIS A. A.", gugus: "BARATRA", status: "TIDAK DITERIMA" },
      { nama: "PUTRI KAYLA A. Z.", gugus: "CAHYADIPA", status: "TIDAK DITERIMA" },
      { nama: "PUTRI M SARI", gugus: "CAHYADIPA", status: "TIDAK DITERIMA" },
      { nama: "RADELLA ARIBAH N.", gugus: "GUNATRA", status: "TIDAK DITERIMA" },
      { nama: "RADITA AULIA PRASTIKA", gugus: "ANGINARA", status: "TIDAK DITERIMA" },
      { nama: "RADITA AULIA PRASTIKA", gugus: "ANGINARA", status: "TIDAK DITERIMA" },
      { nama: "RAFI DWI SAKTIAN", gugus: "BARATRA", status: "DITERIMA" },
      { nama: "RAHKMAD FATHONI", gugus: "KALAWIRA", status: "DITERIMA" },
      { nama: "RAKA WISNU ANGGORO", gugus: "PETRAWANGSA", status: "DITERIMA" },
      { nama: "RESTU WIRA SAKTI", gugus: "SAMUDRAYA", status: "DITERIMA" },
      { nama: "RIFKA AZALIA RAHIMA", gugus: "PETRAWANGSA", status: "DITERIMA" },
      { nama: "SACHIE SALSABILA ANDITA Z.", gugus: "PETRAWANGSA", status: "TIDAK DITERIMA" },
      { nama: "SAFWAH HAZIYATUL ADIBAH", gugus: "BARATRA", status: "DITERIMA" },
      { nama: "SEKAR ARUM EZRA SAFITRI", gugus: "ANGINARA", status: "TIDAK DITERIMA" },
      { nama: "SEKAR AYU CANDRANINGTYAS P. U.", gugus: "DRIYANA", status: "DITERIMA" },
      { nama: "SHOFIA DEWI FAJRIA", gugus: "LELANA", status: "DITERIMA" },
      { nama: "SIFANI IRZANI", gugus: "DRIYANA", status: "DITERIMA" },
      { nama: "TITANIA RAHMA METHA F. R.", gugus: "SAWITRI", status: "DITERIMA" },
      { nama: "TYAS ARIYANI", gugus: "SAWITRI", status: "TIDAK DITERIMA" },
      { nama: "VALENCIA ZAHROTUS S.", gugus: "SAMUDRAYA", status: "DITERIMA" },
      { nama: "VERLITA DWY MARGARETA", gugus: "DRIYANA", status: "TIDAK DITERIMA" },
      { nama: "YASMIN ZAHRA K.", gugus: "CAHYADIPA", status: "DITERIMA" },
      { nama: "ZABRINA NOORSAYLA ADELIA T.", gugus: "LELANA", status: "DITERIMA" },
      { nama: "ZAHROTUS SYIFA QUINZA R.", gugus: "NAGANTARA", status: "TIDAK DITERIMA" }
  ];

function cekStatus() {
    const namaInput = document.getElementById('nama').value.trim().toUpperCase();
    const gugusInput = document.getElementById('gugus').value;
    const hasil = document.getElementById('hasil');
    const loading = document.getElementById('loading');
    hasil.innerHTML = '';
    loading.style.display = 'block';

    setTimeout(() => {
      loading.style.display = 'none';
      const found = data.find(entry => 
        entry.nama === namaInput && entry.gugus === gugusInput
      );

      if (found) {
        hasil.innerHTML = found.status === "DITERIMA" 
          ? '<span class="accepted">Selamat, Anda DITERIMA Menjadi Calon Anggota MPK/OSIS SMA Negeri 1 Mojosari Masa Bakti 2025/2026!</span>'
          : '<span class="rejected">Mohon maaf, Kamu BELUM DITERIMA Menjadi Calon Anggota MPK/OSIS SMA Negeri 1 Mojosari Masa Bakti 2025/2026.</span>'
      } else {
        hasil.innerHTML = '<span class="rejected">Data tidak ditemukan. Pastikan nama dan gugus sesuai.</span>';
      }
    }, 2000); // Simulasi animasi loading 2 detik
  }