function kota() {
  let provinsi = document.getElementById('Provinsi')
  let kota = document.getElementById('Kota')

  let pilihKota = provinsi.value

  let namaKota = {
    'Riau': ['Pekanbaru', 'Dumai', 'Siak'],
    'Sumatera Barat': ['Padang', 'Bukittinggi', 'Payakumbuh'],
    'Sumatera Utara': ['Medan', 'Binjai', 'Tebing Tinggi'],
    'DKI Jakarta': ['Jakarta Pusat', 'Jakarta Barat', 'Jakarta Selatan']
  }

  kota.innerHTML = '<option selected>Pilih Kab/Kota</option>'

  if (pilihKota in namaKota) {
    namaKota[pilihKota].forEach(city => {
      let option = document.createElement('option')
      option.value = city
      option.textContent = city
      kota.appendChild(option)
    });
  }


}

function kecamatan() {
  let kota = document.getElementById('Kota')
  let kecamatan = document.getElementById('Kecamatan')

  let pilihKota = kota.value

  let namakecamatan = {
    'Pekanbaru': ['Tampan', 'Marpoyan Damai', 'Payung Sekaki'],
    'Dumai': ['Dumai Barat', 'Dumai Timur', 'Bukit Kapur'],
    'Siak': ['Siak', 'Tualang', 'Sungai Apit'],
    'Padang': ['Padang Barat', 'Padang Timur', 'Kuranji'],
    'Bukittinggi': ['Aur Birugo Tigo Baleh', 'Guguk Panjang', 'Mandiangin Koto Selayan'],
    'Payakumbuh': ['Payakumbuh Barat', 'Payakumbuh Timur', 'Payakumbuh Utara'],
    'Medan': ['Medan Baru', 'Medan Tembung', 'Medan Selayang'],
    'Binjai': ['Binjai Kota', 'Binjai Barat', 'Binjai Timur'],
    'Tebing Tinggi': ['Rambutan', 'Bajenis', 'Padang Hilir'],
    'Jakarta Pusat': ['Gambir', 'Tanah Abang', 'Menteng'],
    'Jakarta Barat': ['Grogol Petamburan', 'Tambora', 'Cengkareng'],
    'Jakarta Selatan': ['Kebayoran Baru', 'Tebet', 'Pasar Minggu']
  }

  kecamatan.innerHTML = '<option selected>Pilih Kecamatan</option>'

  if (pilihKota in namakecamatan) {
    namakecamatan[pilihKota].forEach(kec => {
      let option = document.createElement('option')
      option.value = kec
      option.textContent = kec
      kecamatan.appendChild(option)
    })
  }
}

function kelurahan() {
  let kecamatan = document.getElementById('Kecamatan')
  let kelurahan = document.getElementById('Kelurahan')

  let pilihKecamatan = kecamatan.value

  let namakelurahan = {
    'Tampan': ['Sidomulyo Barat', 'Sidomulyo Timur', 'Simpang Baru'],
    'Marpoyan Damai': ['Tangkerang Barat', 'Tangkerang Timur', 'Tangkerang Tengah'],
    'Payung Sekaki': ['Labuh Baru Barat', 'Labuh Baru Timur', 'Simpang Tiga'],
    'Dumai Barat': ['Bukit Datuk', 'Bukit Timah', 'Purnama'],
    'Dumai Timur': ['Jaya Mukti', 'Rimba Sekampung', 'Teluk Binjai'],
    'Bukit Kapur': ['Bukit Nenas', 'Bukit Batrem', 'Bukit Timah'],
    'Siak': ['Kampung Dalam', 'Benteng Hilir', 'Benteng Hulu'],
    'Tualang': ['Perawang Barat', 'Perawang Timur', 'Tualang'],
    'Sungai Apit': ['Sungai Apit', 'Sungai Rawa', 'Sungai Berbari'],
    'Padang Barat': ['Belakang Tangsi', 'Kampung Jao', 'Kampung Pondok'],
    'Padang Timur': ['Sawahan', 'Simpang Haru', 'Jati'],
    'Kuranji': ['Kuranji', 'Gunung Sarik', 'Lubuk Lintah'],
    'Aur Birugo Tigo Baleh': ['Aur Kuning', 'Birugo', 'Tigo Baleh'],
    'Guguk Panjang': ['Pakan Kurai', 'Pakan Labuah', 'Pakan Sinayan'],
    'Mandiangin Koto Selayan': ['Mandiangin', 'Koto Selayan', 'Koto Panjang'],
    'Payakumbuh Barat': ['Balai Jariang', 'Balai Panjang', 'Balai Tangah'],
    'Payakumbuh Timur': ['Padang Tinggi', 'Padang Kaduduak', 'Padang Sikabu'],
    'Payakumbuh Utara': ['Koto Nan Gadang', 'Koto Nan IV', 'Koto Nan III'],
    'Medan Baru': ['Suka Maju', 'Suka Mulia', 'Suka Damai'],
    'Medan Tembung': ['Bantan', 'Bantan Timur', 'Bantan Barat'],
    'Medan Selayang': ['Selayang I', 'Selayang II', 'Selayang III'],
    'Binjai Kota': ['Setia', 'Setia Baru', 'Setia Jaya'],
    'Binjai Barat': ['Suka Ramai', 'Suka Maju', 'Suka Mulia'],
    'Binjai Timur': ['Suka Damai', 'Suka Jaya', 'Suka Makmur'],
    'Rambutan': ['Rambutan', 'Rambutan Baru', 'Rambutan Jaya'],
    'Bajenis': ['Bajenis', 'Bajenis Baru', 'Bajenis Jaya'],
    'Padang Hilir': ['Padang Hilir', 'Padang Hilir Baru', 'Padang Hilir Jaya'],
    'Gambir': ['Kebon Melati', 'Kebon Kacang', 'Kebon Sirih'],
    'Tanah Abang': ['Bendungan Hilir', 'Karet Tengsin', 'Petamburan'],
    'Menteng': ['Menteng', 'Gondangdia', 'Cikini'],
    'Grogol Petamburan': ['Grogol', 'Tomang', 'Jelambar'],
    'Tambora': ['Tambora', 'Jembatan Lima', 'Kali Anyar'],
    'Cengkareng': ['Cengkareng Barat', 'Cengkareng Timur', 'Kapuk'],
    'Kebayoran Baru': ['Gunung', 'Pulo', 'Rawa Barat'],
    'Tebet': ['Tebet Barat', 'Tebet Timur', 'Kebon Baru'],
    'Pasar Minggu': ['Ragunan', 'Pejaten Barat', 'Pejaten Timur']
  }

  kelurahan.innerHTML = '<option selected>Pilih Kelurahan</option>'

  if (pilihKecamatan in namakelurahan) {
    namakelurahan[pilihKecamatan].forEach(kel => {
      let option = document.createElement('option')
      option.value = kel
      option.textContent = kel
      kelurahan.appendChild(option)
    });
  }
}

function metode() {
  let sampah = document.querySelectorAll('.sampah')
  let metode = document.getElementById('metode')

  if (metode.checked == true) {
    sampah.forEach(function (input) {
      input.setAttribute('disabled', 'disabled')
      input.classList.add('cursor-not-allowed')
    })
  } else {
    sampah.forEach(function (input) {
      input.removeAttribute('disabled')
      input.classList.remove('cursor-not-allowed')
    })
  }
}