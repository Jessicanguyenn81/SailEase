import { useLocation, Link } from 'react-router-dom';
import './ConfirmActivity.css';

export default function ConfirmActivity() {
  const location = useLocation();
  const activity = location.state;

  return (
    <div className='flex-ctr-ctr flex-col confirm-excursion-div'>
      <div className='width-396'>
        <h1>Confirmed!</h1>
        <p>Thank you for your reservation for: </p>
        <h2>{activity.name}</h2>
        <span>Reservation number: <h1>{Math.floor(Math.random() * 3000 + 1000)}</h1></span>
        <h3>QR Code ? </h3>
        <img src="https://media.istockphoto.com/id/828088276/vector/qr-code-illustration.jpg?s=612x612&w=0&k=20&c=FnA7agr57XpFi081ZT5sEmxhLytMBlK4vzdQxt8A70M=" alt="qr code" />      
      </div>
        <Link to="/" className="black-btn width-396" state={activity}>Go back Home</Link>
        <Link to="" className="red-btn width-396" state={activity}>Cancel Reservation</Link>
    </div>
  )
}

