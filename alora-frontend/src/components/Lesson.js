import './App.css';
import lesson from './images/Lessons-logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container } from 'react-bootstrap';

function Lesson() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '9%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '35%', marginBottom: '10px' }}>
        <h1 style={{ color: 'black', fontSize: '1.5rem' }}>Disposable Income</h1>
        <h1 style={{ color: '#f54b02', fontSize: '1.5rem' }}>Lesson 1</h1>
      </div>

      <Container style={{ position: 'fixed', bottom: '40%', left: '30%', maxWidth: '600px' }}>
      <img src={lesson} className="lesson" alt="" width="7%" height="auto" style={{ position: 'relative', left: '-5%', marginBottom: '-.75%'}}/>
        <div className="ratio ratio-16x9" style={{ borderRadius: '30px' }}>
          <iframe
            src="https://www.youtube.com/embed/i-GgLuRGecY?si=kaQNZYpjywHG1--d"
            title="YouTube video"
            allowFullScreen
            style={{ borderRadius: '30px' }} // Adjust the radius value as needed
          ></iframe>
        </div>
      </Container>

      <div className="horizontal-line"></div>
    </div>
  );
}
  
export default Lesson;