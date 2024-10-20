import React from 'react';
import './../css/homepage/homepage.css';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import logo2 from '/src/assets/images/logo2.png'
import pana from '/src/assets/images/pana.png'




function Homepage() {
  const [cities, setCities] = React.useState<string[]>([]);
  const [city, setCity] = React.useState<string>('');
  const [towns, setTowns] = React.useState<string[]>([]);
  const [town, setTown] = React.useState<string>('');
  const [days, setDays] = React.useState<string[]>([]);
  const [day, setDay] = React.useState<string>('');


  const [members, setMembers] = React.useState<number>(150);
  const [rezervations, setRezervations] = React.useState<number>(2300);
  const [sharings, setSharings] = React.useState<number>(770);
  const [comments, setComments] = React.useState<number>(93);

  const donothing = () => {
    setMembers(150);
    setRezervations(2300);
    setSharings(770);
    setComments(93);
    setCities(['İstanbul', 'Ankara', 'İzmir', 'Bursa', 'Antalya']);
    setTowns(['Kadıköy', 'Çankaya', 'Bornova', 'Osmangazi', 'Muratpaşa']);
    setDays(['Gün', 'Sonraki Gün', 'Son Gün']);
  }

  return (

    <div className='homepage'>
      <div className='image-homepage'>
        <div style={{ paddingLeft: '56.25rem' }}>
          <img src={logo2} alt="logo" style={{ width: '25rem', height: 'auto' }} />
        </div>
        <div>
          <div>
            <h1 className='homepage-first-text'>Şimdi Oyna!</h1>
          </div>
          <div className='homepage-second-text'>
            <p>Favori Sahanı Seç, Hemen Randevunu Al</p>
          </div>
          <div className='homepage-appointment-section'>
            <div style={{ paddingLeft: "0.625rem" }}>
              <FormControl fullWidth>
                <InputLabel id="city-select-label">Şehir</InputLabel>
                <Select sx={{ minWidth: '8.4375rem' }}
                  labelId="city-select-label"
                  id="city-select"
                  value={city}
                  label="Şehir"
                  onChange={(event) => {
                    setCity(event.target.value);
                  }}
                >
                  {cities.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
            <div style={{ paddingLeft: "0.625rem" }}>
              <FormControl fullWidth>
                <InputLabel id="town-select-label">İlçe</InputLabel>
                <Select sx={{ minWidth: '8.4375rem' }}
                  labelId="town-select-label"
                  id="town-select"
                  value={town}
                  label="İlçe"
                  onChange={(event) => {
                    setTown(event.target.value);
                  }}
                >
                  {towns.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>

            <div style={{ paddingLeft: "0.625rem" }}>
              <FormControl fullWidth>
                <InputLabel id="day-select-label">Saha</InputLabel>
                <Select sx={{ minWidth: '8.4375rem' }}
                  labelId="day-select-label"
                  id="day-select"
                  value={day}
                  label="Gün"
                  onChange={(event) => {
                    setDay(event.target.value);
                  }}
                >
                  {days.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                  <MenuItem value="Yeni Gün">Yeni Gün</MenuItem>
                  <MenuItem value="Sonraki Gün">Sonraki Gün</MenuItem>
                  <MenuItem value="Son Gün">Son Gün</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div style={{ paddingLeft: "2.5rem", paddingTop: "0.625rem" }}>
              <Button variant="contained" color="success">
                Randevu Al
              </Button>
            </div>

          </div>
        </div>
      </div>


      <div className='homepage-our-services-title'>
        <p>HİZMETLERİMİZ</p>
      </div>

      <div className='homepage-our-services-section'>
        <div>

        </div>
        <div className='homepage-our-services-section-card-first'>
          <div className='homepage-our-services-section-card-first-image'>
            <div style={{ paddingLeft: '1.875rem', paddingTop: '1.25rem' }}>
              <div style={{ color: "green" }} className="material-symbols-outlined">Sweep</div>
            </div>
            <div style={{ paddingLeft: '1.25rem', paddingTop: '1.25rem' }}>
              <h3 style={{ fontFamily: 'Roboto, sans-serif', fontSize: '22px', color: '#333' }}>Hızlı Ve Kolay Randevu</h3>
            </div>
          </div>
          <div>
            <p style={{ fontSize: '16px', color: '#666', lineHeight: '1.6', marginTop: '10px', paddingLeft: "0.625rem" }}>
              İstediğiniz şehirdeki halı sahaları kolayca bulup anında rezervasyon yapın. Tarih ve saat seçiminizi yaparak, en uygun sahayı birkaç tıkla seçebilirsiniz.
            </p>
          </div>
        </div>


        <div className='homepage-our-services-section-card-second'>
          <div className='homepage-our-services-section-card-first-image'>
            <div style={{ paddingLeft: '1.875rem', paddingTop: '1.25rem' }}>
              <div style={{ color: "green" }} className="material-symbols-outlined">Sports_Soccer</div>
            </div>
            <div style={{ paddingLeft: '1.25rem', paddingTop: '1.25rem' }}>
              <h3 style={{ fontFamily: 'Roboto, sans-serif', fontSize: '22px', color: '#333' }}>Kadro Oluşturma</h3>
            </div>
          </div>
          <div>
            <p style={{ fontSize: '16px', color: '#666', lineHeight: '1.6', marginTop: '10px', paddingLeft: "0.625rem" }}>
              Kullanıcılar, sanal oyun tahtası üzerinde takımlarını kurabilir ve dizilişlerini belirleyebilir. Maç öncesi stratejinizi kolayca planlayın.
            </p>
          </div>
        </div>

        <div className='homepage-our-services-section-card-third'>
          <div className='homepage-our-services-section-card-first-image'>
            <div style={{ paddingLeft: '1.875rem', paddingTop: '1.25rem' }}>
              <div style={{ color: "green" }} className="material-symbols-outlined">Comment</div>
            </div>
            <div style={{ paddingLeft: '1.25rem', paddingTop: '1.25rem' }}>
              <h3 style={{ fontFamily: 'Roboto, sans-serif', fontSize: '22px', color: '#333' }}>Gerçek Kullanıcı Yorumları</h3>
            </div>
          </div>
          <div>
            <p style={{ fontSize: '16px', color: '#666', lineHeight: '1.6', marginTop: '10px', paddingLeft: "0.625rem" }}>
              Kullanıcılar, deneyimlerini paylaşarak diğerlerine yardımcı olur. Sahalar hakkında yapılan yorumları okuyarak en iyi seçimleri yapabilirsiniz.
            </p>
          </div>
        </div>


        <div className='homepage-our-services-section-card-fourth'>
          <div className='homepage-our-services-section-card-first-image'>
            <div style={{ paddingLeft: '1.875rem', paddingTop: '1.25rem' }}>
              <div style={{ color: "green" }} className="material-symbols-outlined">Redeem</div>
            </div>
            <div style={{ paddingLeft: '1.25rem', paddingTop: '1.25rem' }}>
              <h3 style={{ fontFamily: 'Roboto, sans-serif', fontSize: '22px', color: '#333' }}>Çekilişler ve Hediyeler</h3>
            </div>
          </div>
          <div>
            <p style={{ fontSize: '16px', color: '#666', lineHeight: '1.6', marginTop: '10px', paddingLeft: "0.625rem" }}>
              Kullanıcılarımıza düzenlediğimiz çekilişlerle harika hediyeler kazanma şansı sunuyoruz. Katılın, şansınızı deneyin!
            </p>
          </div>
        </div>
        <div>
        </div>
      </div>



      <div className='homepage-statistics-section'>
        <div style={{ paddingLeft: '3.125rem', paddingTop: '3.75rem' }}>
          <div style={{ fontFamily: "Inter", fontSize: '30px', color: '#4D4D4D', fontWeight: '600' }}>Halı Sahadan</div>
          <div style={{ fontFamily: "Inter", fontSize: '30px', color: '#4CAF4F', fontWeight: '600' }}>Randevu almak şimdi çok kolay</div>
          <div style={{ fontFamily: "Inter", fontSize: '15px', color: '#18191F' }}>Sizin için farklı şehirlerdeki halısahaları bir araya getirdik</div>
        </div>

        <div style={{ paddingLeft: '31.25rem', paddingTop: '3.75rem' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <div className='material-symbols-outlined' style={{ color: 'green' }}>Group</div>
                <div style={{ paddingLeft: "0.625rem" }}>
                  <div style={{ fontFamily: "Inter", fontWeight: "700", fontSize: "24px" }}>
                    {members.toString()}
                  </div>
                  <div style={{ fontFamily: "Inter", fontWeight: "400", fontSize: "11px", color: "#717171" }}>
                    Üyeler
                  </div>
                </div>
              </div>
              <div style={{ paddingLeft: "6.25rem", display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <div className='material-symbols-outlined' style={{ color: 'green' }}>Calendar_Month</div>
                <div style={{ paddingLeft: "0.625rem" }}>
                  <div style={{ fontFamily: "Inter", fontWeight: "700", fontSize: "24px" }}>
                    {rezervations.toString()}
                  </div>
                  <div style={{ fontFamily: "Inter", fontWeight: "400", fontSize: "11px", color: "#717171" }}>
                    Rezervasyonlar
                  </div>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', paddingTop: "0.625rem" }}>
              <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <div className='material-symbols-outlined' style={{ color: 'green' }}>tooltip_2</div>
                <div style={{ paddingLeft: "0.625rem" }}>
                  <div style={{ fontFamily: "Inter", fontWeight: "700", fontSize: "24px" }}>
                    {comments.toString()}
                  </div>
                  <div style={{ fontFamily: "Inter", fontWeight: "400", fontSize: "11px", color: "#717171" }}>
                    Yorumlar
                  </div>
                </div>
              </div>
              <div style={{ paddingLeft: "6rem", display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <div className='material-symbols-outlined' style={{ color: 'green' }}>Share</div>
                <div style={{ paddingLeft: "0.625rem" }}>
                  <div style={{ fontFamily: "Inter", fontWeight: "700", fontSize: "24px" }}>
                    {sharings.toString()}
                  </div>
                  <div style={{ fontFamily: "Inter", fontWeight: "400", fontSize: "11px", color: "#717171" }}>
                    Paylaşımlar
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
            </div>
            <div>
            </div>
          </div>
        </div>
      </div>

      <div className='homepage-about-section'>
        <div style={{ paddingLeft: '6.25rem', paddingTop: '3.75rem' }}>
          <img src={pana} alt="logo" style={{ width: '400px', height: 'auto' }} />
        </div>
        <div style={{ paddingLeft: '9.375rem', paddingTop: '0rem' }}>
          <section className="homepage-about-us-highlight">
            <div className="homepage-about-us-container">
              <h2 onClick={donothing} style={{ fontFamily: 'Inter', fontWeight: '700' }}>
                Futbol Tutkunları için En İyi Sahaları Sunuyoruz!
              </h2>
              <p>
                Sahan Cepte ile en yakın halı sahaları zahmetsizce keşfedin, rezervasyonunuzu yapın ve oyunun tadını çıkarın.
                Sporseverlere özel kampanyalarla her zaman en iyi hizmeti sunuyoruz!
              </p>
              <a href="/about" className="homepage-btn-learn-more">Bizi Daha Yakından Tanıyın</a>
            </div>
          </section>
        </div>
      </div>
      
      <div>
      </div>
    </div>
  );
}
export default Homepage;
