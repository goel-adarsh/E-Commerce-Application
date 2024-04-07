import './Error.css';

export default function Error({ title, message }) {
  return (
    <div className="error">
      <h2>{title}</h2>
      <p>{message}</p>
      <p>Please try again after sometime...</p>
    </div>
  );
}
