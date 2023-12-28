import { useEffect, useState } from "react";
import { Container } from "../components/Container";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState(5);

  useEffect(() => {
    const id = setInterval(() => {
      setTimeLeft((p) => p - 1);
    }, 1000);
    return () => {
      clearTimeout(id);
    };
  }, [navigate]);

  useEffect(() => {
    if (timeLeft === 0) {
      navigate("/");
    }
  }, [navigate, timeLeft]);

  return (
    <Container>
      <section>
        <h1>404</h1>
        <p>
          You will automatically redirect after{" "}
          <span style={{ fontWeight: 700 }}>{timeLeft}</span>
        </p>
        <button onClick={() => navigate(-1, { replace: true })}>go back</button>
      </section>
    </Container>
  );
};

export default NotFoundPage;
